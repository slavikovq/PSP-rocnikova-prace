import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Product from "../../components/Product/Product";
import AV from "../../components/Added Value/AV";
import Team from "../../components/Team/Team";
import Navbar from "../../components/Navbar/Navbar";


export default function Home() {
    return(
        <>
            <Hero/>
            <About/>
            <Product/>
            <AV />
        </>
    )    
}