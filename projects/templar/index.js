const { stakings } = require("../helper/staking");
const { sumTokensAndLPsSharedOwners } = require("../helper/unwrapLPs");

const bscStaking = "0xa1f61Ca61fe8655d2a204B518f6De964145a9324";
const bscStakingV2 = "0xffC7B93b53BC5F4732b414295E989684702D0eb5";
const bscTreasuryContract = "0xd01e8D805BB310F06411e70Fd50eB58cAe2B4C27";

const bscToken = {
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  MIM: "0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba",
  TM: "0x194d1D62d8d798Fcc81A6435e6d13adF8bcC2966",
  DAI: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  TEM: "0x19e6BfC1A6e4B042Fb20531244D47E252445df01",
};

async function bscTvl(timestamp, block, chainBlocks, { api }) {
  const balances = api.getBalances();
  await sumTokensAndLPsSharedOwners(
    balances,
    [
      [bscToken.TM, false],
      [bscToken.DAI, false],
    ],
    [bscTreasuryContract],
    chainBlocks.bsc,
    "bsc",
    (addr) =>
      addr === bscToken.TM.toLowerCase()
        ? `bsc:${bscToken.BUSD}`
        : `bsc:${addr}`
  );

  return balances;
}

module.exports = {
  bsc: {
    tvl: bscTvl,
    staking: stakings([bscStaking, bscStakingV2], bscToken.TEM, "bsc"),
  },
};
