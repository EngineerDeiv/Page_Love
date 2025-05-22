import { BrowserRouter, Routes, Route } from "react-router-dom";

import CenterHome from "../View/Pages/CenterHome";
const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' index element={<CenterHome/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;