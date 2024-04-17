import React from "react";
import ReactDOM from "react-dom";
import { WarpcastClient } from "../api/warpcast";
import { checkDailyAllocation, sendTokens } from "../utils/helpers";

const App: React.FC = () => {
  const [userStatus, setUserStatus] = useState<UserStatus>({
    isFollowing: false,
    hasRecasted: false,
    hasWallet: false,
    hasDailyAllocation: false,
  });

  useEffect(() => {
    const fetchUserStatus = async () => {
      const warpcastClient = new WarpcastClient(constants.PROJECT_ID);
      const userProfile = await warpcastClient.fetchUserProfile("YOUR_USER_ID");
      const recastedFrames = await warpcastClient.fetchRecastedFrames("YOUR_FRAME_ID");

      setUserStatus({
        isFollowing: userProfile.following.some((f) => f.fid === constants.PROJECT_ID),
        hasRecasted: recastedFrames.some((f) => f.id === "YOUR_FRAME_ID"),
      });
    };

    const checkWallet = async () => {
      const walletAddress = await warpcastClient.getConnectedWalletAddress();
      setUserStatus((prevStatus) => ({ ...prevStatus, hasWallet: !!walletAddress }));
    };

    fetchUserStatus();
    checkWallet();
  }, []);

  const handleClaim = async () => {
    const { hasDailyAllocation, hasWallet } = userStatus;
    if (!hasDailyAllocation) {
      return; // Already claimed or allocation unavailable
    }

    if (!hasWallet) {
      return; // No wallet connected
    }

    const walletAddress = await warpcastClient.getConnectedWalletAddress();
    await sendTokens(walletAddress, constants.TOKEN_CONTRACT_ADDRESS);
    setUserStatus((prevStatus) => ({ ...prevStatus, hasDailyAllocation: false }));
  };

  return (
    <div className="frame-container">
      <header className="frame-header">
        <h2>Daily Token Giveaway</h2>
      </header>
      <main className="frame-content">
        {userStatus.isFollowing && userStatus.hasRecasted ? (
          <>
            {userStatus.hasDailyAllocation ? (
              <div className="claim-section">
                <p>You have a daily allocation available!</p>
                <button onClick={handleClaim} className="claim-button">
                  Claim Tokens
                </button>
              </div>
            ) : (
              <div className="message-section">
                <p>Come back in 24 hours to claim your next daily allocation.</p>
              </div>
            )}
          </>
        ) : (
          <div className="message-section">
            <p>
              Follow our project and recast this frame to enter the giveaway!
            </p>
            <img src="images/follow-recast.png" alt="Follow and Recast" />
          </div>
        )}
        {!userStatus.hasWallet && (
          <div className="message-section">
            <p>Please connect your wallet to claim tokens.</p>
          </div>
        )}
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
