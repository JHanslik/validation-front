import { Link } from "react-router-dom";
import Button from "./Button";

const UserCard = ({ user }) => {
    return (
        <div className="mx-2 rounded-lg shadow-xl shadow-black bg-slate-400 max-w-sm">
            <div className="h-80 overflow-hidden">
                <img
                    className="rounded-t-lg object-cover"
                    src={user.profile_picture}
                    alt={user.name}
                />
            </div>
            <div className="p-6 pt-0 flex flex-col items-center">
                <h5 className="text-gray-900 text-3xl font-medium mb-2">
                    {user.name}
                </h5>

                <Link to={`/${user.slug}`}>
                    <Button type="button" text="See user" />
                </Link>
            </div>
        </div>
    );
};

export default UserCard;
