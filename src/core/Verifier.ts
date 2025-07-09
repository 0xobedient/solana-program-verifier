import { Connection, Keypair } from "@solana/web3.js";
import {
  check_verify_program,
  get_program_build_log,
  get_program_verification_status,
  get_verification_job_status,
  get_verified_programs,
  verify_program,
} from "../hooks";
import {
  CheckVerifyParams,
  GetProgramBuildLogParams,
  GetProgramVerificationStatusParams,
  GetVerificationJobStatusParams,
  VerifyParams,
} from "../shared";
import { IVerifer } from "./IVerifier";

export class Verifier implements IVerifer {
  constructor() {}

  public async checkVerifyProgram(params: CheckVerifyParams) {
    return check_verify_program(params);
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
    connection: Connection,
    keypair: Keypair,
    programId: string,
    params: VerifyParams
  ) {
    return verify_program(connection, keypair, programId, params);
  }
}
