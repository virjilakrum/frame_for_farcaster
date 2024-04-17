import React, { useState, useEffect } from "react";
import WarpcastClient from "../api/warpcast";
import FollowRecastCheck from "../components/FollowRecastCheck";
import DailyAllocationCheck from "../components/DailyAllocationCheck";
import ConnectWallet from "../components/ConnectWallet";
import ClaimTokens from "../components/ClaimTokens";
import { constants } from "../utils/constants";
import { useFrame } from "frames.js";

const App: React.FC = () => {
  const { connect, address, disconnect } = useFrame();
  const [userStatus, setUserStatus] = useState<UserStatus>({
    isFollowing: false,
    hasRecasted: false,
  });

  const warpcastClient = new WarpcastClient(constants.PROJECT_ID);

  const [dailyAllocation, setDailyAllocation] =
    useState<DailyAllocation | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const warpcastClient = new WarpcastClient(constants.PROJECT_ID);

  useEffect(() => {
    const checkUserStatus = async () => {
      const userProfile = await warpcastClient.fetchUserProfile("YOUR_USER_ID"); // Replace with actual user ID
      const recastedFrames =
        await warpcastClient.fetchRecastedFrames("YOUR_FRAME_ID"); // Replace with frame ID

      setUserStatus({
        isFollowing: userProfile.following.some((f) => f.fid === constants.PROJECT_ID,
        ),
        hasRecasted: recastedFrames.some((f) => f.id === "YOUR_FRAME_ID"), // Replace with frame ID
      });
    };

    checkUserStatus();
  }, []);

  useEffect(() => {
    if (address) {
      setWalletAddress(address);
    }
  }, [address]);

  return (
    <div className="App">
      <h1>Daily Token Giveaway</h1>

      <FollowRecastCheck {...userStatus} />

      {userStatus.isFollowing && userStatus.hasRecasted && (
        <div>
          <DailyAllocationCheck walletAddress={walletAddress} />

          {walletAddress && dailyAllocation && (
            <ClaimTokens walletAddress={walletAddress} />
          )}

          {!walletAddress && (
            <div>
              <p>Please connect your wallet to claim tokens.</p>
              <button onClick={connect}>Connect Wallet</button>
            </div>
          )}
        </div>
      )}

      {!userStatus.isFollowing ||
        (!userStatus.hasRecasted && (
          <div>
            <p>
              Please follow the project and recast the frame to enter the
              giveaway!
            </p>
            {/* Add an image if desired */}
          </div>
        ))}
    </div>
  );
};

export default App;
