export class Resetpassword {
    code: string;
  newPassword: string;
  confirmPassword: string;
  userEmail: string;

  constructor(args: any) {
    this.code = args.code;
    this.newPassword = args.newPassword;
    this.confirmPassword = args.confirmPassword;
    this.userEmail = args.userEmail;
  }
}