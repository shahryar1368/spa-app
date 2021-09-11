import React, { Component } from 'react';

import Card from './Card';
import styles from "./Cards.module.css";

import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphonex} name="Iphone X" cost="500 $" />
                <Card image={iphone11} name="Iphone 11" cost="600 $" />
                <Card image={iphone12} name="Iphone 12" cost="800 $" />
                <Card image={s21} name="S21 Ultra" cost="790 $" />
            </div>
        );
    }
}

export default Cards;