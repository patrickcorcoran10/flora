import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12' id='footer'>
                        <p>Copyright © 2015 Lavender nites®. All rights reserved.</p>
                        <p>Lavender nites® is a brand of Flora Pharmica LLC</p>
                    </div>
                </div>
            </div>
        )
    }
}
