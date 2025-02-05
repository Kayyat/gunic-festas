const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Seu e-mail
    pass: process.env.EMAIL_PASS, // Senha ou App Password
  },
});

app.post("/send-email", async (req, res) => {
  const { nome, email, telefone, assunto } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "gunicfestas@gmail.com", // E-mail de destino
      subject: "Novo Contato via Site",
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}`,
    });

    res.json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    res.json({ success: false, message: "Erro ao enviar mensagem." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
