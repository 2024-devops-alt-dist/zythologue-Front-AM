import {Link} from "react-router";

    const Button = ({ text, to }) => {
        return (
        <Link
            to={to}
            className="bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#c88e1b] hover:border-[#c88e1b] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500 active:bg-[#c88e1b] active:border-[#c88e1b]"
        >
            {text}
        </Link>
        );
    };
    
    export default Button;