import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import User from "./pages/User";

function App(props) {
    return (
        <BrowserRouter>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:slug" element={<User />} />
                    <Route path="/new-user" element={<NewUser />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
