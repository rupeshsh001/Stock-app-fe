import { AiFillHeart } from "react-icons/ai";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getAllStock, updateLiked } from "../../store/stockAction";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const StockCard = ({ stock }) => {
    const dispatch = useDispatch();
    const handleLiked = (id, likedVal) => {
        const reqBody = {
            liked: !likedVal,
        };
        dispatch(updateLiked(id, reqBody)).then((res) => {
            if (res) {
                dispatch(getAllStock());
            }
        });
    };

    const priceDiff = stock.price - stock.previousPrice < 0 ? false : true;

    return (
        <div className="card">
            <div className="card-content">
                <h4>{stock.stockName}</h4>
                <div className="price-heart">
                    <div style={{ color: priceDiff ? "green" : "#F16233", display: "flex", alignItems: "center" }}>
                        <span>{stock.price}</span>
                        <span>
                            {priceDiff ? (
                                <BiUpArrowAlt style={{ fontSize: "24px" }} />
                            ) : (
                                <BiDownArrowAlt style={{ fontSize: "24px" }} />
                            )}
                        </span>
                    </div>

                    <div className="heart-icon">
                        <AiFillHeart
                            style={{ color: stock.liked ? "red" : "inherit" }}
                            onClick={() => handleLiked(stock._id, stock.liked)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

StockCard.propTypes = {
    stock: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        stockName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        previousPrice: PropTypes.number.isRequired,
        liked: PropTypes.bool.isRequired,
        createdAt: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
    }).isRequired,
};

export default StockCard;
