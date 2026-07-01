import React, { useState, useEffect } from "react";

const ProductForm = ({ addProduct, updateProduct, editing }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (editing) {
      setProduct(editing);
    }
  }, [editing]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.price ||
      !product.category ||
      !product.description
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editing) {
      updateProduct(product);
    } else {
      addProduct(product);
    }

    setProduct({
      name: "",
      price: "",
      category: "",
      description: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Bag Name"
        value={product.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />

      <select
name="category"
value={product.category}
onChange={handleChange}
>

<option value="">Select Category</option>

<option>School Bag</option>

<option>Travel Bag</option>

<option>Laptop Bag</option>

<option>Handbag</option>

<option>Trolley Bag</option>

<option>Backpack</option>

<option>Duffel Bag</option>

<option>Hiking Bag</option>

</select>

      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      ></textarea>

      <button type="submit">
        {editing ? "Update Bag" : "Add Bag"}
      </button>
    </form>
  );
};

export default ProductForm;