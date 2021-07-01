import React from "react";
import marmolnegro from "../images/marmolnegro.jpg";

const Blog = () => {
  return (
    <div className="Blog">
      <img src={marmolnegro} className="BlogMarmol" alt="Marmol"></img>
      <div className="BlogTextContainer">
        <h6 className="NumBlog">05</h6>
        <h2 className="TitleBlog">Blog</h2>
      </div>
      <div className="Contenedor1"></div>
      <div className="LeerMas1">
        <h1 className="Leer">Leer más</h1>
      </div>
      <div className="Contenedor2"></div>
      <div className="LeerMas2">
        <h1 className="Leer">Leer más</h1>
      </div>
    </div>
  );
};

export default Blog;
