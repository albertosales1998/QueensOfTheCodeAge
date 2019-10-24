import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function AboutPage(props){

    return(
        <div>
            <Hero title = {props.title}/>

            <Content>
                Hello, my name is Alberto Sales. I am currently a full-time student attending Florida International University pursuing two Bachelor degrees of science in Comprehensive Mathematics and Computer Science.
                <p></p>
                <p> My vision is to dip my feet in the tech industry and take what I have learned to start my own company. One which will effectively combine machine learning and virtual reality to create worlds we never thought possible. </p>
                <p></p>
                <p> I also thoroughly enjoy my downtime! When I am not working, I play the guitar, bass, or drums. Also love to participate in mixed martial arts such as boxing, Brazilian Jiu-Jitsu, wrestling, and I love video games!</p>

            </Content>
        </div>
    );
}

export default AboutPage;