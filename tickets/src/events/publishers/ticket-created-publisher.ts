import { Publisher, Subjects, TicketCreatedEvent } from '@coleman-org/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
