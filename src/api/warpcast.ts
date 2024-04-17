import { Warpcast } from "warpcast";

class WarpcastClient {
  private readonly warpcast: Warpcast;

  constructor(projectId: string) {
    this.warpcast = new Warpcast(projectId);
  }

  async fetchUserProfile(userId: string): Promise<UserProfile> {
    return await this.warpcast.fetchUserProfile(userId);
  }

  async fetchRecastedFrames(frameId: string): Promise<RecastedFrame[]> {
    return await this.warpcast.fetchRecastedFrames(frameId);
  }
}

export default WarpcastClient;
