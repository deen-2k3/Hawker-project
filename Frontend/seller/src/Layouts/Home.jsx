import React from 'react'
import Homenavbar from "../components/Homenavbar";
import CustomerHome from "../components/CustomerHome";
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <Homenavbar/>
      <CustomerHome/>
      <Footer/>
    </div>
  )
}
