import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Shop from './pages/store/Shop';
import Contact from './pages/contact/Contact';
import Community from './pages/community/Community';
import Overview from './pages/overview/Overview';
import AboutUs from './pages/aboutpage/aboutuspage/AboutUs';
import GameSingle from './pages/aboutpage/singlegame/GameSingle';
import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';
import HomeFour from './pages/homes/HomeFour';






function App() {
  return (
    
    <div className="App">
      
     <Router>
       
        <Switch>
        <ScrollToTopRoute exact={true} path='/'>
          <HomeFour/>
        </ScrollToTopRoute>
      
        <ScrollToTopRoute exact={true} path='/shop'>
         <Shop/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/contact'>
        <Contact/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/community'>
        <Community/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/overview'>
        <Overview/>
        </ScrollToTopRoute>
        
        <ScrollToTopRoute exact={true} path='/about-us'>
        <AboutUs/>
        </ScrollToTopRoute>

        <ScrollToTopRoute exact={true} path='/game-single'>
        <GameSingle/>
        </ScrollToTopRoute>
     </Switch>
     </Router>
     
    </div>
  );
}

export default App;
