import React from "react";

const ProductList = ({ products, editProduct, deleteProduct }) => {
  return (
    <div className="product-container">
      {products.length === 0 ? (
        <h3>No Bags Available</h3>
      ) : (
        products.map((product) => (
          <div className="card" key={product._id}>
            <div className="bag-icon">
👜
</div>
            <h2>{product.name}</h2>

            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>{product.description}</p>

            <div className="btn-group">
              <button
                className="edit-btn"
                onClick={() => editProduct(product)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;