import React from "react";
import { Route } from "react-router";

import Header from "./components/header/header";
import AboutUs from "./views/About/About";
import GenericSearch from "./views/generic-search/generic-search";

const routes = (
        <Route path="/" component={Header}>
            <Route path="about" component={AboutUs} />
            <Route path="generic-search" component={GenericSearch} />
        </Route>
);

export default routes;