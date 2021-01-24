export class Report {
    courseId: number;
    userState: string;
    userCity: string;
    fromRange: number;
    toRange: number;
    examLevel: number;
    constructor(args: any) {
        this.courseId = args.courseId;
        this.userState = args.userState;
        this.userCity = args.userCity;
        this.fromRange = args.fromRange;
        this.toRange = args.toRange;
        this.examLevel = args.examLevel;
    }
}
