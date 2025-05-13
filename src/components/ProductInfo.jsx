import React from "react";

function ProductInfo() {
  const name = "Laptop";
  const price = "$1200";
  const availability = "In stock";
  return (
    <div>
      ProductInfo: {name} {price} {availability}
    </div>
  );
}

export default ProductInfo;
