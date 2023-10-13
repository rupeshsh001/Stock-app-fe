import { useEffect, useState } from "react";

const useDebounceValue = (value, delay = 500) => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, value]);

    return searchValue;
};

export default useDebounceValue;
