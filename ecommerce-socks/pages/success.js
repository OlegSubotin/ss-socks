import React, { useEffect } from 'react';
import Link from "next/link";
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContext } from "../context/StateContext";
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'><BsBagCheckFill /></p>
        <h2>Дякую за твоє замовлення!</h2>
        <p className='email-msg'>Перевірь свій імейл. Відправив тобі чек про сплату.</p>
        <p className='description'>
          Якщо в тебе є запитання
          <a className='email' href="mailto:subotinoleg0@gmail.com">
            babushkavyazhe@mail.com
          </a>
        </p>
        <Link href="/">
          <button className='btn' type="button" width="300px">
            Продовжити закупівлю
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success