import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import PostEdit from "./components/PostEdit";
import Home from "./Home";
import Second from "./Second";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/edit/:id" element={<PostEdit />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
