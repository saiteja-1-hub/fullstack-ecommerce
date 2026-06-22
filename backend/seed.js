console.log("Seed script started");

const db = require('./config/db');

console.log("db loaded");

const categories = [
  "Electronics",
  "Books",
  "Fashion",
  "Sports",
  "Beauty",
  "Home",
  "Toys"
];

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS products`);

  db.run(`
    CREATE TABLE products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      category TEXT,
      price REAL,
      created_at TEXT,
      updated_at TEXT
    )
  `);

  // Index for cursor pagination
  db.run(`
    CREATE INDEX idx_updated_id
    ON products(updated_at DESC, id DESC)
  `);

  // Index for category + pagination
  db.run(`
    CREATE INDEX idx_category_updated_id
    ON products(category, updated_at DESC, id DESC)
  `);

  db.run("BEGIN TRANSACTION");

  const stmt = db.prepare(`
    INSERT INTO products
    (name, category, price, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?)
  `);

  for (let i = 1; i <= 200000; i++) {

    const category =
      categories[Math.floor(Math.random() * categories.length)];

    const price =
      (Math.random() * 5000).toFixed(2);

    const date = new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString();

    stmt.run(
      `Product ${i}`,
      category,
      price,
      date,
      date
    );

    if (i % 10000 === 0) {
      console.log(`${i} products inserted`);
    }
  }

  stmt.finalize();

  db.run("COMMIT", err => {

    if (err) {
      console.log(err);
    }
    else {
      console.log("200000 products inserted successfully!");
    }

    db.close();
  });

});