import React from 'react';
import { useBag } from '../context/BagContext';
import PRODUCTS from '../data/products';
import { money } from '../utils/format';

export default function ProductDetailPage({ productId, onNavigate }) {
  const { addToBag } = useBag();

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return <p>Oops! Looks like product is not found.</p>;
  }

  return (
    <div className="product-detail p-4 max-w-3xl mx-auto" tabIndex={0}>
      <button
        type="button"
        className="btn-secondary mb-4"
        onClick={() => onNavigate('store')}
      >
        &lt; Back to Store
      </button>

      <div className="detail-thumb mb-4">
        {product.name}
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold mb-1">{product.name}</h2>

      {/* Variant */}
      <div className="text-gray-600 mb-2">{product.subtitle}</div>

      {/* Rating */}
      <div className="mb-2">
        <RatingStars rating={product.rating} color="green" />
      </div>

      {/* Price */}
      <div className="text-xl font-semibold mb-1">
        ${money(product.price)}
      </div>

      {/* Mini Description */}
      {product.miniDesciption && (
        <div className="text-gray-500 italic mb-4">
          {product.miniDesciption}
        </div>
      )}

      {/* Add to Bag Button */}
      <button
        type="button"
        className="btn-primary mb-4"
        onClick={() => {
          addToBag(product.id);
          alert(`${product.name} added to bag.`);
        }}
      >
        Add To Bag
      </button>

      {/* Full Description */}
      {product.description && (
        <div className="text-gray-700 leading-relaxed">
          {product.fullDescription}
        </div>
      )}
    </div>
  );
}



     