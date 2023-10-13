import axios from "../helper/axiosInstance";
import { stockActions } from "./stockSlice";

export const addStock = (stockInfo) => {
    return async () => {
        const saveStock = async () => {
            const response = await axios.post(`/add`, stockInfo);
            if (response.data.code !== 201) {
                throw new Error(response.data.message);
            }
            return response.data;
        };
        try {
            await saveStock();
            return true;
        } catch (error) {
            console.log(error);
        }
    };
};

export const getAllStock = () => {
    return async (dispatch) => {
        const fetchStocks = async () => {
            const response = await axios.get(`/`);
            if (response.data.code !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        };
        try {
            const data = await fetchStocks();
            dispatch(stockActions.setAllStocks(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateLiked = (id, likedInfo) => {
    return async () => {
        const likeStock = async () => {
            const response = await axios.patch(`/${id}`, likedInfo);
            if (response.data.code !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        };
        try {
            await likeStock();
            return true;
        } catch (error) {
            console.log(error);
        }
    };
};

export const getStockByName = (name) => {
    return async (dispatch) => {
        const fetchStocks = async () => {
            const response = await axios.get(`/search?stockName=${name}`);
            if (response.data.code !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        };
        try {
            const data = await fetchStocks();
            dispatch(stockActions.setAllStocks(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const getStockByLiked = (liked) => {
    return async (dispatch) => {
        const fetchStocks = async () => {
            const response = await axios.get(`/liked?fav=${liked}`);
            if (response.data.code !== 200) {
                throw new Error(response.data.message);
            }
            return response.data;
        };
        try {
            const data = await fetchStocks();
            dispatch(stockActions.setAllStocks(data));
        } catch (error) {
            console.log(error);
        }
    };
};
