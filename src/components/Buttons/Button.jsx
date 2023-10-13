import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Button = ({ title }) => {
    const navigate = useNavigate();
    const handleRouting = (title) => {
        if (title === "View Stocks") {
            navigate("/");
        } else {
            navigate("/addstocks");
        }
    };
    return (
        <button className="btn" onClick={() => handleRouting(title)}>
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;
