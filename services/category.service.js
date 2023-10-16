const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const category = await models.Category.findAll({ raw: true});
    return category;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id,{
      include: ['products']
    });
    return category;
  }

  async update(id, changes) {
  const category = await this.findOne(id);
     const rta = await category.update(changes);
    return rta;
  }


  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
