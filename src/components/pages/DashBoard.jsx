import { useEffect, useState } from "react";
import StockCard from "../Cards/StockCard";
import "./DashBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllStock, getStockByLiked, getStockByName } from "../../store/stockAction";
import { BsSearch } from "react-icons/bs";
import useDebounceValue from "../../hooks/useDebounceValue";

const DashBoard = () => {
    const { stocks } = useSelector((state) => state.stocks);
    const [searchStock, setSearchStock] = useState("");
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();
    const debouncedVal = useDebounceValue(searchStock, 500);

    const fetchData = () => {
        dispatch(getAllStock());
    };

    useEffect(() => {
        dispatch(getStockByName(debouncedVal));
    }, [dispatch, debouncedVal]);

    useEffect(() => {
        dispatch(getStockByLiked(favorite));
    }, [dispatch, favorite]);

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div className="search-input-container">
                <div className="search-bar">
                    <BsSearch />
                    <input
                        type="text"
                        placeholder="Search By Name"
                        className="search-input"
                        value={searchStock}
                        onChange={(e) => setSearchStock(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="btn"
                        style={{ backgroundColor: "#082e55" }}
                        onClick={() => {
                            setFavorite(!favorite);
                        }}
                    >
                        {favorite ? <span>ALL Stocks</span> : <span>My Favorites</span>}
                    </button>
                </div>
            </div>
            <div className="main-card-container">
                {stocks.length > 0 ? (
                    stocks.map((stock) => <StockCard key={stock._id} stock={stock} />)
                ) : (
                    <p style={{ margin: "50px auto", color: "#082e55" }}>No Stock Found!!!</p>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
