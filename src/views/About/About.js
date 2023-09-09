import React from 'react';
import './About.css';
import Navbar from '../../componants/Navbar/Navbar';
import Button from '../../componants/Button/Button';

export default function About(){
    return(
        <>
        <Navbar/>
        <Button/>

        <div className='about'>This is about page:-<br/>
        React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.

        </div></>
        
    )
}