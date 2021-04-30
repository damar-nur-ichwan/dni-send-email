var nodemailer = require('nodemailer');
const config = require('./config')

var transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.user,
    pass: config.pass
  }
});

function SendEmail(to,subject,text){
    var mailOptions = {
        from: config.user,
        to,
        subject,
        text,
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = SendEmail

//gagal login ke akun gmail.
// Ada beberapa kemungkinan:
// 1. Passwordnya salah;
// 2. Pengaturan Keamanan di Gmail yang tidak mengizinkan aplikasi pihak ketiga.
// 3. Koneksi internet;
//yg nomer 2, silahkan atur di google account >security>ijinkan aplikasi tidak aman 'diaktifkan'