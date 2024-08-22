// src/App.js
import React from 'react'
import Navebar from './components/Navbar';
import Banner from './components/Banner';
import CollegeReviews from './components/CollegeReviews';
import Department from './components/Department';
import Testimonials from './components/Testimonials';
import DreamJobs from './components/DreamJobs';
 import SelectedStudents from './components/SelectedStudents';
import Footer from './components/Footer';



function App() {
  return (
    <div className='App'>
      <Navebar/> 
      <Banner/>
      <CollegeReviews/>
      <Department/>
      <Testimonials/>
      <DreamJobs />
      <SelectedStudents/> 
      <Footer/>

   
   
s
    
    </div>     
  );
}

export default App;  // This line ensures that App is the default export
