import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./components/layout/PageHeader";
import DashBoard from "./components/pages/DashBoard";
import AddStock from "./components/pages/AddStock";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<DashBoard />}></Route>
                    <Route path="/addstocks" element={<AddStock />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
