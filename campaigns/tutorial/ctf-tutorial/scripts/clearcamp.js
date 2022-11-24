const BANDIT_CAMP_ADDRESS = "0x0dDa48F24A53F08Ae7e21a90e9e486C694c55cfc"

async function main() {
  const camp = await ethers.getContractAt(
    "BanditCamp", BANDIT_CAMP_ADDRESS);

  await camp.clearCamp();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
