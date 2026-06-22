const db = require('../config/db');

const getProducts = (
  limit,
  category,
  cursorUpdatedAt,
  cursorId
) => {

  return new Promise((resolve, reject) => {

    let query = `
      SELECT *
      FROM products
    `;

    const params = [];

    if (category) {
      query += ` WHERE category = ?`;
      params.push(category);
    }

    if (cursorUpdatedAt && cursorId) {

      if (category) {
        query += `
          AND
          (updated_at,id) < (?,?)
        `;
      } else {
        query += `
          WHERE
          (updated_at,id) < (?,?)
        `;
      }

      params.push(cursorUpdatedAt, cursorId);
    }

    query += `
      ORDER BY updated_at DESC,id DESC
      LIMIT ?
    `;

    params.push(limit);

    db.all(query, params, (err, rows) => {

      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }

    });

  });

};

module.exports = {
  getProducts
};