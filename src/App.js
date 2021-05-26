import React from 'react';
import About from './components/About';
import Footer from './components/Footer';

//My components
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';

function App() {
   return (
      <>
         <Header />
         {/* <HomeGuest /> */}
         <About />
         <Footer />
      </>
   );
}

export default App;
