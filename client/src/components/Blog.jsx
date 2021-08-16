import React from "react";
import image1 from "../Galeria/img1.jpg";
import image2 from "../Galeria/img2.jpg";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="BlogBack">
        <div className="TituloFlex">
          <div>
            <h2 className="Numero">05</h2>
            <h1 className="TituloBlog">BLOG</h1>
            <hr className="LineaBlog"></hr>
          </div>
        </div>
        <div className="BlogWrapper">
          <div className="EntradaBlog">
            <img src={image1} alt="alt1" className="BolgIm"></img>
            <div className="BlogBox">
              Título del artículo 1
            </div>
          </div>
          <div className="EntradaBlog2">
            <img src={image2} alt="alt2" className="BolgIm"></img>
            <div className="BlogBox">
              Título del artículo 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
