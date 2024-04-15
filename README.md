# Frame for Farcaster

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
