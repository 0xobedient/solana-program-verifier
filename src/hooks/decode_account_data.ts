import bs58 from "bs58";
import { handleError } from "../shared";

export function decode_account_data(hex: string) {
  try {
    const buffer = Buffer.from(hex, "hex");

    const addressOffset = 16;
    const addressHex = hex.slice(addressOffset, addressOffset + 64);
    const address = bs58.encode(Buffer.from(addressHex, "hex"));

    const signerOffset: number = 80;
    const signerHex = hex.slice(signerOffset, signerOffset + 64);
    const signer = bs58.encode(Buffer.from(signerHex, "hex"));

    let offset = 64;

    offset += 8;

    const versionLength = buffer.readUInt32LE(offset);
    offset += 4;

    const version = buffer
      .slice(offset, offset + versionLength)
      .toString("utf-8");
    offset += versionLength;

    const gitUrlLength = buffer.readUInt32LE(offset);
    offset += 4;

    const git_url = buffer
      .slice(offset, offset + gitUrlLength)
      .toString("utf-8");
    offset += gitUrlLength;

    const commitLength = buffer.readUInt32LE(offset);
    offset += 4;

    const commit = buffer
      .slice(offset, offset + commitLength)
      .toString("utf-8");
    offset += commitLength;

    const argsLength = buffer.readUInt32LE(offset);
    offset += 4;

    const args: string[] = [];
    for (let i = 0; i < argsLength; i++) {
      const argLength = buffer.readUInt32LE(offset);
      offset += 4;
      const arg = buffer.slice(offset, offset + argLength).toString("utf-8");
      offset += argLength;
      args.push(arg);
    }

    const deploySlotLow = buffer.readUInt32LE(offset);
    const deploySlotHigh = buffer.readUInt32LE(offset + 4);
    const deploy_slot = (
      (BigInt(deploySlotHigh) << 32n) |
      BigInt(deploySlotLow)
    ).toString();
    offset += 8;

    const bump = buffer.readUInt8(offset);

    return {
      address,
      signer,
      version,
      git_url,
      commit,
      args,
      deploy_slot,
      bump,
    };
  } catch (error) {
    throw handleError(error, "decode_account_data");
  }
}
