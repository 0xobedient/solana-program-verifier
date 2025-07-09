import { PDADataType } from "../shared";
import { IAccountDecoder } from "./IAccountDecoder";
import bs58 from "bs58";

export class AccountDecoder implements IAccountDecoder {
  private readonly buffer: Buffer;
  private readonly hex: string;

  constructor(hex: string) {
    this.hex = hex;
    this.buffer = Buffer.from(hex, "hex");
  }

  public decodeAddress() {
    const offset: number = 16;
    const addressHex = this.hex.slice(offset, offset + 64);
    const address = bs58.encode(Buffer.from(addressHex, "hex"));

    return address;
  }

  public decodeSigner() {
    const offset: number = 80;
    const addressHex = this.hex.slice(offset, offset + 64);
    const address = bs58.encode(Buffer.from(addressHex, "hex"));

    return address;
  }

  public decode(): PDADataType {
    let offset = 64;

    offset += 8;

    const versionLength = this.buffer.readUInt32LE(offset);
    offset += 4;

    const version = this.buffer
      .slice(offset, offset + versionLength)
      .toString("utf-8");
    offset += versionLength;

    const gitUrlLength = this.buffer.readUInt32LE(offset);
    offset += 4;

    const git_url = this.buffer
      .slice(offset, offset + gitUrlLength)
      .toString("utf-8");
    offset += gitUrlLength;

    const commitLength = this.buffer.readUInt32LE(offset);
    offset += 4;

    const commit = this.buffer
      .slice(offset, offset + commitLength)
      .toString("utf-8");
    offset += commitLength;

    const argsLength = this.buffer.readUInt32LE(offset);
    offset += 4;

    const args: string[] = [];
    for (let i = 0; i < argsLength; i++) {
      const argLength = this.buffer.readUInt32LE(offset);
      offset += 4;
      const arg = this.buffer
        .slice(offset, offset + argLength)
        .toString("utf-8");
      offset += argLength;
      args.push(arg);
    }

    const deploySlotLow = this.buffer.readUInt32LE(offset);
    const deploySlotHigh = this.buffer.readUInt32LE(offset + 4);
    const deploy_slot = (
      (BigInt(deploySlotHigh) << 32n) |
      BigInt(deploySlotLow)
    ).toString();
    offset += 8;

    const bump = this.buffer.readUInt8(offset);

    return {
      address: this.decodeAddress(),
      signer: this.decodeSigner(),
      version,
      git_url,
      commit,
      args,
      deploy_slot,
      bump,
    };
  }
}
