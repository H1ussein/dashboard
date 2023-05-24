import './Cards.css';
import data from '../../Data/data.json';
import Card from '../Card/Card';
import { useState } from 'react';
const Cards = (props) => {
    const details = props.details;
    const [data_content] = useState(data);
    let cards = '';
    switch (details) {
        case 'Daily':
            cards = data_content.map((card) => {
                return <Card key={Math.random()} current={card.timeframes.daily.current} prev={card.timeframes.daily.previous} title={card.title} color={card.color} img={card.img}/>
            })
            break;
        case 'Weekly':
            cards = data_content.map((card) => {
                return <Card key={Math.random()} current={card.timeframes.weekly.current} prev={card.timeframes.weekly.previous} title={card.title} color={card.color}  img={card.img}/>
            })
            break;
        case 'Monthly':
            cards = data_content.map((card) => {
                return <Card key={Math.random()} current={card.timeframes.monthly.current} prev={card.timeframes.monthly.previous} title={card.title} color={card.color}  img={card.img}/>
            })
            break;
        default:
            console.log("error");
    }
    return (
        <>
            <div className='cards'>
                <div className='row'>
                    {cards}
                </div>
            </div>
        </>
    )
}
export default Cards;