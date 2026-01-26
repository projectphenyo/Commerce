import React from "react";

export function Button({ 
  children, 
  className = "", 
  size = "md", 
  isInCart = false, 
  product, 
  addToBag, 
  ...props 
}) {
  // Define size variants
  const sizes = {
    md: "px-4 py-2 text-sm",
    icon: "p-2",
  };

  return (
    <button
      onClick={() => addToBag && product ? addToBag(product.id, 1) : null}
      className={`rounded-xl transition-all duration-200 ${sizes[size]} ${className} ${
        isInCart
          ? "bg-green-500 hover:bg-green-600"
          : "bg-gray-900 hover:bg-gray-800"
      }`}
      {...props}
    >
      {children || <span role="img" aria-label="shopping bag">🛍️</span>}
    </button>
  );
}