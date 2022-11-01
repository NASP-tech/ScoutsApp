import { Fragment } from "react";
import HeaderScouts from "./navbar/HeaderScouts";

const Layout = props => {
    return(
        <Fragment>
            <HeaderScouts/>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;