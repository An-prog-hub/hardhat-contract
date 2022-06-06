async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("MerkleTree");
  const token = await Token.deploy();

  console.log("Congratulations! your contract is deployed at:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
