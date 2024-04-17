import {
  Connection,
  Keypair,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";

export async function sendTokens(
  toAddress: string,
  amount: number,
): Promise<string> {
  const connection = new Connection("https://api.devnet.solana.com"); // Replace with appropriate endpoint for your network
  const treasuryKeyPair = Keypair.fromSecretKey(
    Uint8Array.from(Buffer.from(TREASURY_PRIVATE_KEY, "hex")),
  );

  const transaction = new Transaction();
  transaction.add(
    SystemProgram.transfer({
      fromPubkey: treasuryKeyPair.publicKey,
      toPubkey: new PublicKey(toAddress),
      lamports: amount * SOLANA_LAMPORTS_PER_TOKEN, // Replace with conversion rate
    }),
  );

  await transaction.sign(treasuryKeyPair);

  const txHash = await connection.sendTransaction(transaction);
  console.log("Transaction hash:", txHash);

  return txHash;
}
