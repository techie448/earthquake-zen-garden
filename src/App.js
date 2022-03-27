import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./app.scss";
import {DetailLoader, HeaderLoader, HomeLoader, ProfileLoader} from "./_loaders/loaders";

function App(props) {
    return (
        <>
            <Router>
                <div className={'primary'}>
                    <HeaderLoader/>
                    <Routes>
                        <Route path='/details' element={<DetailLoader/>}/>
                        <Route path='/profile' element={<ProfileLoader/>}/>
                        <Route path='/' element={<HomeLoader/>}/>
                    </Routes>
                </div>
            </Router>
        </>

    );
}

export default App;