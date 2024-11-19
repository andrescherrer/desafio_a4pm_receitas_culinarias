CREATE USER 'master'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON receitas.* TO 'master'@'localhost';
FLUSH PRIVILEGES;