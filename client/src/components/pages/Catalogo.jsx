import React from "react";
import img1 from "../../Galeria/img1.jpg";
import img2 from "../../Galeria/img2.jpg";
import img3 from "../../Galeria/img3.jpg";
import img4 from "../../Galeria/img4.jpg";
import img5 from "../../Galeria/img5.jpg";
import img6 from "../../Galeria/img6.jpg";
import img7 from "../../Galeria/img7.jpg";
import img8 from "../../Galeria/img8.jpg";
import img9 from "../../Galeria/img9.jpg";
import img10 from "../../Galeria/img10.jpg";

const Catalogo = () => {
  const data = [
    {
      id: 1,
      imgSrc: img1,
    },

    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },

    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
  ];

  return (
    <div>
      <div className="BackCatBlanco1"></div>
        <div className="Galeria">
          {data.map((item, index) => {
            return (
              <div className="Pics" key={index}>
                <a href=''><img src={item.imgSrc} className="Item" ></img></a>
              </div>
            );
          })}
        
      </div>
    </div>
  );
};

export default Catalogo;
