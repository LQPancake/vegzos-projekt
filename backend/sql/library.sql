CREATE DATABASE IF NOT EXISTS library CHARACTER SET utf8mb4;
USE library;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  author VARCHAR(150) NOT NULL,
  published_year INT,
  category VARCHAR(80),
  price INT NOT NULL DEFAULT 0
);

INSERT INTO books (title, author, published_year, category, price) VALUES
  ('Egri csillagok', 'Gárdonyi Géza', 1901, 'Regény', 3490),
  ('A Pál utcai fiúk', 'Molnár Ferenc', 1906, 'Ifjúsági', 2990),
  ('Az ember tragédiája', 'Madách Imre', 1861, 'Dráma', 2490);