import React from "react";
import marmolnegro from "../images/marmolnegro.jpg";

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
          <div className="EntradaBlog"></div>
          <div className="EntradaBlog2"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
