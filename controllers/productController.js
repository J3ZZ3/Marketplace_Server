const { db } = require('../config/firebase');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const snapshot = await db.collection('products').get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new product
exports.addProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const newProduct = await db.collection('products').add({ name, price, description });
    res.status(201).json({ message: 'Product added', id: newProduct.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    await db.collection('products').doc(id).update(updatedData);
    res.status(200).json({ message: 'Product updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection('products').doc(id).delete();
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
