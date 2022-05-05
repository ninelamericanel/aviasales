import React, { FC } from 'react';

import { Ticket } from '../Ticket';

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
      <li key={id} className="ticket">
        <Ticket />
      </li>
    );
  });

  return (
    <>
      <div className="filter">
        <form>
          <label>КОЛИЧЕСТВО ПЕРЕСАДОК</label>
          <label>
            <input type="checkbox"></input>
            Все
          </label>
          <label>
            <input type="checkbox"></input>
            Без пересадок
          </label>
          <label>
            <input type="checkbox"></input>1 пересадка
          </label>
          <label>
            <input type="checkbox"></input>2 пересадки
          </label>
          <label>
            <input type="checkbox"></input>3 пересадки
          </label>
        </form>
      </div>
      <div className="main">
        <div className="tabs">
          <button className="btn">Самый дешевый</button>
          <button className="btn">Самый быстрый</button>
          <button className="btn">Оптимальный</button>
        </div>
        <ul className="list">{elements}</ul>
        <button className="btn">Показать еще 5 билетов</button>
      </div>
    </>
  );
};

export default TicketList;
