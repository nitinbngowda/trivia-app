import { Questions } from "./questions";

export class History {
  name: string;
  date: Date;
  answeredQuestions: Questions[];

  constructor(data: any) {
    this.name = data.name;
    this.date = new Date(data.date);
    this.answeredQuestions = data.answeredQuestions;
  }
}
