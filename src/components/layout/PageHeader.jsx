import Button from "../Buttons/Button";
import { Link, useLocation } from "react-router-dom";
const PageHeader = () => {
    const { pathname } = useLocation();
    return (
        <header>
            <Link to={"/"}>
                <div className="header-image">
                    <img src="/comp-img.jpeg" alt="company image here" />
                </div>
            </Link>

            {pathname.includes("addstock") ? <Button title={"View Stocks"} /> : <Button title={"Add New Stock"} />}
        </header>
    );
};

export default PageHeader;
