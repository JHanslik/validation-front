import React from "react";

function Select({ handleChange, cities, error }) {
    return (
        <>
            <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[340px]"
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
