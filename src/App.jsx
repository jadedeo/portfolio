import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import ForFun from "./pages/ForFun.jsx";
import Splash from "./pages/Splash.jsx";
import DivisionPlatform from "./pages/DivisionPlatform.jsx";
import GiantEagle from "../src/pages/GiantEagle.jsx";
import EmailHelper from "../src/pages/EmailHelper.jsx";

import routes from "../src/resources/routes.json";

// console.log(routes);

const componentMap = {
    Home,
    Work,
    ForFun,
    Resume,
    About,
    Splash,
    DivisionPlatform,
    GiantEagle,
    EmailHelper,
};

function App() {
    return (
        <div className="App bg-white h-100dvh scroll-smooth">
            <Routes>
                {routes.map((route, index) => {
                    const Component = componentMap[route.component];
                    if (!Component) {
                        console.warn(
                            `Component "${route.component}" not found.`
                        );
                        return null;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Component />}
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
