import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import AdminHome from "../components/AdminHome/AdminHome"


export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/admin" element={<AdminHome/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}