import React, {useState} from 'react';
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Hero from "../components/herosection"
import InfoSection from '../components/infosection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infosection/Data';
import Services from '../components/sercvices';
import Footer from '../components/footer';

const Home = () => {

const [isOpen, setIsOpen] = useState(false);
const toggle = () =>{
    setIsOpen(!isOpen);
}

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </div>
    )
}

export default Home;
