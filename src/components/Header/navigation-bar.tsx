import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChangeLanguageBtn } from "./change-language-btn";
import homeIcon from "../../images/homepage-icon.svg";
import style from "./style.module.scss";

export const NavigationBar: FC = () => {
    const { t } = useTranslation();

    return (
        <nav className={style.navigationBar}>
            <NavLink to="/" className={style.homeNavBtn}>
                <img src={homeIcon} className={style.homePageIcon} alt="Home Page" />
            </NavLink>
            <section className={style.navLinksContainer}>
                <NavLink to="/about-me" className={style.headerLink}>
                    {t("main.header.aboutMe")}
                </NavLink>
                <NavLink to="/servicies" className={style.headerLink}>
                    {t("main.header.servicies")}
                </NavLink>
                <NavLink to="/home-care" className={style.headerLink}>
                    {t("main.header.homeCare")}
                </NavLink>
                <NavLink to="/contact-me" className={style.headerLink}>
                    {t("main.header.contactMe")}
                </NavLink>
            </section>
            <ChangeLanguageBtn />
        </nav>
    );
};

