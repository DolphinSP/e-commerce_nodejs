 import { Service } from 'typedi'
import nodemailer, { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'


export type EmailDetails = {
  from: string;
  to: string;
  subject: string;
  text?: string;  // You can also include 'html' property if you prefer sending HTML emails
}

@Service()
export class SendEmailService {
  public isReady: boolean = false
  // @ts-ignore
  #transporterInstance?: Transporter<SMTPTransport.SentMessageInfo>

  constructor() {
    const hasEmailCredentials = !process.env.EMAIL_USER || !process.env.EMAIL_PASS
    if (!hasEmailCredentials) {
      console.log('🤯 SERVICE UNABLE TO SEND EMAILS')
      this.isReady = false
    } else {
      this.isReady = true
      this.initializeTransporterInstance()
    }
  }

  async sendEmail(emailDetails: EmailDetails) {
    if (!this.#transporterInstance) {
      console.error('Transporter not initialized')
      return 'error with the transport instance'
    }
    try {
      const info = await this.#transporterInstance.sendMail(emailDetails)
      console.log('Message sent: %s', info.messageId)
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  isGmailOrHotmail(email: string): boolean {
    const pattern = /@(gmail\.com|hotmail\.com)$/
    return pattern.test(email)
  }


  private initializeTransporterInstance() {
    this.#transporterInstance = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER || '',
        password: process.env.EMAIL_PASS || ''
      }
    } as SMTPTransport.Options)
    this.#transporterInstance.verify().then(() => {
      this.isReady = true
      console.log('Transporter instance succesfully configured, ready to send emails 🥳')
    }).catch((e) => {
      console.error('Error trying to create transporter instance', e)
      this.isReady = false
    })
  }
}
