-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2022 a las 00:23:19
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pentablet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(7) NOT NULL,
  `usuario` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `totalPagado` int(11) DEFAULT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritoproducto`
--

CREATE TABLE `carritoproducto` (
  `id` int(7) NOT NULL,
  `carrito` int(7) NOT NULL,
  `producto` int(7) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `precioPagadoPorUnidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificacion`
--

CREATE TABLE `clasificacion` (
  `id` int(7) NOT NULL,
  `nombre` varchar(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clasificacion`
--

INSERT INTO `clasificacion` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Tableta Gráfica', 'Una tableta gráfica es un dispositivo para artistas y fotógrafos que sustituye el ratón por un lápiz óptico y un bloc de dibujo por una superficie digitalizadora.'),
(2, 'Monitor Gráfico', 'En este caso la tableta gráfica posee una pantalla táctil incorporada que es compatible con el lápiz óptico, de esta manera al conectar con la computadora, podrás navegar por ella usando el lápiz directamente.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(7) NOT NULL,
  `nombre` varchar(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(500) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `clasificacion` int(7) NOT NULL,
  `precio` int(255) NOT NULL,
  `imgUrl` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `clasificacion`, `precio`, `imgUrl`) VALUES
(1, 'INSPIROY H640P', 'Tablet para dibujo huion', 1, 19000, 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
(2, 'INSPIROY H1060P', 'Tablet para dibujo huion', 1, 24000, 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
(3, 'INSPIROY DIAL Q620', 'Tablet para dibujo huion', 2, 30000, 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
(4, 'HUION HS64', 'Tablet para dibujo huion', 1, 15000, 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
(5, 'HUION HS66', 'Monitor Gráfico', 2, 40000, 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
(6, 'HUION HS70', 'Monitor Gráfico', 2, 50000, 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
(7, 'INSPIROY H650P', 'Tablet para dibujo huion', 1, 20000, 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
(8, 'INSPIROY H650PX', 'Tablet para dibujo huion', 1, 20000, 'https://www.necxus.com.ar/products_image/21907/1000x1000_1.jpg'),
(9, 'HUION HS80', 'Monitor Gráfico', 2, 45000, 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1'),
(10, 'HUION HS100', 'Monitor Gráfico', 2, 80000, 'https://tutabletagrafica.com/wp-content/webpc-passthru.php?src=https://tutabletagrafica.com/wp-content/uploads/2019/03/huion-kamvas-pro-13-pulgadas.jpg&nocache=1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `uid` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario` (`usuario`);

--
-- Indices de la tabla `carritoproducto`
--
ALTER TABLE `carritoproducto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carrito` (`carrito`),
  ADD KEY `producto` (`producto`);

--
-- Indices de la tabla `clasificacion`
--
ALTER TABLE `clasificacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clasificacion` (`clasificacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `carritoproducto`
--
ALTER TABLE `carritoproducto`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clasificacion`
--
ALTER TABLE `clasificacion`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`uid`);

--
-- Filtros para la tabla `carritoproducto`
--
ALTER TABLE `carritoproducto`
  ADD CONSTRAINT `carritoproducto_ibfk_1` FOREIGN KEY (`carrito`) REFERENCES `carrito` (`id`),
  ADD CONSTRAINT `carritoproducto_ibfk_2` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`clasificacion`) REFERENCES `clasificacion` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
