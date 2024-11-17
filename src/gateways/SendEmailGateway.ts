import { Service } from "typedi";

import { EmailDetails, SendEmailService } from "../services/SendEmailService";

@Service()
export class EmailGateway {
  // tslint:disable-next-line:no-empty
  constructor(private sendEmailService: SendEmailService) {}

  async sendEmail(emailPayload: EmailDetails): Promise<string> {
    const isValid = this.sendEmailService.isGmailOrHotmail(emailPayload.to);
    console.log("email valid is ", isValid);
    if (isValid) {
      await this.sendEmailService.sendEmail(emailPayload);
      return "done";
    } else {
      return `error trying to send email from ${emailPayload.from} to ${emailPayload.to}`;
    }
  }
}
