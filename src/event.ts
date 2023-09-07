export class Event {
  #client: any;
  id: string;
  title: string;
  subtitle?: string;
  context: any;
  topics: string[];
  timestamp: string;

  constructor(data: any, client: any) {
    this.#client = client;
    this.id = data.id;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.context = data.context;
    this.topics = data.topics;
    this.timestamp = data.time;
  }

  async delete() {
    return this.#client.delete(this, `/events/${this.id}`);
  }
}
