export interface IEventPayload {
  userId: string;
  name: string;
  categoryId: string;
  logoUrl: string;
  bannerUrl: string;
  description: string;
  eventPlaceName: string;
  eventAddress: string;
  saleStartDate: string;
  saleEndDate: string;
  eventStartDate: string;
  eventEndDate: string;
  totalTickets: number;
  availableTickets: number;
  ticketImageUrl: string;
  ticketPrice: number;
  maxTicketOrder: number;
  minTicketOrder: number;
  organizationInfo: string;
  organizationEmail: string;
  organizationPhone: string;
  organizationAddress: string;
}
