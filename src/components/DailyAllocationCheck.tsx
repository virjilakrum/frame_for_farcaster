import React, { useState, useEffect } from "react";
import { getDailyAllocation } from "../utils/helpers"; // Implement getDailyAllocation function

const DailyAllocationCheck = ({
  walletAddress,
}: {
  walletAddress: string | null;
}) => {
  const [hasAllocation, setHasAllocation] = useState<boolean | null>(null);

  useEffect(() => {
    if (walletAddress) {
      const checkAllocation = async () => {
        const allocation = await getDailyAllocation(walletAddress);
        setHasAllocation(allocation !== null);
      };

      checkAllocation();
    }
  }, [walletAddress]);

  if (hasAllocation === null) {
    return <p>Loading...</p>;
  }

  if (!hasAllocation) {
    return (
      <div>
        <p>You've already claimed your daily tokens. Come back in 24 hours!</p>
        {/* Add an image if desired */}
      </div>
    );
  }

  return null; // If allocation available, don't show anything
};

export default DailyAllocationCheck;
