const {boom} = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jws = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const {config} = require('./../config/config');

const UserService = require('./user.service');
const service = new UserService();
class AuthService {
  async getUsers(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
   throw(boom.unauthorized(), false);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
     throw(boom.unauthorized(), false);
     }
     delete user.dataValues.password;
     return user;
   }


signToken(user) {
  const payload = {
    sub:user.id,
    role:user.role
  }
  const token = jws.sign(payload, config.jwtSecret)
  return{
    user,
    token,
  };
}

async sendRecovery(email){
   const user = await service.findByEmail(email);
  if (!user) {
 throw(boom.unauthorized(), false);
}
const payload = { sub: user.id};
const token = jws.sign(payload, config.jwtSecret, {expiresIn:'15min'});
const link = `http://myfronted.com/recovery?token=${token}`;
await service.update(user.id,{recoveryToken: token})
  const mail = {
    from: config.emailMailer, // sender address
    to: `${user.email}`, // list of receivers
    subject: "email para recuperar contraseña", // Subject line
    html: `<b>Ingresa a este link => ${link}</b>`, // html body

  }
  const rta = await this.sendMail(mail);
  return rta;
}


async sendMail(infoMail) {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: config.emailMailer,
        pass:  config.passwordMailer

    }
  });
  await transporter.sendMail(infoMail);
  return { message: 'mail sent'}
}
}
module.exports = AuthService;
