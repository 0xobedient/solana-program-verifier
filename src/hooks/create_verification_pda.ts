import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import {
  CreateVerificationPdaParams,
  handleError,
  OTTER_SEC_PROGRAM_ID,
  PDA_INITIALIZE_SEED,
  CreateVerificatoinPdaResponse,
} from "../shared";
import { AnchorProvider, Idl, Program, Wallet } from "@coral-xyz/anchor";
import IDL from "../idl/otter_sec_idl.json";

export async function create_verification_pda(
  connection: Connection,
  keypair: Keypair,
  programId: string,
  params:   CreateVerificationPdaParams,
): Promise<CreateVerificatoinPdaResponse> {
  try {
    const wallet = new Wallet(keypair);
    const provider = new AnchorProvider(connection, wallet, {});
    const program = new Program(IDL as Idl, provider);

    const [pda, _] = PublicKey.findProgramAddressSync(
      [
        Buffer.from(PDA_INITIALIZE_SEED),
        keypair.publicKey.toBuffer(),
        new PublicKey(programId).toBuffer(),
      ],
      new PublicKey(OTTER_SEC_PROGRAM_ID)
    );

    const accounts = {
      buildParams: pda,
      authority: keypair.publicKey,
      programAddress: new PublicKey(programId),
      systemProgram: SystemProgram.programId,
    };

    const tx = await program.methods
      .initialize(params)
      .accounts(accounts)
      .signers([keypair])
      .rpc();

    return {
      tx,
      pda: pda.toBase58(),
    };
  } catch (error) {
    console.log(error);
    throw new Error(handleError(error, "create_verification_pda"));
  }
}