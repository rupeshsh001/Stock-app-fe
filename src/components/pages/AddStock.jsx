import { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddStock.css";
import { addStock } from "../../store/stockAction";
import { useNavigate } from "react-router-dom";

const initialState = {
    stockName: "",
    price: 0,
};
const AddStock = () => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChange = ({ target: { name, value } }) => {
        const intValue = value === "" ? 0 : parseInt(value, 10);
        setFormData((prevState) => ({
            ...prevState,
            [name]: name === "price" ? intValue : value,
        }));
    };

    const handleAddStock = (e) => {
        e.preventDefault();

        console.log(formData);
        dispatch(addStock(formData)).then((res) => {
            if (res) {
                setFormData(initialState);
                navigate("/");
            }
        });
    };

    return (
        <div className="form-container">
            <h3>
                ADD <span>STOCKS</span>
            </h3>

            <form onSubmit={(e) => handleAddStock(e)}>
                <div className="input-container">
                    <label>Stock Name</label>
                    <input
                        type="text"
                        placeholder="Enter Stock Name"
                        className="form-input"
                        name="stockName"
                        value={formData.stockName}
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>
                <div className="input-container">
                    <label>Price</label>
                    <input
                        type="text"
                        placeholder="Enter Price"
                        className="form-input"
                        name="price"
                        value={formData.price}
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>

                <div className="button-container">
                    <button className="btn" type="submit">
                        Add Stock
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStock;
