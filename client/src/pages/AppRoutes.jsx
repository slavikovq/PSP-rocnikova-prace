import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"


export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/" element={<Home/>}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}