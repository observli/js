export class Event {
  private client: any;
  id: string;
  title: string;
  message?: string;
  timestamp: string;

  constructor(data: any, client: any) {
    this.client = client;
    this.id = data.id;
    this.title = data.title;
    this.message = data.message;
    this.timestamp = data.timestamp;
  }

  async delete() {
    return this.client.delete(this, `/events/${this.id}`);
  }
}
