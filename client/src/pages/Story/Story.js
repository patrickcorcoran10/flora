import React, { Component } from 'react'
import './Story.css';

export default class Story extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'>
                    </div>
                    <div className='col-md-10' id='story'>
                        <h5>Our Story</h5>
                        <br/>
                        <p>We are three caring health care professionals who combined our clinical and administrative backgrounds from the fields of Integrative Medicine, Nursing and Pharmacy. Together we launched Flora Pharmica LLC and created the formula for Lavender nites® a natural, chemical free, relaxing cream for patient comfort.</p>
                        <p>Our experience came from working for a large Midwestern health care system as a Nurse Practitioner (DNP, FNP-BC, Certified Clinical Aromatherapy Practitioner /Instructor), a Pharmacist (BS) specializing in compounding natural products and a Director of Integrative Medicine (MS, CCAP).</p>
                        <p>The development of Lavender nites® could not have been completed without the support of the many nurses we work with who are trained as CCAP’s. They provided valuable feedback regarding scent, texture and the feel of the cream as it was applied to the body. We revised and tested several formulas and the finished product was compounded and distributed by the pharmacy department. Our original lavender cream was produced in bulk and distributed in 50gm containers to nursing units. Over the course of several years we found there was a need for a more convenient method of delivery and began to focus on making a single dose application.</p>
                        <p>We found a manufacturer that was focused on quality and had high standards. Here we are today. Lavender nites® has been 3rd party tested and is delivered in a single 4gm dose package, easy for caregivers, great for patients. </p>
                        <br/>
                        <button>Contact Us</button>
                    </div>
                    <div className='col-md-1'>
                    </div>
                </div>
            </div>
        )
    }
}
