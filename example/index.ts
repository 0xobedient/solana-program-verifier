import { decode_verification_pda_data } from '@0xobedient/solana-program-verifier';


const main = async () => {
  const data = decode_verification_pda_data("ce65c2888771730c53293c1ed65602650e70486ed80bb0e9b38e908f53d5e1a99c9dd4b346967c0eefae07731701872e5391cb1a51627c845f1e12e9754d110f87751ac868003b5f05000000302e302e314400000068747470733a2f2f6769746875622e636f6d2f30786f62656469656e742f736f6c616e612d7665726966792d736f6c616e612d6167656e742d6b69742d6578616d706c652800000033373766393333626663363961306536306161343431393630363832393063356364633131643764020000000e0000002d2d6c6962726172792d6e616d6518000000736f6c616e615f6167656e745f6b69745f6578616d706c650d0f001500000000fe");

  console.log(data)

  /**
    {
      address: '6bdJpVRqvStcE7DJjdpRRHGUSKXE82ym9KMYbeKxC6td',
      signer: 'H8cMR58GhYszD5uBE5YT4xtbsei3L58ZjdQJ6t4Tcv46',
      version: '0.0.1',
      git_url: 'https://github.com/0xobedient/solana-verify-solana-agent-kit-example',
      commit: '377f933bfc69a0e60aa44196068290c5cdc11d7d',
      args: [ '--library-name', 'solana_agent_kit_example' ],
      deploy_slot: '352325389',
      bump: 254
    }
   */
}

main()