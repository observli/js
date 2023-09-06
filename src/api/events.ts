import { Event } from "../event";

export class Events {
  private client: any;

  constructor(client: any) {
    this.client = client;
  }

  async all() {
    return this.client.get(Event, "/events");
  }

  async create(eventData: any) {
    return this.client.post(Event, "/events", eventData);
  }

  async find(eventId: string) {
    return this.client.get(Event, `/events/${eventId}`);
  }
}
