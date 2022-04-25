import { Subjects, Publisher, OrderCancelledEvent } from '@lazymtlib/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
