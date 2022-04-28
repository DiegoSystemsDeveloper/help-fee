import nodemailer from 'nodemailer'

export const emailOlvideRegistro = async(datos) => {
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: '"Help Fee" <cuentas@helpfee.com>',
        to: email,
        subject: "Help Fee - Restablece Tu Password",
        text: "Comprueba tu cuenta en Help Fee",
        html: `<p>Hola: ${nombre} Has solicitado reestablecer tu password</p>
          <p>Sigue el siguiente enlace: 

          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>

          <p>Si tu no solicitaste este email, puedes ignorar este mensaje</p>
          
          `
    })
}

export const emailRegistro = async(datos) => {
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: '"Help Fee" <cuentas@helpfee.com>',
        to: email,
        subject: "Help Fee - Confirma Tu Cuenta",
        text: "Comprueba tu cuenta en Help Fee",
        html: `<p>Hola: ${nombre} Comprueba tu cuenta en Help Fee</p>
          <p>Tu cuenta ya esta casi lista, compruebala en el siguiente enlace: 

          <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

          <p>Si tu no creaste esta cuenta puedes ignorar este mensaje</p>
          
          `
    })
}