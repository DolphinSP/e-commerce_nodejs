const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');


const { models   } = require('../libs/sequelize');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();

  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {

    const newProduct = await models.Product.create(data);
      return newProduct;
  }

  async find() {
    const rta = await models.Product.findAll({
      include: ['category'],
      raw: true
    });
    return rta;

  }
  async findOne(id) {
    const rta =await models.Product.findOne(id);
    return rta;

  }

  async update(id, changes) {
    const query = 'UPDATE task SET title = $1, completed = $2 WHERE id = $3 RETURNING *';
    const values = [changes.title, changes.completed, id];

    const result = await this.pool.query(query, values);

    if (result.rows.length === 0) {
      throw boom.notFound('Product not found');
    }

    const updatedProduct = result.rows[0];

    if (updatedProduct.isBlock) {
      throw boom.conflict('Product is blocked');
    }

    return updatedProduct;
  }


  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
