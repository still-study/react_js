
import './App.css';

import { MainLayout } from "./layouts/MainLayout";
import {Home, Profile, Chats} from './views';
import {Route, Switch} from 'react-router-dom';

export function App() {


  return(  
    <MainLayout>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/profile'} component={Profile} />
        <Route path={'/chats'} component={Chats} />
        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>  
    </MainLayout>
  )

  
}