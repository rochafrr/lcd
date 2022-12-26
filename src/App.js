import "./App.css";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";

function App() {
  const [totalSupply, setTotalSupply] = useState();
  const [staking, setStaking] = useState();
  const [latestBlock, setLatestBlock] = useState();
  //const [burn, setBurn] = useState([])
  const [pool, setPool] = useState([]);

  useEffect(() => {
    fetchData1();
    fetchData3();
    fetchData4();
    fetchData5();
    //fetchData6();
  }, []);

  const fetchData1 = async () => {
    try {
      const data = await fetch("https://fcd.terra.dev/v1/totalsupply/luna");
      const result1 = await data.json();
      setTotalSupply(result1);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData3 = async () => {
    try {
      const data3 = await fetch(
        "https://lcd.terra.dev/cosmos/staking/v1beta1/pool"
      );
      const result3 = await data3.json();
      setStaking(result3.pool.bonded_tokens);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData4 = async () => {
    try {
      const data4 = await fetch(
        "https://lcd.terra.dev/cosmos/distribution/v1beta1/community_pool"
      );
      const result4 = await data4.json();
      const luncCommunityPool = result4.pool.filter(
        (coin) => coin.denom === "uluna"
      )[0].amount;
      setPool(luncCommunityPool);
      console.log(luncCommunityPool);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData5 = async () => {
    try {
      const data5 = await fetch("https://fcd.terra.dev/blocks/latest");
      const result5 = await data5.json();
      setLatestBlock(result5.block.header.height);
    } catch (err) {
      console.error(err);
    }
  };

  // const fetchData6 = async () => {
  //try {
  //const data6 = await fetch('https://fcd.terra.dev/v1/txs?account=terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu');
  //const result6 = await data6.json();
  //const burnList = result6.txs.map((tx) => {
  //console.log(tx)
  //if (tx.tx.value.msg[0].type === 'wasm/MsgExecuteContract') {
  //return {
  //chainId: tx.chainId,
  //height: tx.height,
  //amount: tx.tx.value.msg[0].value.coins[0].amount,
  //};
  //} else if (tx.tx.value.msg[0].type === 'bank/MsgSend') {
  //return {
  // chainId: tx.chainId,
  //height: tx.height,
  //amount: tx.tx.value.msg[0].value.amount[0].amount,
  // };
  //} else {
  //return {
  // chainId: tx.chainId,
  // height: tx.height,
  //amount: 0,
  //};
  //}
  //});
  // setBurn(burnList);
  // console.log(burnList);
  //} catch (err) {
  // console.error(err);
  //}

  //};

  return (
    <div className="App">
      <Coin
        TotalSupply={totalSupply}
        Staking={staking}
        BlockHeight={latestBlock}
        //Burn={burn}
        Pool={pool}
      />
    </div>
  );
}

export default App;
