import React, { Component } from 'react';
import '../Contact/Contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    };
    submit = e => {
        console.log("We are submitting now.");
        this.setState = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            subject: this.refs.subject.value,
            message: this.refs.message.value
        };
        console.log(this.state);
    }
    acceptName = e => {
        console.log(e.target.value)
        this.setState = {
            name: e.target.value
        }
        // console.log(this.state.name);
    }
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
                        <input placeholder='Name' ref='name' onChange={this.acceptName=this.acceptName.bind(this)}></input>
                        <h6>Email: </h6>
                        <input placeholder='Email' ref='email'></input>
                        <h6>Subject: </h6>
                        <input placeholder='Subject' ref='subject'></input>
                        <h6>Message: </h6>
                        <textarea placeholder='Message' ref='message'></textarea>
                    </div>
                    <div className='col-md-1'>
                        
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='contact-button' onClick={this.submit=this.submit.bind(this)}>
                            <h5>Submit</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
