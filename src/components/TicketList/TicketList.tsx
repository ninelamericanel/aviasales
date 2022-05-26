import React, { FC } from 'react';

import { Ticket } from 'components/Ticket';
import classesTabs from 'components/Tabs/Tabs.module.scss';

import classes from './TicketList.module.scss';

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
      <ul className={classes.list}>{elements}</ul>
      <button className={classesTabs.btn && classes.btnLong}>Показать еще 5 билетов</button>
    </>
  );
};

export default TicketList;
