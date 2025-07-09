export type GetVerifiedProgramsResponse = {
  meta: {
    total: number;
    page: number;
    total_pages: number;
    items_per_page: number;
    has_next_page: boolean;
    has_prev_page: boolean;
  };
  verified_programs: string[];
};

export type GetProgramVerificationStatusResponse = {
  is_verified: boolean;
  message: string;
  on_chain_hash: string;
  executable_hash: string;
  repo_url: string;
  commit: string;
  last_verified_at: string;
  is_frozon: boolean;
};

export type GetVerificationJobStatusResponse = {
  status: string;
  message: string;
  on_chain_hash: string;
  executable_hash: string;
  repo_url: string;
};

export type VerifyProgramResponse = {
  tx: string;
  pda: string;
};

export type CheckVerifyProgramResponse =
  | {
      status: string;
      request_id: string;
      message: string;
    }
  | { status: string; error: string; message: string };

export type DecodeAccountDataResponse = {
  address: string;
  signer: string;
  version: string;
  git_url: string;
  commit: string;
  args: string[];
  deploy_slot: string;
  bump: number;
};
