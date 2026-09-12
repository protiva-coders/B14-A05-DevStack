
import { Suspense } from 'react';
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Technology from './components/technologies/technology';
import type { Itechnology } from './types/TechnologyType';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const technologyFetch = async ():Promise<Itechnology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};




function App() {
  const technologiesPromise = technologyFetch();
  return (
    <>
        
        <Nav/>
        <Hero/>
        <Suspense fallback={<h2>Loading.....</h2>}>
        <Technology technologiesPromise={technologiesPromise}/>
          
        </Suspense>
        <Footer/>
        <ToastContainer />
      
    </>
  )
}

export default App
