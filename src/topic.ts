import { Event } from "./event";

export class Topic {
  private client: any;
  id: string;
  name: string;
  slug: string;

  constructor(data: any, client: any) {
    this.client = client;
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
  }

  async createEvent(eventData: any) {
    return this.client.post(Event, "/events", eventData);
  }

  async delete() {
    return this.client.delete(this, `/topics/${this.id}`);
  }
}
