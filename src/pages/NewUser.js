import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Main from "../components/Main";
import Select from "../components/Select";

const NewUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [picture, setPicture] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [errors, setErrors] = useState([]);

    const cities = ["Paris", "Tokyo", "Los Angeles"];

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePictureChange = (e) => {
        setPicture(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSelectChange = (e) => {
        setCity(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name: name,
            password: password,
            email: email,
            city: city,
            profile_picture: picture,
        };

        const request = await fetch("http://localhost:5000/new-user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const response = await request.json();

        if (request.status === 201) {
            navigate("../");
        } else {
            console.log(response);
            setErrors(response);
        }
    };

    return (
        <Main>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center rounded-lg shadow-xl shadow-black bg-slate-400 max-w-sm min-w-[360px]"
            >
                <Input
                    name="Name"
                    placeholder="Type your name"
                    type="text"
                    handleChange={handleNameChange}
                    error={errors.find((error) => {
                        return error.param === "name";
                    })}
                />
                <Input
                    name="Password"
                    placeholder="Type your password"
                    type="password"
                    handleChange={handlePasswordChange}
                    error={errors.find((error) => {
                        return error.param === "password";
                    })}
                />
                <Input
                    name="Email"
                    placeholder="Type your email"
                    type="email"
                    handleChange={handleEmailChange}
                    error={errors.find((error) => {
                        return error.param === "email";
                    })}
                />
                <Input
                    name="Picture"
                    placeholder="Type link to your picture"
                    type="text"
                    handleChange={handlePictureChange}
                />
                <Select
                    handleChange={handleSelectChange}
                    cities={cities}
                    error={errors.find((error) => {
                        return error.param === "city";
                    })}
                ></Select>

                <button
                    type="submit"
                    className="py-2.5 px-5 mr-2 my-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Submit
                </button>
            </form>
        </Main>
    );
};

export default NewUser;
