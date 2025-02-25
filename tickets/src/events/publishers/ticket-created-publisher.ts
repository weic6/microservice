import { Publisher, Subjects, TicketCreatedEvent } from "@wchentickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
