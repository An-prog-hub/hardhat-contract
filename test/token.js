const { expect } = require("chai");

describe("MerkleToken", () => {
  it("Deployment should assign the total supply of tokens to the owner"),
    async function () {
      const [owner] = await ethers.getSigners();
    //   console.log("Signers:", owner);

      const Token = await ethers.getContractFactory("MerkleToken");

      const hardhatToken = await Token.deploy();

      const ownerBalance = await hardhatToken.balanceOf(owner.address);

    //   console.log("Owner balance:", owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    };
});
