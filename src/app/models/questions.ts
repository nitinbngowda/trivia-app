export class Questions {
  id: number;
  question: string;
  options: string[];
  selectedAnswers: string[];
  multipleSelect: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.question = data.question;
    this.options = [];
    data.options.forEach((option: string) => {
      this.options.push(option);
    });
    this.multipleSelect = data.multipleSelect;
    this.selectedAnswers = data.selectedAnswers;
  }
}
