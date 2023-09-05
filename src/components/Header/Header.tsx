import { FC } from "react";
import { NavigationBar } from "./navigation-bar"
import style from "./style.module.scss";

const Header: FC = () => {

    return (
        <header className={style.headerContainer}>
            <NavigationBar />
        </header>
    );
};

export default Header;
