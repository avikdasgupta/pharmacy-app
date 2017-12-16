import React from "react";
import { Route } from "react-router";

import Header from "./components/header/header";
import AboutUs from "./views/About/About";

const routes = (
        <Route path="/" component={Header}>
            <Route path="about" component={AboutUs} />
        </Route>
);

export default routes;