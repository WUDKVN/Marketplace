const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Marketplace', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Product Schema
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String
});

// Define Category Schema
const CategorySchema = new mongoose.Schema({
  name: String
});

// Create Models
const Product = mongoose.model('Product', ProductSchema);
const Category = mongoose.model('Category', CategorySchema);

// Insert Documents
const insertDocuments = async () => {
  try {
    await Product.insertMany([
      { name: "Shirt", description: "Cotton shirt", price: 25, quantity: 100, category: "Men" },
      { name: "Dress", description: "Summer dress", price: 45, quantity: 50, category: "Women" }
    ]);

    await Category.insertMany([
      { name: "Men" },
      { name: "Women" },
      { name: "Kevine" }
    ]);

    console.log('Documents inserted successfully');
  } catch (err) {
    console.error('Error inserting documents', err);
  } finally {
    mongoose.connection.close();
  }
};

insertDocuments();
