import { Connection, Keypair } from "@solana/web3.js";
import {
  create_verification_pda,
  get_program_build_log,
  get_program_verification_status,
  get_verification_job_status,
  get_verified_programs,
  verify_program,
} from "../hooks";
import {
  CreateVerificationPdaParams,
  GetProgramBuildLogParams,
  GetProgramVerificationStatusParams,
  GetVerificationJobStatusParams,
  VerifyParams,
} from "../shared";
import { IVerifer } from "./IVerifier";

export class Verifier implements IVerifer {
  constructor() {}

  public async createVerificationPda(
    connection: Connection,
    keypair: Keypair,
    programId: string,
    params: CreateVerificationPdaParams) {
    return create_verification_pda(connection, keypair, programId, params);
  }

  public async getProgramBuildLog(params: GetProgramBuildLogParams) {
    return get_program_build_log(params);
  }

  public async getProgramVerificationStatus(
    params: GetProgramVerificationStatusParams
  ) {
    return get_program_verification_status(params);
  }

  public async getVerificationJobStatus(
    params: GetVerificationJobStatusParams
  ) {
    return get_verification_job_status(params);
  }

  public async getVerifiedPrograms() {
    return get_verified_programs();
  }

  public async verifyProgram(
    params: VerifyParams
  ) {
    return verify_program(params);
  }
}
