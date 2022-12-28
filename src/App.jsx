import React from "react";

import Navbar from "./Navbar";
import Events from './pages/Events'
import Team from './pages/Team'
import Home from "./pages/Home";
import Partner from "./pages/Partner";

import { Route, Routes } from 'react-router-dom'

const App = () => {

    return (
        <>
        <Navbar />
        <div className="wrapper">
            <Routes>
                <Route path="/waterworld-team" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/events" element={<Events />} />
                <Route path="/partner" element={<Partner />} />
            </Routes>
        </div>
        </>
    );
}

export default App;