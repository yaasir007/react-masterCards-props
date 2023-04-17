import React from "react";
import Card from './Card'
import './css/cards.scss';

const Cards = () => {
  return(
    <div className="cards-wrapper">
      <Card number="Bruce Wayne" name="9759 2484 5269 6576" />
      <Card number="Yaasir Cheekoory" name="9759 4732 5269 2332" />
      <Card number="Jurgen Klopp" name="1223 2343 1324 1221" />
      <Card number="Luis Diaz" name="3523 2353 2353 3255" />
      <Card number="Jude Bellingham" name="3253 3244 4243 2344" />
    </div>
  )
}

export default Cards
