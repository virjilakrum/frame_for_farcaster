# Frame for Farcaster

## About Project

## Daily Token Giveaway Frame (For Warpcast)

**Overview:**

This daily token giveaway frame is a frame that can be used for daily token distribution on the Warpcast platform. Users can claim their daily token allocations after following the project and recasting the frame. The frame automates token distribution using the Solana blockchain and Warpcast API.

**Features:**

* **Daily Token Allocation:** Users can claim a certain amount of tokens once every 24 hours.
* **Easy Integration:** The frame can be easily integrated into the Warpcast platform with minimal coding.
* **Secure Token Distribution:** Tokens are distributed securely through the Solana blockchain.
* **Enhanced User Experience:** Users can claim tokens through a simple and easy-to-use interface.

**Use Cases:**

* **Increase Community Engagement:** Daily tokens can be used to incentivize users to participate in the project and be more active on the platform.
* **Reward Early Adopters:** Daily tokens can be used to reward users who support the project in its early stages.
* **Boost User Retention:** Daily tokens can be used to keep users engaged with the platform and encourage further participation.

**How to Use:**

1. **Project Setup:** Clone the frame's code from the GitHub repository ([Go to Repo](https://github.com/virjilakrum/frame_for_farcaster)).
2. **Install Requirements:** Install all required dependencies (`frames.js`, `warpcast`, `@solana/web3.js`).
3. **Configuration:** Set the `SOLANA_NETWORK`, `TOKEN_CONTRACT_ADDRESS`, and `TREASURY_WALLET_PRIVATE_KEY` values in the `package.json` file.
4. **Run:** Run the frame by executing the `npm start` command.
5. **Integration:** Integrate the frame into the Warpcast platform and allow users to claim tokens.

**Notes:**

* This frame is a starting point and can be customized according to your needs.
* Token distribution rules and amounts can be adjusted based on your project's specific requirements.
* For security reasons, never store the `TREASURY_WALLET_PRIVATE_KEY` value in code in a production environment.


**License:**

This frame is licensed under the MIT License.


## About the Listing & Scope

The goal of this project is to develop a Warpcast Frame that will be used for daily token giveaway. The frame has 3 key features:

1) check if the user has followed the project and recasted the given frame

2) check if the user has daily allocation of tokens available

3) send the token from a treasury wallet (public key and private key are given and needs to be hardcoded) to the wallet of the user. The wallet of the user is the same wallet connected to the warpcast account. The chain is BASE



## The decision tree is the following

User see the frame

    Check if the user is following the account and has recasted the frame

        IF NO, show image that says to follow and recast to enter the giveaway

        IF YES, move to step 2)

    Check if the user has daily allocation available. The quantity of tokens is fixed per user. Users can redeem only once every 24 hours.

        IF NO, it means he has already redeemed it. Show image that says to be back in 24 hours,

        IF YES, move to step 3)

    Check if the user has a wallet connected. Here we fetch the wallet address of the user (wallet address connected to the warpcast account) and send the tokens.

        If NO wallet, show image that tell him to setup a wallet

        If YES, send the tokens from the treasury wallet to the user wallet. Token contact address will be provided.


Note: daily allocation of tokens available is a simple table / data storage mechanism where the following informations are stored:

    timestamp

    Wallet address

    Amout_redeemed

    Tx hash

    Token contract address
