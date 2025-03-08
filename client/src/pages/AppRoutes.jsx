import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import Admin from "./Admin/Admin"
import News from "./News/News"

export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}