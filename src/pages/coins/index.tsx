/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import axios from "axios";
import Image from "next/image";
import React from "react";

function CoinList({ coinData }: { coinData: any }) {
  console.log(coinData);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        justifyContent: "space-around",
        padding: "80px",
      }}
    >
      {coinData.coins.map((coin: any) => (
        <div
          style={{
            background: "green",
            minWidth: "30%",
            backgroundColor: "white",
            color: "black",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            borderRadius: "10px",
            gap: "10px",
          }}
        >
          <img src={coin.icon} style={{ width: "50px" }} />
          <h2>{coin.name}</h2>
          <p>{coin.price}</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async ({ params }: any) => {
  console.log(params);
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  console.log(data, "dataset");
  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};
export default CoinList;
