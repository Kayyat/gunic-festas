import React from "react";
import "../styles.css"; // Certifique-se de importar os estilos

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Banner Estático - Agora ocupa a largura total */}
      <div className="banner-section">
        <img 
          src={process.env.PUBLIC_URL + "/images/banner1.jpeg"} 
          alt="Banner Estático" 
          className="banner-image" 
        />
      </div>

      {/* Título Centralizado */}
      <h2 className="section-title">Os mais pedidos</h2>

      {/* Seção de Categorias - Agora fica abaixo do título */}
      <div className="categories-section">
        <div className="categories-container">
          
          {/* Categoria 1: Homem-Aranha */}
          <div className="category-item">
            <img 
              src={process.env.PUBLIC_URL + "/images/homem-aranha.png"} 
              alt="Homem-Aranha" 
              className="category-image" 
            />
            <p className="category-text">Homem-Aranha</p>
            <p className="category-price">A partir de R$145,00</p>
          </div>

          {/* Categoria 2: Stitch */}
          <div className="category-item">
            <img 
              src={process.env.PUBLIC_URL + "/images/stitch-5.png"} 
              alt="Stitch" 
              className="category-image" 
            />
            <p className="category-text">Stitch</p>
            <p className="category-price">A partir de R$145,00</p>
          </div>

          {/* Categoria 3: Princesas */}
          <div className="category-item">
            <img 
              src={process.env.PUBLIC_URL + "/images/princesas.png"} 
              alt="Princesas" 
              className="category-image" 
            />
            <p className="category-text">Princesas</p>
            <p className="category-price">A partir de R$145,00</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
