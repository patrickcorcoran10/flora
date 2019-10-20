import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Image from '../../assets/florapharmicallc.jpeg'

export default class Navbar extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Link to='/'>
                            <img src={Image} height="100" width="100" alt='navbar-pic'/>
                        </Link>
                        <h4>NATURAL SOLUTIONS FOR HOME & HEALTH CARE</h4>                        
                    </div>
                </div>
                <div className='row' id='nav-buttons'>
                    <div className='col-md-3'>
                        <Link to='/' className='nav-link' id='button'>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/story' id='button' className='nav-link'>
                            <p>Our Story</p>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/products' id='button' className='nav-link'>
                            <p>Our Products</p>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/contact' className='nav-link' id='button'>
                            <p>Contact</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
