import React, { useState } from "react";
import { sendTokens } from "../api/solana"; // Import sendTokens function

const ClaimTokens = ({ walletAddress }: { walletAddress: string | null }) => {
  const [isClaiming, setIsClaiming] = useState<boolean>(false);
  const [claimResult, setClaimResult] = useState<string | null>(null);

  const handleClaim = async () => {
    if (!walletAddress) {
      return;
    }

    setIsClaiming(true);

    try {
      const txHash = await sendTokens(walletAddress, 1000); // Replace with desired token amount
      setClaimResult(txHash);
    } catch (error) {
      console.error("Error claiming tokens:", error);
      setClaimResult("Claim failed");
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div>
      {isClaiming ? <p>Claiming...</p> : null}
      {claimResult ? (
        <p>Claim successful! Tx hash: {claimResult}</p>
      ) : (
        <button onClick={handleClaim} disabled={isClaiming}>
          Claim Tokens
        </button>
      )}
    </div>
  );
};

export default ClaimTokens;
