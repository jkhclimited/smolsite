import './FrontPage.css';
import React, { FC } from "react";
import Carousel from '../../components/Carousel/Carousel';

const FrontPage: FC = () => {

    return <>
        <div className='homepage-main-div'>
            <p className='homepage-header'>Welcome to Rafu's Atelier</p>
            <div className='center-div'>
                <Carousel />
            </div>
        </div>
    </>
}

export default FrontPage;