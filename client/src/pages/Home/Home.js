import React, { Component } from 'react';
import './Home.css';
import Image1 from '../../assets/home1.jpeg';
import Image2 from '../../assets/home2.jpeg';
import Image3 from '../../assets/home3.jpeg';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
  const items = [
    {
      src: Image1,
      altText: '',
      caption: ''
    },
    {
      src: Image2,
      altText: '',
      caption: ''
    },
    {
      src: Image3,
      altText: '',
      caption: ''
    }
  ];
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
        return (
            <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
        });
        return (
            <div className='container'>
              <div className='row'>
                <div className='col-md-1'></div>
                  <div className='col-md-10'>
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                    <br/>
                    <h5 id='text'>WELCOME TO FLORA PHARMICA®!</h5>
                    <br/>
                    <p id='text'><strong>Lavender nites®</strong> is a unique product created to enhance relaxation and rest for patients in hospitals and clinics. Relaxation is achieved by gently applying <strong>Lavender nites®</strong> scented cream to the chest, back, neck, hands or feet by a caregiver. The senses are soothed through the power of touch, the scent and relaxing effect of lavender and the sight of the compassionate caregiver. The lavender cream can be self-applied and is appropriate for use by anyone who enjoys the scent of lavender and its relaxing effect. Apply before bedtime or anytime a restful and calm state is desired.</p>
                    <br/>
                    <div className='contact-button'>
                      <p>Contact Us</p>
                    </div>
                    {/* <button>Contact Us</button> */}
                  </div>
                <div className='col-md-1'></div>
              </div>
            </div>
        )
    }
}
