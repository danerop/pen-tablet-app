create database pentablet;
use pentablet;
CREATE TABLE pentablet.clasificacion ( 
	id INT(7) NOT NULL AUTO_INCREMENT , 
	nombre VARCHAR(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL , 
	descripcion VARCHAR(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL DEFAULT NULL , 
	PRIMARY KEY (id)
) ENGINE = InnoDB;
CREATE TABLE pentablet.productos ( 
	id INT(7) NOT NULL AUTO_INCREMENT , 
	nombre VARCHAR(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL , 
	descripcion VARCHAR(500) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL , 
	clasificacion INT(7) NOT NULL , 
	precio INT(255) NOT NULL , 
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;
CREATE TABLE pentablet.compra ( 
	id INT NOT NULL AUTO_INCREMENT , 
	producto INT(7) NOT NULL , 
	usuario VARCHAR(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL , 
	PRIMARY KEY (id)
) ENGINE = InnoDB;
ALTER TABLE productos ADD FOREIGN KEY (clasificacion) REFERENCES clasificacion(id);
ALTER TABLE compra ADD FOREIGN KEY (producto) REFERENCES productos(id);
INSERT INTO clasificacion(id, nombre, descripcion) VALUES (1, "Tableta Gráfica", "Una tableta gráfica es un dispositivo para artistas y fotógrafos que sustituye el ratón por un lápiz óptico y un bloc de dibujo por una superficie digitalizadora.");
INSERT INTO clasificacion(id, nombre, descripcion) VALUES (2, "Monitor Gráfico", "En este caso la tableta gráfica posee una pantalla táctil incorporada que es compatible con el lápiz óptico, de esta manera al conectar con la computadora, podrás navegar por ella usando el lápiz directamente.");