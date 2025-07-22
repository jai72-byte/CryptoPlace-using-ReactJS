import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "../../components/LineChart/LineChart.jsx";
import { CoinContext } from "../../context/CoinContext";

import "./Coin.css";

const Coin = () => {
  const { coinId } = useParams();
  const [coindata, setcoindata] = useState();
  const [historialdata, sethistoricaldata] = useState();
  const { currency } = useContext(CoinContext);

  const fetchcoindata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ur2sgKF2eyMdKnWmE7fB9mWM",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setcoindata(res))
      .catch((err) => console.error(err));
  };

  const fetchhistoricaldata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ur2sgKF2eyMdKnWmE7fB9mWM",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => sethistoricaldata(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchcoindata();
    fetchhistoricaldata();
  }, [currency]);

  if (coindata && historialdata) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coindata.image.large} alt="" />
          <p>
            <b>
              {coindata.name} ({coindata.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <LineChart historialdata={historialdata} />
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coindata.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}{" "}
              {coindata.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol}{" "}
              {coindata.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour High</li>
            <li>
              {currency.symbol}{" "}
              {coindata.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour Low</li>
            <li>
              {currency.symbol}{" "}
              {coindata.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
