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
      {/* Back button */}
      <button
        type="button"
        className="btn-secondary mb-4"
        onClick={() => onNavigate('store')}
        aria-label="Back to Store"
      >
        &lt; Back to Store
      </button>

      {/* Product image */}
      <div
        className="detail-thumb mb-4"
        aria-label={`Image of ${product.name}`}
      >
        {product.name}
      </div>

      {/* Product title */}
      <h2 className="detail-name text-2xl font-bold mb-2">{product.name}</h2>

      {/* Subtitle */}
      <div className="detail-subtitle text-gray-600 mb-2">{product.subtitle}</div>

      {/* Price */}
      <div className="detail-price text-xl font-semibold mb-1">
        ${money(product.price)}
      </div>

      {/* Mini description directly below price */}
      {product.miniDescription && (
        <div className="text-gray-500 mb-4 italic">
          {product.miniDescription}
        </div>
      )}

      {/* Full description below mini description */}
      {product.description && (
        <div className="text-gray-700 mb-4">
          {product.description}
        </div>
      )}

      {/* Add to Bag button */}
      <button
        type="button"
        className="btn-primary mb-4"
        onClick={() => {
          addToBag(product.id);
          alert(`${product.name} added to bag.`);
        }}
      >
        Add to Bag
      </button>

      {/* RatingStars with green color */}
      <div className="mb-4">
        <RatingStars rating={product.rating} color="green" />
      </div>

      {/* View Bag / Checkout button */}
      <button
        type="button"
        className="btn-secondary mt-4"
        onClick={() => onNavigate('checkout')}
      >
        View Bag
      </button>
    </div>
  );
}
