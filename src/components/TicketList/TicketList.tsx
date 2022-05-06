import React, { FC } from 'react';

import { Ticket } from '../Ticket';

import classes from './TicketList.module.scss';
import burger from './burger.svg';

const TicketList: FC = () => {
  const arr = [
    {
      // Цена в рублях
      price: 13400,
      // Код авиакомпании (iata)
      carrier: 'string',
      // Массив перелётов.
      // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      segments: [
        {
          // Код города (iata)
          origin: 'Minsk',
          // Код города (iata)
          destination: 'Moscow',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 1275,
        },
        {
          // Код города (iata)
          origin: 'Minsk',
          // Код города (iata)
          destination: 'Moscow',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 1275,
        },
      ],
    },
    {
      // Цена в рублях
      price: 13400,
      // Код авиакомпании (iata)
      carrier: 'string',
      // Массив перелётов.
      // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      segments: [
        {
          // Код города (iata)
          origin: 'Minsk',
          // Код города (iata)
          destination: 'Moscow',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 1275,
        },
        {
          // Код города (iata)
          origin: 'Minsk',
          // Код города (iata)
          destination: 'Moscow',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 1275,
        },
      ],
    },
    {
      // Цена в рублях
      price: 13400,
      // Код авиакомпании (iata)
      carrier: 'string',
      // Массив перелётов.
      // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      segments: [
        {
          // Код города (iata)
          origin: 'Minsk',
          // Код города (iata)
          destination: 'Moscow',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 1275,
        },
        {
          // Код города (iata)
          origin: 'Minsk',
          // Код города (iata)
          destination: 'Moscow',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 1275,
        },
      ],
    },
  ];

  const elements = arr.map((item, id) => {
    return (
      <li key={id} className={classes.ticket}>
        <Ticket />
      </li>
    );
  });

  return (
    <>
      <div className={classes.filter}>
        {/*<form>*/}
        <div className={classes.header}>
          <img className={classes.burger} src={burger} alt="Раскрыть фильтер"></img>
          <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        </div>
        <label className={classes.label}>
          <input className={classes.checkbox} type="checkbox"></input>
          Все
        </label>
        <label className={classes.label}>
          <input className={classes.checkbox} type="checkbox"></input>
          Без пересадок
        </label>
        <label className={classes.label}>
          <input className={classes.checkbox} type="checkbox"></input>1 пересадка
        </label>
        <label className={classes.label}>
          <input className={classes.checkbox} type="checkbox"></input>2 пересадки
        </label>
        <label className={classes.label}>
          <input className={classes.checkbox} type="checkbox"></input>3 пересадки
        </label>
        {/*</form>*/}
      </div>
      <div className={classes.main}>
        <div className={classes.tabs}>
          <button className={classes.btn}>САМЫЙ ДЕШЕВЫЙ</button>
          <button className={classes.btn}>САМЫЙ БЫСТРЫЙ</button>
          <button className={classes.btn}>ОПТИМАЛЬНЫЙ</button>
        </div>
        <ul className={classes.list}>{elements}</ul>
        <button className={classes.btn && classes.btnLong}>Показать еще 5 билетов</button>
      </div>
    </>
  );
};

export default TicketList;
