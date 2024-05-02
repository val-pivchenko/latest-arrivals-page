/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductCard = ({ name, colors, images, inventory }) => {
  const productImages = images;
  const [currImage, setCurrImage] = useState(0);
  const handleColorChange = (color) => {
    const newImageIndex = productImages.findIndex(
      (image) => image.color === color
    );
    setCurrImage(newImageIndex);
  };
  console.log(currImage);
  return (
    <div className="product-card">
      <div
        style={{
          backgroundImage: `url(${productImages[currImage].image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="image-container"
      ></div>
      <div className="card-details">
        <div className="product-name-container">
          <p className="product-specs text-sm">
            {productImages[currImage].color.charAt(0).toUpperCase() +
              productImages[currImage].color.slice(1)}
          </p>
          <h2 className="product-name text-lg">{name}</h2>
        </div>

        <div className="product-price">
          {inventory[0].list_price > inventory[0].sale_price ? (
            <>
              <p className="price">${inventory[0].sale_price}</p>
              <p className="product-specs text-sm strikethrough">
                ${inventory[0].list_price}
              </p>
            </>
          ) : (
            <p className="price">${inventory[0].list_price}</p>
          )}
        </div>
        <div className="colors">
          {colors.map((color) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault;
                  handleColorChange(color);
                }}
                className="item-color"
                key={color}
                style={{ background: color }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
