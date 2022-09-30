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
    height: 210px;
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
        <Container className="w-full h-10 uppercase text-white">
            <div className="m-auto max-w-[375px] border-t border-transparent">
                <CardBackContainer className="z-10 h-[9rem] bg-contain bg-no-repeat m-auto ml-[6rem] mt-5 border border-transparent">
                    <div className="tracking-[.15em] text-[0.7rem] font-[400]  h-5 w-6 ml-[12.5rem] mt-[3.8rem] flex items-center justify-center">
                        {cardCvc}
                    </div>
                </CardBackContainer>
                <CardFrontContainer className="border-t border-transparent text-sm z-50 h-[9rem] bg-contain bg-no-repeat ml-4 relative bottom-[4rem]">
                    <div className="mt-5 ml-5">
                        <img className="h-[1.97rem] " src={CardIcon} alt="" />
                    </div>

                    <div className="h-8 tracking-[.15em] text-[1rem] w-[16.3rem] mt-5 flex justify-center">{`${cardNumber.substring(
                        0,
                        4
                    )} ${cardNumber.substring(4, 8)} ${cardNumber.substring(
                        8,
                        12
                    )} ${cardNumber.substring(12, 16)}`}</div>
                    <div className="w-[18.1rem] flex justify-between items-center text-[0.6rem] tracking-[0.06rem] mt-3">
                        <div className="ml-6">{cardName}</div>
                        <div className="mr-14">
                            {cardDateFirst}/{cardDateSecond}
                        </div>
                    </div>
                </CardFrontContainer>
            </div>
        </Container>
    );
};

export default CardBG;
