import {Link} from "react-router";

    const Button = ({ text, to }) => {
        return (
        <Link
            to={to}
            className="bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500 active:bg-[#1B44C8] active:border-[#1B44C8]"
        >
            {text}
        </Link>
        );
    };
    
    export default Button;