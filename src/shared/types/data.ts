import { OSEC_ROUTER } from "../../shared";

export type RouterKeyType = keyof typeof OSEC_ROUTER;

export type RouterType = typeof OSEC_ROUTER;

export type PDADataType = {
  address: string;
  signer: string;
  version: string;
  git_url: string;
  commit: string;
  args: string[];
  deploy_slot: string;
  bump: number;
};
