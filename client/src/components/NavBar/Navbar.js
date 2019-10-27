import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Image from '../../assets/florapharmicallc.jpeg'

export default class Navbar extends Component {
    navHome = e => {
        
    }
    render() {
        return (
            <div className='container'>
            <br/>
                <div className='row'>
                    <div className='col-md-12'>
                        <Link to='/'>
                            <img src={Image} height="200" width="200" alt='navbar-pic'/>
                        </Link>
                        <h2>NATURAL SOLUTIONS FOR HOME & HEALTH CARE</h2>                        
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <Link to='/' id='nav-buttons-home' className='nav-link'>
                            <h4>Home</h4>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/story' id='nav-buttons-story' className='nav-link'>
                            <h4>Our Story</h4>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/products' id='nav-buttons-products' className='nav-link'>
                            <h4>Our Products</h4>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/contact' className='nav-link' id='nav-buttons-contact'>
                            <h4>Contact</h4>
                        </Link>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}
