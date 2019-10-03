import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-5'>
                        <h5>Contact Us!</h5>
                        <p>6650 W. State St. #138</p>
                        <p>Wauwatosa, WI 53213</p>
                        <p>Phone: (414) 403-1854</p>
                        <p>Email: customerservice@florapharmica.com</p>
                    </div>
                    <div className='col-md-5'>
                        <h5>Send Us a Message</h5>
                        <h6>Name: </h6>
                        <input placeholder='Name'></input>
                        <h6>Email: </h6>
                        <input placeholder='Email'></input>
                        <h6>Subject: </h6>
                        <input placeholder='Subject'></input>
                        <h6>Message: </h6>
                        <input placeholder='Message' type='textarea'></input>

                    </div>
                    <div className='col-md-1'>
                        
                    </div>
                </div>
            </div>
        )
    }
}
