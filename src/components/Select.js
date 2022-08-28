import React from "react";

function Select({ handleChange, cities, error }) {
    return (
        <>
            <select
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={handleChange}
            >
                <option value="">Choose a city</option>
                {cities.map((city) => {
                    return (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    );
                })}
            </select>
            {error && <p className="text-red-600">{error.msg}</p>}
        </>
    );
}

export default Select;
