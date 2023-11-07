import { Publisher, Subjects, TicketUpdatedEvent } from '@coleman-org/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
