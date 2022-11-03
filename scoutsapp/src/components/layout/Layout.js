import { Fragment } from "react";
import HeaderScouts from "./navbar/HeaderScouts";
import Footer from "../Footer/Footer"; 

const Layout = props => {
    return(
        <Fragment>
            <HeaderScouts/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </Fragment>
    );
};

export default Layout;