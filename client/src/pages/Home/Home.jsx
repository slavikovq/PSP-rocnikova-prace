import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Product from "../../components/Product/Product";
import AV from "../../components/Added Value/AV";
import Features from "../../components/Features/Features";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";


export default function Home() {
    return(
        <>
            <Hero/>
            <About/>
            <Product/>
            <AV />
            <Features />
            <Team/>
            <Footer/>
        </>
    )    
}