import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//My components
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import About from './components/About';
import Terms from './components/Terms';
import Footer from './components/Footer';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route path='/' exact>
               <HomeGuest />
            </Route>
            <Route path='/about-us'>
               <About />
            </Route>
            <Route path='/terms'>
               <Terms />
            </Route>
         </Switch>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
