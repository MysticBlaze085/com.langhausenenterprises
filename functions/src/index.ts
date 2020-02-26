const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp();
require('dotenv').config();

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.firestore
  .document('contactSubmissions/{docId}')
  .onCreate((snap: any, ctx: any) => {
    const data = snap.data();

    let authData = nodemailer.createTransport({
      host: 'smpt.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD
      }
    });

    authData
      .sendMail({
        from: 'infor.truly@makethatapp.com',
        to: `${data.email}`,
        subject: 'Your Submission Infor',
        text: `${data.email}`,
        html: `${data.email}`
      })
      .then(() => console.log('successfully sent that mail'))
      .catch((e: any) => console.log(e));
  });
