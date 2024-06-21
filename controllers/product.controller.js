const Product = require('../models/product.model');

// Create and Save a new Product
exports.create = (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.find()
    .then(products => res.send(products))
    .catch(err => res.status(500).send({ message: err.message }));
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) return res.status(404).send({ message: "Product not found" });
      res.send(product);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => {
      if (!product) return res.status(404).send({ message: "Product not found" });
      res.send(product);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then(product => {
      if (!product) return res.status(404).send({ message: "Product not found" });
      res.send({ message: "Product deleted successfully!" });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
 