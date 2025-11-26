const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');

// Define relationships
Category.hasMany(Product, {
  foreignKey: 'categoryId',
  as: 'products'
});

Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category'
});

module.exports = {
  Product,
  Category,
  User
};
