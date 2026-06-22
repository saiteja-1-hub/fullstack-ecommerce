import './ProductCard.css'

const categoryImages = {
  Electronics:
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',

  Books:
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500',

  Fashion:
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500',

  Sports:
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500',

  Beauty:
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',

  Home:
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500',

  Toys:
    'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500'
}

function ProductCard({ product }) {
  return (
    <div className="card">

      <img
        src={categoryImages[product.category]}
        alt={product.name}
        className="product-image"
      />

      <div className="card-body">

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <h2>₹{product.price}</h2>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>

    </div>
  )
}

export default ProductCard