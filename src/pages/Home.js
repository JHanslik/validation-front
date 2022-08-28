import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Main from "../components/Main";
import UserCard from "../components/UserCard";
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const user = await fetch("http://localhost:5000/");
        const response = await user.json();
        console.log(response);

        setUsers(response);
    };
    return (
        <>
            <Main>
                <Grid>
                    {users.map((user) => {
                        return <UserCard key={user.name} user={user} />;
                    })}
                </Grid>
            </Main>
        </>
    );
};

export default Home;
