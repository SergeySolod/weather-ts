import React from 'react';
import Home from './pages/home'
import Weather from './pages/weather'
import Navbar from "./components/navbar/navbar";
import {Route, Switch} from 'react-router-dom'

const App: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/weather' exact render={() => <Weather/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;