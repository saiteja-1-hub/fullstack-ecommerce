const productsModel = require('../models/productsModel');

const getProducts = async (req, res) => {

  try {

    const limit = Number(req.query.limit) || 20;

    const category = req.query.category || null;

    const cursorUpdatedAt =
      req.query.cursorUpdatedAt || null;

    const cursorId =
      req.query.cursorId || null;

    const products = await productsModel.getProducts(
      limit,
      category,
      cursorUpdatedAt,
      cursorId
    );

    let nextCursor = null;

    if (products.length > 0) {

      const lastProduct =
        products[products.length - 1];

      nextCursor = {
        updated_at: lastProduct.updated_at,
        id: lastProduct.id
      };
    }

    res.json({
      products,
      nextCursor
    });

  }

  catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Internal server error"
    });

  }

};

module.exports = {
  getProducts
};