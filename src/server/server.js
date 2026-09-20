
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares: habilitan el procesamiento de objetos JSON en req.body y permiten peticiones desde React
app.use(express.json());
app.use(cors());

// Transporter: define el servicio de correo y las credenciales de autenticación
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta POST: recibe la información del formulario desde el cliente
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // mailOptions: especifica origen, destino, asunto y contenido plano del correo
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Recibes el correo en tu propia casilla
    replyTo: email, // Permite responder directamente al correo del remitente
    subject: `Nuevo mensaje de tu Portafolio: ${name}`,
    text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
  };

  try {
    // sendMail: método asíncrono que realiza el envío
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error enviando el correo:', error);
    res.status(500).json({ success: false, message: 'Error interno al enviar el correo' });
  }
});

// Escucha activa del servidor en el puerto configurado
app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor ejecutándose en el puerto ${process.env.PORT || 5000}`);
});