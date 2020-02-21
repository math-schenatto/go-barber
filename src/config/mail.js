export default {
  // host: 'smtp.mailtrap.io',
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  // port: '2525',
  secure: false,
  auth: {
    // user: '0017637bf001dc',
    user: process.env.MAIL_USER,
    // pass: '5f40f6d324bb3f',
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Matheus Schenatto <noreplpy@gobarber.com>',
  },
};
