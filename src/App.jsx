import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Lesson1part2 from './pages/lesson1part2';
import Lesson1part3 from './pages/lesson1part3';
import Lesson1Part4 from './pages/lesson1part4';


import Lesson2Part1 from './pages/lesson2part1';
import Lesson2Part2 from './pages/lesson2part2';
import Lesson2Part3 from './pages/lesson2part3';
import Lesson2Part4 from './pages/lesson2part4';
import Lesson2Part5 from './pages/lesson2part5';
import Lesson2Part6 from './pages/lesson2part6';
import Lesson3 from './pages/lesson3';

import Lesson4Part1 from './pages/lesson4part1';
import Lesson4Part2 from './pages/lesson4part2';
import Lesson4Part3 from './pages/lesson4part3';
import Lesson4Part4 from './pages/lesson4part4';
import Lesson4Part5 from './pages/lesson4part5';
import Lesson4Part6 from './pages/lesson4part6';
import Lesson4Part7 from './pages/lesson4part7';

import Lesson5Part1 from './pages/lesson5part1';
import Lesson5Part2 from './pages/lesson5part2';
import Lesson5Part3 from './pages/lesson5part3';
import Lesson5Part4 from './pages/lesson5part4';
import Lesson5Part5 from './pages/lesson5part5';
import Lesson5Part6 from './pages/lesson5part6';
import Home from './pages/Home';
setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route> */}
            <Route path="/lesson1/part1" exact={true}>
              <Page />
            </Route>

            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/lesson1/part2" exact={true}>
              <Lesson1part2 />
            </Route>

            <Route path="/lesson1/part3" exact={true}>
              <Lesson1part3 />
            </Route>

            <Route path="/lesson1/part4" exact={true}>
              <Lesson1Part4 />
            </Route>

            <Route path="/lesson2/part1" exact={true}>
              <Lesson2Part1 />
            </Route>

            <Route path="/lesson2/part2" exact={true}>
              <Lesson2Part2 />
            </Route>

            <Route path="/lesson2/part3" exact={true}>
              <Lesson2Part3 />
            </Route>

            <Route path="/lesson2/part4" exact={true}>
              <Lesson2Part4 />
            </Route>

            <Route path="/lesson2/part5" exact={true}>
              <Lesson2Part5 />
            </Route>

            <Route path="/lesson2/part6" exact={true}>
              <Lesson2Part6 />
            </Route>

            <Route path="/lesson3" exact={true}>
              <Lesson3 />
            </Route>

             <Route path="/lesson4/part1" exact={true}>
              <Lesson4Part1 />   
            </Route>

            <Route path="/lesson4/part2" exact={true}>
              <Lesson4Part2 />
            </Route>

            <Route path="/lesson4/part3" exact={true}>
              <Lesson4Part3 />
            </Route>

            <Route path="/lesson4/part4" exact={true}>
              <Lesson4Part4 />
            </Route>

            <Route path="/lesson4/part5" exact={true}>
              <Lesson4Part5 />
            </Route>

            <Route path="/lesson4/part6" exact={true}>
              <Lesson4Part6 />
            </Route>
          
            <Route path="/lesson4/part7" exact={true}>
              <Lesson4Part7 />
            </Route>
 
            <Route path="/lesson5/part1" exact={true}>
              <Lesson5Part1 />
            </Route>
 
            <Route path="/lesson5/part2" exact={true}>
              <Lesson5Part2 />
            </Route>

            <Route path="/lesson5/part3" exact={true}>
              <Lesson5Part3 />
            </Route>

            <Route path="/lesson5/part4" exact={true}>
              <Lesson5Part4 />
            </Route>

            <Route path="/lesson5/part5" exact={true}>
              <Lesson5Part5 />
            </Route>

            <Route path="/lesson5/part6" exact={true}>
              <Lesson5Part6 />
            </Route>


          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
