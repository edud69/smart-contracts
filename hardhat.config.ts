import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/C89aF66hJf0wN2kVw2u5Vg0kFxL0tDrD',
      accounts: [
        '676b2853c84eed23a00f3c7faaf3ef8c3914ce2bf9e701a7f4520a813b6ff8ac'
      ]
    }
  }
};

export default config;
