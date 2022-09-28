import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MyContext } from '../Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardForm = () => {
    let [stateName, setStateName] = useState(true);
    const [stateNumber, setStateNumber] = useState(true);
    const [stateDateFirst, setStateDateFirst] = useState(true);
    const [stateDateSecond, setStateDateSecond] = useState(true);
    const [stateCvc, setStateCvc] = useState();

    let {
        setCardCvc,
        setCardDateFirst,
        setCardDateSecond,
        setCardName,
        setCardNumber,
        cardName,
    } = useContext(MyContext);
    console.log(cardName.length);

    if (cardName.length === 28) {
        toast.warn('Seu nome ultrapssa o número de carcteres suportados!', {
            position: toast.POSITION.TOP_LEFT,
        });
    }
    console.log(stateName);

    console.log(stateNumber);
    const valida = () => {
        let name = document.querySelector('#inputname');
        if (name.checkValidity() === true) {
            setStateName(true);
        } else {
            setStateName(false);
        }

        let number = document.querySelector('#inputnumber');
        if (number.checkValidity() === true) {
            setStateNumber(true);
        } else {
            setStateNumber(false);
        }
        let firstDate = document.querySelector('#datefirst');
        console.log(`sou first date:${firstDate}`);
        if (firstDate.checkValidity() === true) {
            setStateDateFirst(true);
        } else {
            setStateDateFirst(false);
        }
        let secondDate = document.querySelector('#datesecond');
        console.log(`sou first date:${firstDate}`);
        if (secondDate.checkValidity() === true) {
            setStateDateSecond(true);
        } else {
            setStateDateSecond(false);
        }
        let cvc = document.querySelector('#cvc');
        console.log(`sou first date:${firstDate}`);
        if (cvc.checkValidity() === true) {
            setStateCvc(true);
        } else {
            setStateCvc(false);
        }
    };
    return (
        <div className="">
            <form className="flex flex-col mt-20 max-w-[320px] m-auto uppercase tracking-[0.07rem] text-[0.8rem]">
                <div className="flex flex-col">
                    <label
                        htmlFor="inputname"
                        className=" font-[600] text-[#2d1c47]"
                    >
                        cardholder name
                    </label>
                    <input
                        className={`${
                            stateName === false
                                ? 'focus:outline focus:outline-red-500'
                                : 'focus:outline focus:outline-[#5304ad]'
                        } h-10 p-2 text-[1rem]  border rounded-lg`}
                        id="inputname"
                        type="text"
                        required
                        placeholder="e.g. Jane Appleseed"
                        name="CardName"
                        onChange={(e) => setCardName(e.target.value)}
                    />
                    <div
                        className={`${
                            stateName === false
                                ? 'text-red-500 capitalize'
                                : 'invisible'
                        } `}
                    >
                        Can't be blank
                    </div>
                </div>
                <div></div>
                <div className="flex flex-col">
                    <label
                        htmlFor="inputnumber"
                        className=" font-[600] text-[#2d1c47] mt-2 "
                    >
                        card number
                    </label>
                    <input
                        className={`${
                            stateNumber === false
                                ? 'focus:outline focus:outline-red-500'
                                : 'focus:outline focus:outline-[#5304ad]'
                        } h-10 p-2 text-[1rem]  border rounded-lg`}
                        required
                        id="inputnumber"
                        type="text"
                        maxLength={16}
                        minLength={16}
                        pattern={'^[0-9]*$'}
                        placeholder="e.g. 1234 5678 9123 0000"
                        name="CardNumber"
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <div
                        className={`${
                            stateNumber === false
                                ? 'text-red-500 capitalize'
                                : 'invisible'
                        } `}
                    >
                        Wrong format, numbers only
                    </div>
                </div>
                <div className="flex items-center mt-2 ">
                    <div className="w-36">
                        <label
                            htmlFor="datefirst"
                            className=" font-[600] text-[#2d1c47]"
                        >
                            exp. date (MM/YY)
                        </label>
                        <div className="flex ">
                            <input
                                className={`${
                                    stateDateFirst === false
                                        ? 'focus:outline focus:outline-red-500'
                                        : 'focus:outline focus:outline-[#5304ad]'
                                } h-10 w-20 p-2 text-[1rem]  border mt-1 rounded-lg`}
                                type="text"
                                placeholder="MM"
                                id="datefirst"
                                onChange={(e) =>
                                    setCardDateFirst(e.target.value)
                                }
                                pattern={'^[0-9]*$'}
                                required
                                maxLength={2}
                            />
                            <input
                                className={`${
                                    stateDateSecond === false
                                        ? 'focus:outline focus:outline-red-500'
                                        : 'focus:outline focus:outline-[#5304ad]'
                                } h-10 w-20 p-2 text-[1rem]  border ml-2 mt-1 rounded-lg`}
                                type="text"
                                placeholder="YY"
                                id="datesecond"
                                onChange={(e) =>
                                    setCardDateSecond(e.target.value)
                                }
                                pattern={'^[0-9]*$'}
                                required
                                maxLength={2}
                            />
                        </div>
                        <div
                            className={`${
                                stateDateFirst === false ||
                                stateDateSecond === false
                                    ? 'text-red-500 capitalize'
                                    : 'invisible'
                            } `}
                        >
                            Can't be blank
                        </div>
                    </div>
                    <div className="flex flex-col ml-10">
                        <label
                            htmlFor="cvc"
                            className=" font-[600] text-[#2d1c47] ml-2"
                        >
                            cvc
                        </label>
                        <input
                            className={`${
                                stateDateSecond === false
                                    ? 'focus:outline focus:outline-red-500'
                                    : 'focus:outline focus:outline-[#5304ad]'
                            } h-10 w-20 p-2 text-[1rem]  border ml-2 mt-1 rounded-lg`}
                            type="text"
                            max={3}
                            maxLength={3}
                            id="cvc"
                            placeholder="e.g. 123"
                            pattern="[0-9]+$"
                            onChange={(e) => setCardCvc(e.target.value)}
                            required
                        />
                        <div
                            className={`${
                                stateCvc === false
                                    ? 'text-red-500 capitalize'
                                    : 'invisible'
                            } `}
                        >
                            Can't be blank
                        </div>
                    </div>
                </div>
                <button
                    onClick={valida}
                    className=" h-12 cursor-pointer mt-4 rounded-lg text-white text-[1rem] bg-[#21092f]"
                >
                    Confirm
                </button>
            </form>

            <ToastContainer autoClose={10000} />
        </div>
    );
};

export default CardForm;
