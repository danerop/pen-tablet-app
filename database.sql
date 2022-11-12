drop schema if exists pentablet;
create schema if not exists pentablet;
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

INSERT INTO clasificacion
	(id, nombre, descripcion) 
VALUES 
	(1, "Tableta Gráfica", "Una tableta gráfica es un dispositivo para artistas y fotógrafos que sustituye el ratón por un lápiz óptico y un bloc de dibujo por una superficie digitalizadora."),
	(2, "Monitor Gráfico", "En este caso la tableta gráfica posee una pantalla táctil incorporada que es compatible con el lápiz óptico, de esta manera al conectar con la computadora, podrás navegar por ella usando el lápiz directamente.");

ALTER TABLE productos ADD imgUrl VARCHAR(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL DEFAULT NULL AFTER precio;

INSERT INTO productos 
	(id, nombre, descripcion, clasificacion, precio, imgUrl) 
VALUES 
	('1', 'INSPIROY H640P', 'Tablet para dibujo huion', '1', '19000', 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
	('2', 'INSPIROY H1060P', 'Tablet para dibujo huion', '1', '24000', 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
	('3', 'INSPIROY DIAL Q620', 'Tablet para dibujo huion', '2', '30000', 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
	('4', 'HUION HS64', 'Tablet para dibujo huion', '1', '15000', 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
	('5', 'HUION HS66', 'Monitor Gráfico', '2', '40000', 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
	('6', 'HUION HS70', 'Monitor Gráfico', '2', '50000', 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
	('7', 'INSPIROY H650P', 'Tablet para dibujo huion', '1', '20000', 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
	('8', 'INSPIROY H650PX', 'Tablet para dibujo huion', '1', '20000', 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
	('9', 'HUION HS80', 'Monitor Gráfico', '2', '45000', 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
	('10', 'HUION HS100', 'Monitor Gráfico', '2', '80000', 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1');

