export interface CheckboxType {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface TabsType {
  id: number;
  name: string;
  isActive: boolean;
}

export interface StateType {
  FilterReducer: {
    isChecked: number[];
    checkboxes: CheckboxType[];
    checkboxAll: boolean;
  };
  TabsReducer: {
    tabs: TabsType[];
  };
  TicketsReducer: {
    tickets: TicketType[];
    load: boolean;
    error: boolean;
  };
}

export interface ObjectTickets {
  [key: number]: TicketType;
}

export interface TicketType {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}
