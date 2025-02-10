import React, { useState } from "react";
import "../styles.css"; // Certifique-se de importar os estilos


const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
  });

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch("https://formspree.io/f/mjkgebko", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      setMensagemEnviada(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } else {
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <div className="contato-container">
      {mensagemEnviada ? (
        <h2 className="contato-sucesso">
          Mensagem Enviada! Em breve você retornará à página principal.
        </h2>
      ) : (
        <>
          <h2 className="contato-title">Entre em Contato</h2>
          <form onSubmit={handleSubmit} className="contato-form">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Telefone:</label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />

            <label>Assunto:</label>
            <textarea
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              maxLength="450"
              required
            />

            <button type="submit" className="contato-button">Enviar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
