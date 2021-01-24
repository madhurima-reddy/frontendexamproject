export class Question {
    examLevel: number;
  description: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour: string;
  answer: string;
  courseId: number;

  constructor(args: any) {
    this.courseId = args.courseId;
    this.examLevel = args.examLevel || 0;
    this.description = args.description || '';
    this.optionOne = args.optionOne;
    this.optionThree = args.optionTwo;
    this.optionThree = args.optionThree;
    this.optionFour = args.optionFour;
    this.answer = args.answer;
  }
}
