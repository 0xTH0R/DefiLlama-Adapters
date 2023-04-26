const { nullAddress, treasuryExports } = require("../helper/treasury");

const templarTreasury = "0xd01e8D805BB310F06411e70Fd50eB58cAe2B4C27";

const TEM = "0x19e6BfC1A6e4B042Fb20531244D47E252445df01";

module.exports = treasuryExports({
  bsc: {
    tokens: [
      nullAddress,
      "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", //BUSD
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", //WBNB
      "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", //DAI
      // "0x194d1D62d8d798Fcc81A6435e6d13adF8bcC2966", //TM
    ],
    owners: [templarTreasury],
    ownTokens: [TEM],
  },
});
