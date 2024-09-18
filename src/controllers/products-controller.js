const { where } = require('sequelize');
const { product } = require('../models');

class ProductsController {
  static async findAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const offset = (page - 1) * limit;

      const productList = await product.findAndCountAll({
        limit: limit,
        offset: offset,
      });

      res.status(200).json({
        message: 'Success',
        data: productList.rows,
        meta: {
          total_items: productList.count,
          total_pages: Math.ceil(productList.count / limit),
          current_page: page,
          per_page: limit,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async findById(req, res, next) {
    try {
      const id = req.params.id;

      if (!parseInt(id)) {
        throw { name: 'BadRequest' };
      }

      const findProduct = await product.findByPk(id);

      if (findProduct === null) {
        throw { name: 'ErrorNotFound' };
      }

      res.status(200).json({
        message: 'Success',
        data: findProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { name, price, stock } = req.body;

      if (!name || !parseFloat(price) || !parseInt(stock)) {
        throw { name: 'BadRequest' };
      }

      const createProduct = await product.create({
        name,
        price,
        stock,
      });

      res.status(200).json({
        message: 'Create product successfully',
        data: createProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { name, price, stock } = req.body;
      const id = req.params.id;

      if (!name || !parseFloat(price) || !parseInt(stock) || !parseInt(id)) {
        throw { name: 'BadRequest' };
      }

      const updateProduct = await product.update(
        {
          name,
          price,
          stock,
        },
        {
          where: {
            id,
          },
        }
      );

      if (updateProduct == 0) {
        throw { name: 'FailedUpdate' };
      }

      res.status(200).json({
        message: 'Update product successfully',
        data: updateProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id;

      if (!parseInt(id)) {
        throw { name: 'BadRequest' };
      }

      const deleteProduct = await product.destroy({
        where: {
          id,
        },
      });

      if (deleteProduct == 0) {
        throw { name: 'FailedDelete' };
      }

      res.status(200).json({
        message: 'Delete product successfully',
        data: deleteProduct,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductsController;

module.exports = ProductsController;
