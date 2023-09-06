export class Topics {
  private client: any;

  constructor(client: any) {
    this.client = client;
  }

  async all() {
    return this.client.get("/topics");
  }

  async create(topicData: any) {
    return this.client.post("/topics", topicData);
  }

  async find(topicId: string) {
    return this.client.get(`/topics/${topicId}`);
  }
}
