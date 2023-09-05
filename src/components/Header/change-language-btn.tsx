import { FC } from "react";
import estFlag from "../../images/estonia-flag.jpg";
import rusFlag from "../../images/russian-flag.jpg";
import { Option } from "../../utils/types"
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";

const options: Option[] = [
    { label: "est", value: estFlag },
    { label: "rus", value: rusFlag },
];

export const ChangeLanguageBtn: FC = () => {
    const { i18n } = useTranslation();
    return (
        <section className={style.languageBtnContainer}>
            <button
                type="submit"
                value={options[0].label}
                onClick={() => i18n.changeLanguage(options[0].label)}
                className={style.changeLanguageBtn}
            >
                <img
                    src={options[0].value}
                    alt={options[0].label}
                    className={style.flag}
                />
            </button>

            <button
                type="submit"
                value={options[1].label}
                onClick={() => i18n.changeLanguage(options[1].label)}
                className={style.changeLanguageBtn}
            >
                <img
                    src={options[1].value}
                    alt={options[1].label}
                    className={style.flag}
                />
            </button>
        </section>
    );
};
