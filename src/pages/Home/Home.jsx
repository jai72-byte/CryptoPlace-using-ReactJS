import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import "./Home.css";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [sortBy, setSortBy] = useState("rank");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortCoins = (coins) => {
    switch (sortBy) {
      case "price":
        return [...coins].sort((a, b) => b.current_price - a.current_price);
      case "marketCap":
        return [...coins].sort((a, b) => b.market_cap - a.market_cap);
      case "rank":
      default:
        return [...coins].sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    }
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(sortCoins(allCoin));
      setCurrentPage(1);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const filtered = allCoin.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(sortCoins(filtered));
    setCurrentPage(1);
  };

  useEffect(() => {
    setDisplayCoin(sortCoins(allCoin));
  }, [allCoin, sortBy]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCoins = displayCoin.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(displayCoin.length / itemsPerPage);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest
          <br />
          Crypto Marketplaces
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search crypto..."
          />
          <datalist id="coinlist">
            {allCoin.map((c) => (
              <option key={c.id} value={c.name} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-header-controls">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="rank">Rank</option>
            <option value="price">Price</option>
            <option value="marketCap">Market Cap</option>
          </select>
        </div>

        <div className="table-layout header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24 h&nbsp;%</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {currentCoins.map((coin) => (
          <Link to={`/coin/${coin.id}`} className="table-layout" key={coin.id}>
            <p>{coin.market_cap_rank}</p>
            <div>
              <img src={coin.image} alt={coin.name} />
              <p>
                {coin.name} - {coin.symbol.toUpperCase()}
              </p>
            </div>
            <p>
              {currency.symbol} {coin.current_price.toLocaleString()}
            </p>
            <p
              className={coin.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {coin.price_change_percentage_24h.toFixed(2)}
            </p>
            <p className="market-cap">
              {currency.symbol} {coin.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page&nbsp;{currentPage}&nbsp;of&nbsp;{totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
