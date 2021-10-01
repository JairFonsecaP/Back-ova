const nodemailer = require("nodemailer");

exports.contact = async ({ nombre, email, telefono, comentario }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      tls: { rejectUnauthorized: false },
      auth: {
        user: "bwn.notifications@gmail.com",
        pass: "2cac2831d6546d",
      },
    });

    const contentHTMLTeacher = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        http-equiv="Content-Type"
        content="text/html; charset=utf-8"
        />
        <title>Activate register</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,300&display=swap"
        rel="stylesheet"
        />
        </head>
        <body bgcolor="#fff">
            <h1>Hola Karen alguien quiere ser contactado por alguien de MEDIA TRAVEL</h1>
            <p>Nombre: ${nombre}</p>
            <p>email: ${email}</p>
            <p>telefono: ${telefono}</p>
            <p>comentario: ${comentario}</p>
        </body>
        </html>
        `;
    const contentHTMLContact = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        http-equiv="Content-Type"
        content="text/html; charset=utf-8"
        />
        <title>Activate register</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,300&display=swap"
        rel="stylesheet"
        />
        </head>
        <body bgcolor="#fff">
        <h1>Hola ${nombre}</h1>
        <p>En breve alguien de nuestro equipo se pondra en contacto contigo, gracias por comunicarte con Media Travel.</p>
        </body>
        </html>
        `;
    const mailOptionsTeacher = {
      from: "Contacto",
      to: "jairfonseca64@yahoo.es",
      subject: "Alguien quiere comunicarse contigo!!!",
      html: contentHTMLTeacher,
    };
    const mailOptionsContact = {
      from: "Media Travel",
      to: email,
      subject: "Contactanos",
      html: contentHTMLContact,
    };
    const responseOne = await transporter.sendMail(mailOptionsTeacher);
    const responseTwo = await transporter.sendMail(mailOptionsContact);
  } catch (e) {
    throw e;
  }
};
