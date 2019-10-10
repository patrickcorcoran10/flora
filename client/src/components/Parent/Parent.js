import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home.js';
import Story from '../../pages/Story/Story.js';
import Products from '../../pages/Products/Products.js';
import Contact from '../../pages/Contact/Contact.js';
import Footer from '../Footer/Footer.js';
import NavBar from '../NavBar/Navbar.js';

export default class Parent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
        return (
            <div className='container'>
                <Router>
                    <NavBar />
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/story' component={Story} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/contact' component={Contact} />
                    <Footer/>
                </Router>
            </div>
        )
    }
}
