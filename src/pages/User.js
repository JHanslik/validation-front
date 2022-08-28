import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/Main";

import Spinner from "../components/Spinner";

const User = () => {
    const params = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const userRequest = await fetch(`http://localhost:5000/${params.slug}`);
        const userResponse = await userRequest.json();

        setUser(userResponse);
    };

    if (!user) {
        return (
            <>
                <h2>User</h2>
                <Spinner />
            </>
        );
    }
    return (
        <Main>
            <div className="flex flex-col justify-center items-center text-center m-auto">
                <section className="px-2">
                    <img
                        src={user.profile_picture}
                        alt={user.name}
                        className="rounded-3xl max-h-[480px] shadow-xl shadow-black mb-4"
                    />
                </section>
                <section className="py-6">
                    <h1 className="text-center text-3xl mb-5 font-bold tracking-wider">
                        {user.name}
                    </h1>
                    <p className="text-lg md:text-xl">
                        Password :{" "}
                        <span className="font-bold text-xl md:text-2xl tracking-wider">
                            {user.password}
                        </span>
                    </p>
                    <p className="text-lg md:text-xl">
                        E-mail :{" "}
                        <span className="font-bold text-xl md:text-2xl tracking-wider">
                            {user.email}
                        </span>
                    </p>
                    <p className="text-lg md:text-xl">
                        From :{" "}
                        <span className="font-bold text-xl md:text-2xl tracking-wider">
                            {user.city}
                        </span>
                    </p>
                </section>
            </div>
        </Main>
    );
};

export default User;
