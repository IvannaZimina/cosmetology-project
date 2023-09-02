import { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/servicies">Services</NavLink>
            <NavLink to="/home-care">Home Care</NavLink>
            <NavLink to="/contact-me">Contact Me</NavLink>
        </>
    );
};

export default Header;
