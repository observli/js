import { Events } from "./events";
import { Topics } from "./topics";

export class Observli {
  public events: Events;
  public topics: Topics;
  private host: string;
  private apiKey: string;

  constructor(config: any) {
    const { host, apiKey } = config;
    this.apiKey = apiKey;
    this.host = host || "https://api.observli.com";
    this.events = new Events(this);
    this.topics = new Topics(this);
  }

  async get(model: any, endpoint: string) {
    const response = await fetch(`${this.host}${endpoint}`, {
      headers: this.getHeaders(),
    });
    const data = await response.json();
    return Array.isArray(data)
      ? data.map((item: any) => new model(item, this))
      : new model(data, this);
  }

  async post(model: any, endpoint: string, body: any) {
    try {
      const response = await fetch(`${this.host}${endpoint}`, {
        headers: this.getHeaders(),
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return new model(data, this);
    } catch (error) {}
  }

  async delete(model: any, endpoint: string) {
    const response = await fetch(`${this.host}${endpoint}`, {
      headers: this.getHeaders(),
      method: "DELETE",
    });
    const data = await response.json();
    return new model(data);
  }

  getHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }
}
