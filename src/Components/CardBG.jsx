import React from 'react';
import styled from 'styled-components';
import CardFront from '../assets/images/bg-card-front.png';
import CardBack from '../assets/images/bg-card-back.png';
import CardIcon from '../assets/images/card-logo.svg';
import BgCardMobile from '../assets/images/bg-main-mobile.png';
import BgCardDesktop from '../assets/images/bg-main-desktop.png';

const Container = styled.div`
    margin: auto;
    width: 100vw;
    background-image: url(${BgCardMobile});
    background-repeat: no-repeat;
    background-size: cover;

    & {
        @media (min-width: 1440px) {
            background-image: url(${BgCardDesktop});
        }
    }
`;
const CardBackContainer = styled.div`
    background-image: url(${CardBack});
`;
const CardFrontContainer = styled.div`
    background-image: url(${CardFront});
`;

const CardBG = () => {
    return (
        <Container className="">
            <div className="m-auto max-w-[320px] border border-purple-600">
                <CardBackContainer className="h-32 bg-contain bg-no-repeat relative top-7 left-[4.5rem]">
                    lorem
                </CardBackContainer>
                <CardFrontContainer className="h-32 bg-contain bg-no-repeat">
                    <img className="w-11" src={CardIcon} alt="" />
                </CardFrontContainer>
            </div>
        </Container>
    );
};

export default CardBG;
