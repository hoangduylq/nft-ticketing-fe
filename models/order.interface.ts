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
