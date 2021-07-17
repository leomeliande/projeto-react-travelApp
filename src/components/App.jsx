//import logo from '../img/logo.svg';
import '../styles/App.scss'
import Navbar from './Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Services from './pages/Services'
import Products from './pages/Products'
import Login from './pages/Login'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/services" exact component={Services} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App
