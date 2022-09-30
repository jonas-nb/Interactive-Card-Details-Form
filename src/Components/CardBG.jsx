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
        @media (min-width: 1280px) {
            margin: 0;
            background-image: url(${BgCardDesktop});
            height: 100vh;
            width: 30vw;
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
        <Container className="w-full h-10 xl:h-full uppercase text-white xl:flex">
            <div className="m-auto max-w-[375px] xl:max-w-none border-t border-transparent xl:w-full xl:h-full xl:flex xl:flex-col-reverse xl:items-center xl:justify-center">
                <CardBackContainer className="xl:ml-[25rem] xl:mt-5 xl:mb-[3rem] xl:drop-shadow-md z-10 h-[9rem] xl:h-[13rem] xl:w-full bg-contain xl:bg-contain bg-no-repeat m-auto xl:m-0 ml-[6rem]  mt-5  border border-transparent">
                    <div className="tracking-[.15em] text-[0.7rem] xl:text-[1rem] font-[400]  h-5 xl:h-10 w-6 xl:w-10  xl:mt-[5.2rem] ml-[12.5rem] xl:ml-[18.8rem] mt-[3.8rem] flex items-center justify-center">
                        {cardCvc}
                    </div>
                </CardBackContainer>
                <CardFrontContainer className="xl:ml-[16rem] border-t xl:drop-shadow-md border-transparent text-sm z-50 xl:h-[13rem] xl:w-full h-[9rem]  bg-contain bg-no-repeat ml-4  relative bottom-[4rem] xl:static">
                    <div className="mt-5 ml-5">
                        <img
                            className="h-[1.97rem] xl:h-[3rem] "
                            src={CardIcon}
                            alt=""
                        />
                    </div>

                    <div className="h-8 tracking-[.15em] text-[1rem] xl:text-[1.2rem] w-[16.3rem] xl:m-auto xl:w-[18rem] mt-5 xl:mt-10 xl:ml-11 flex justify-center xl:items-center">{`${cardNumber.substring(
                        0,
                        4
                    )} ${cardNumber.substring(4, 8)} ${cardNumber.substring(
                        8,
                        12
                    )} ${cardNumber.substring(12, 16)}`}</div>
                    <div className="w-[18.1rem] xl:w-full flex justify-between items-center text-[0.6rem] xl:text-[0.rem] tracking-[0.06rem] mt-1 xl:mt-5">
                        <div className="ml-8 xl:ml-10">{cardName}</div>
                        <div className="mr-16 xl:mr-24">
                            {cardDateFirst}/{cardDateSecond}
                        </div>
                    </div>
                </CardFrontContainer>
            </div>
        </Container>
    );
};

export default CardBG;
