import React, { useContext } from 'react';
import styled from 'styled-components';
import CardFront from '../assets/images/bg-card-front.png';
import CardBack from '../assets/images/bg-card-back.png';
import CardIcon from '../assets/images/card-logo.svg';
import BgCardMobile from '../assets/images/bg-main-mobile.png';
import BgCardDesktop from '../assets/images/bg-main-desktop.png';
import { MyContext } from '../Context';

const Container = styled.div`
    margin: auto;

    height: 220px;
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
    const { cardCvc, cardName, cardNumber, cardDateFirst, cardDateSecond } =
        useContext(MyContext);

    return (
        <Container className="w-full uppercase text-white border">
            <div className="m-auto max-w-[375px] border">
                <CardBackContainer className="z-10 h-[8rem] bg-contain bg-no-repeat relative top-[1.6rem] left-[3.3rem]">
                    <div className="relative top-[3.7rem] left-[11.5rem] font-[500]">
                        {cardCvc}
                    </div>
                </CardBackContainer>
                <CardFrontContainer className="text-sm z-50 h-[8rem] bg-contain bg-no-repeat relative bottom-[1.9rem] left-[0.7rem] grid grid-cols-1 grid-rows-3">
                    <img
                        className="w-11 relative top-5 left-6"
                        src={CardIcon}
                        alt=""
                    />
                    <div className="tracking-[.15em] relative top-6 left-5">{`${cardNumber.substring(
                        0,
                        4
                    )} ${cardNumber.substring(4, 8)} ${cardNumber.substring(
                        8,
                        12
                    )} ${cardNumber.substring(12, 16)}`}</div>
                    <div className="w-[20rem] flex justify-around items-center text-[0.6rem] relative right-[3rem]">
                        <div className="relative left-4">{cardName}</div>
                        <div className="relative right-2">
                            {cardDateFirst}/{cardDateSecond}
                        </div>
                    </div>
                </CardFrontContainer>
            </div>
        </Container>
    );
};

export default CardBG;
