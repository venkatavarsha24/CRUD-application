import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import API from "./services/api";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  // Get Products
  const fetchProducts = async () => {
    try {
      const res = await API.get();
      setProducts(res.data);
    } catch (error) {
      alert("Error loading products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add Product
  const addProduct = async (product) => {
    try {
      await API.post("/", product);
      alert("Bag Added Successfully");
      fetchProducts();
    } catch (error) {
      alert("Error Adding Bag");
    }
  };

  // Update Product
  const updateProduct = async (product) => {
    try {
      await API.put(`/${product._id}`, product);
      alert("Bag Updated Successfully");
      setEditing(null);
      fetchProducts();
    } catch (error) {
      alert("Error Updating Bag");
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this bag?")) return;

    try {
      await API.delete(`/${id}`);
      alert("Bag Deleted Successfully");
      fetchProducts();
    } catch (error) {
      alert("Error Deleting Bag");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="hero">
  <h1>Welcome to SAC</h1>
  <h3>Smart Accessories Collection</h3>

  <p>
    Manage School Bags, Travel Bags, Handbags, Laptop Bags,
    Trolley Bags and much more.
  </p>
</section>
      <div className="container">
        <ProductForm
          addProduct={addProduct}
          updateProduct={updateProduct}
          editing={editing}
        />

        <ProductList
          products={products}
          editProduct={setEditing}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}

export default App;
<footer className="footer">
<p>© 2026 SAC | Smart Accessories Collection</p>
</footer>