// const sdk = require("@defillama/sdk");
const { stakings } = require("../helper/staking");
const { sumTokens2 } = require("../helper/unwrapLPs");

const bscTem = "0x19e6BfC1A6e4B042Fb20531244D47E252445df01";
const bscStaking = "0xa1f61Ca61fe8655d2a204B518f6De964145a9324";
const bscStakingV2 = "0xffC7B93b53BC5F4732b414295E989684702D0eb5";
// const bscTreasuryContract = "0xd01e8D805BB310F06411e70Fd50eB58cAe2B4C27";
const bscUniswapV3LP = "0xe39cfc1a2e51a09ecbd060a24ee4eef5a97697bb";

const bscToken = {
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  MIM: "0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba",
};

async function bscTvl(timestamp, block, chainBlocks, { api }) {
  // const balances = api.getBalances();

  // await sumTokensAndLPsSharedOwners(
  //   balances,
  //   [
  //     ["0xe9e7cea3dedca5984780bafc599bd69add087d56", false], // BUSD
  //     ["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", false], // WBNB
  //     ["0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba", false], // MIM
  //     ["0x9911e98974d0badde85bd5f4d1f93087aa3ec5fa", true], // MIM-BUSD CAKELP
  //     ["0xbf598a387c5f96f8bac9bdccf8fb68bc189cdff7", true], // TEM-MIM CAKELP
  //     ["0x1ede821daade714edade648f525ada0c5fe4ee3a", true], // TEM-BUSD CAKELP
  //   ],
  //   [bscTreasuryContract],
  //   chainBlocks.bsc,
  //   "bsc",
  //   (addr) => {
  //     if (addr.toLowerCase() === "0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba") {
  //       return "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3";
  //     }
  //     return `bsc:${addr}`;
  //   }
  // );

  return sumTokens2({
    api,
    owner: bscUniswapV3LP,
    tokens: [bscToken.BUSD, bscToken.WBNB, bscToken.MIM],
  });
}

module.exports = {
  bsc: {
    tvl: bscTvl,
    staking: stakings([bscStaking, bscStakingV2], bscTem, "bsc"),
  },
};
