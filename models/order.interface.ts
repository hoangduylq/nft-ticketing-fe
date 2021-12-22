export interface IEvent {
  name: string;
  logoUrl: string;
  eventStartDate: string;
  eventPlaceName: string;
  eventAddress: string;
  ticketPrice: number;
}

export interface IOrderPayload {
  id?: string;
  userId?: string;
  amount: number;
  tickets: string[];
  event: IEvent;
}

export interface IOrderPagingPayload {
  orders: IOrderPayload[];
  total: number;
}

export interface ICreateOrderPayload {
  eventId?: string;
  userId?: string;
  bankId?: string;
  amount?: number;
}
