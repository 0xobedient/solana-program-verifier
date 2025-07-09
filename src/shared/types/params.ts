import BN from "bn.js";

export type VerifyParams = {
  version: string;
  gitUrl: string;
  commit: string;
  args: string[];
  deploySlot: BN;
};

export type CheckVerifyParams = {
  program_id: string;
  repository: string;
  commit_hash: string;
  base_image?: string;
  bpf_flag?: boolean;
  cargo_args?: string[];
  lib_name?: string;
  mount_path?: string;
};

export type GetProgramVerificationStatusParams = {
  address: string;
};

export type GetVerificationJobStatusParams = {
  job_id: string;
};

export type GetProgramBuildLogParams = {
  address: string;
};
