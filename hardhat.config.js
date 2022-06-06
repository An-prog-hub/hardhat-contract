/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_PROJECT_ID = "6e1de57123f04532a1a4380ca4b5386464f8f8b9"; // maybe this is invalid now!
const SECRET_KEY = "<RINKEBY_SECRET_KEY>"; // generated using https://privatekeys.pw/keys/ethereum/random

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.9",

  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [SECRET_KEY],
    },
  },
};
