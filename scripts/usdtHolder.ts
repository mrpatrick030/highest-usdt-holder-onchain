import { ethers } from "hardhat";
const Web3 = require("web3");
//let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
var web3 = new Web3(
  "https://eth-mainnet.g.alchemy.com/v2/M8sB5u6bNh7yEEFzYUV9dhtTOT34yPlX"
);
//import * as request from "request";

async function main() {
  const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const holders = 1;
  const url = `https://api.ethplorer.io/getTopTokenHolders/${usdt}?apiKey=freekey&limit=${holders}`;
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      console.log(post);
    });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
