import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const Layout = () => {
    const { state } = useNavigation();

    return (
        <>
            <Header />
            {state === "loading" ? "I am loading " : null}
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};
