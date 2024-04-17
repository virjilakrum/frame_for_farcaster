import React from "react";

const FollowRecastCheck = ({
  isFollowing,
  hasRecasted,
}: {
  isFollowing: boolean;
  hasRecasted: boolean;
}) => {
  if (!isFollowing || !hasRecasted) {
    return (
      <div>
        <p>
          Please follow the project and recast the frame to enter the giveaway!
        </p>
        {/* Add an image if desired */}
      </div>
    );
  }

  return null; // If followed and recasted, don't show anything
};

export default FollowRecastCheck;
