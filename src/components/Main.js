import React from "react";

const Main = ({ children }) => {
    return (
        <main className="py-5 text-slate-200 flex justify-center">
            {children}
        </main>
    );
};

export default Main;
