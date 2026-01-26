import React from 'react';
import { useBag } from '../context/BagContext';
import PRODUCTS from '../data/products';
import { money } from '../utils/format';

export default function ProductDetailPage({ productId, onNavigate }) {
  const { addToBag } = useBag();

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return <p>OOps ! Looks like product is not found .</p>;
  }

  return (
    <div className="product-detail" tabIndex={0}>
      <button
        type="button"
        className="btn-secondary"
        onClick={() => onNavigate('store')}
        aria-label="Back to Store"
        style={{ marginBottom: 20 }}
      >
        &lt; Back to Store
      </button>

      <div
        className="detail-thumb"
        aria-label={`Image of ${product.name}`}
        style={{ marginBottom: 20 }}
      >
        {product.name}
      </div>

      <h2 className="detail-name">{product.name}</h2>
      <div className="detail-subtitle">{product.subtitle}</div>
      <div className="detail-price">${money(product.price)}</div>
      <p className="detail-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in quis ipsum non amet imperdiet.
      </p>

      <button
        type="button"
        className="btn-primary"
        onClick={() => {
          addToBag(product.id);
          alert(`${product.name} added to bag.`);
        }}
        style={{ marginRight: 12 }}
      >
        Add to Bag
      </button>

      {/* RatingStars */}
      <RatingStars rating={product.rating} />

      <button
        type="button"
        className="btn-secondary"
        onClick={() => onNavigate('checkout')}
      >
        View Bag
      </button>
    </div>
  );
}
