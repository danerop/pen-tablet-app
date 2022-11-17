-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2022 a las 02:28:34
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
(1, 'Tabletas Gráficas', 'Una tableta gráfica es un dispositivo para artistas y fotógrafos que sustituye el ratón por un lápiz óptico y un bloc de dibujo por una superficie digitalizadora.'),
(2, 'Monitores Gráficos', 'En este caso la tableta gráfica posee una pantalla táctil incorporada que es compatible con el lápiz óptico, de esta manera al conectar con la computadora, podrás navegar por ella usando el lápiz directamente.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(7) NOT NULL,
  `nombre` varchar(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `clasificacion` int(7) NOT NULL,
  `precio` int(255) NOT NULL,
  `imgUrl` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `clasificacion`, `precio`, `imgUrl`) VALUES
(1, 'HUION HS64', '<h3>Estilo minimalista</h3> <p>La tableta HS64 de 8 milímetros de grosor está diseñada en un estilo minimalista con puntos estrellados en la superficie, donde se combinan la funcionalidad y la simplicidad.</p><h3>La mejor experiencia de dibujo</h3> <p>La sensibilidad a la presión mejorada cuenta con 8192 niveles, haciendo que el movimiento y la presión aplicados al lápiz sean más precisos y tengan un mejor rendimiento.</p><h3>La mejor experiencia de dibujo</h3> <p>La sensibilidad a la presión mejorada cuenta con 8192 niveles, haciendo que el movimiento y la presión aplicados al lápiz sean más precisos y tengan un mejor rendimiento.</p><h3>Un gran margen de compatibilidad</h3> <p>Se admiten las conexiones con dispositivos de computadora y android 6.0 (o superior) (el dispositivo debe ser compatible con USB OTG). Se admite la operación en Windows, macOS y Android, con varios programas de dibujo y diseño estándar compatibles.</p>', 1, 14000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/huion-hs64-pen-tablet-011-96d426e48d4605b89716008966178343-640-0.jpg'),
(2, 'INSPIROY H640P (8192)', '<h3>Vive joven en la creatividad</h3><p>Última generación de tecnología electromecánica pasiva, apoyando continuamente el desencadenamiento de inspiraciones creativas.</p><h3>Vive joven con la más alta eficiencia</h3><p>Entre sus teclas de acceso directo, la de encendido y apagado, ayuda a evitar el tacto innecesario o accidental de otras teclas de acceso directo.</p><h3>Vive joven en confianza e inclusividad</h3><p>Compatible con sistemas convencionales tales como Windows y macOS, lo que permite la operación libre en variados softwares de dibujo y diseño convencionales.</p>', 1, 15000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-h640p-pen-tablet-0111-91de5344c00380171d16008971196118-640-0.jpg'),
(3, 'KAMVAS 13', '<h3>Bolígrafo Kamvas 13, un as en accesibilidad</h3><p>Conexión más fácil, mejor conveniencia y superior eficiencia.</p><h3>Suficientemente ligero para mejor conveniencia</h3><p>Kamvas 13 es ultra delgado. Tiene un grosor de solo 11.2 mm y pesa solo 980 g, que lo convierte en un monitor interactivo fácil de transportar para dibujar al aire libre.</p><h3>Enciéndalo con un cable USB</h3><p>El diseño de bajo consumo de energía permite que Kamvas 13 sea alimentado por una computadora portátil directamente. Para encender el monitor interactivo, los usuarios solo necesitan conectar Kamvas 13 a una computadora portátil que funcione con 5 voltios o más a través de un cable USB.</p>', 2, 77000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-13-pen-display-011-3999c9f5a34577e5d615917079734323-640-0.jpg'),
(4, 'INSPIROY H1060P', '<h3>Para desencadenar un avance en la creación</h3><p>Los niveles de sensibilidad a la presión de 8192 ayudan a llevar su creación a una nueva altura, ya que cada entrada de línea se procesa de manera más delicada y con mayor precisión.</p><h3>Presentación suave y precisa del trazo del lápiz</h3><p>La tasa de informe de 220PPS garantiza una respuesta instantánea con un retraso mínimo y una mayor precisión en el dibujo. De esta manera logrará un gran avance en sus dibujos, ya que el rendimiento de la tableta se optimizará constantemente.</p><h3>Delicadeza desplegada en píxeles</h3><p>Las líneas creadas por su lápiz se pueden capturar con precisión con la ayuda de la resolución del lápiz 5080LPI y, por lo tanto, una presentación realista en la pantalla puede incluso revelar la delicadeza de cada píxel.</p>', 1, 26000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-h1060p-pen-tablet-011-8ec923882cef5cf96216334550090623-640-0.jpg'),
(5, 'KAMVAS 22 PLUS', '<h3>Millones de colores brillan delante de tus ojos</h3><p>Con la tecnología de puntos cuánticos, la gama de colores de Kamvas 22 Plus alcanza el 140% de sRGB y la relación de contraste llega a 1200: 1, lo que ayuda a aumentar la profundidad de color de su trabajo. Además, los usuarios también pueden disfrutar de una impresionante presentación de imágenes en esta pantalla de 21,5 pulgadas, ya que se pueden mostrar 16,7 millones de colores de forma natural y vívida.</p><h3>Una pantalla low blue de baja luz azul protegerá tus ojos</h3><p>La pantalla equipada con la avanzada tecnología de puntos cuánticos puede filtrar eficazmente la luz azul que es dañina para los ojos, lo que protege en gran medida a los usuarios de la fatiga visual digital.</p>', 2, 200000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-22-kamvas-22-plus-pen-display-011-265c04721c3da96f7d16009636423800-640-0.jpg'),
(6, 'KAMVAS PRO 20', '<h3>Experiencia de dibujo inmersivo traída por colores preciosos</h3><p>Intente sumergirse en el dibujo o el diseño con Kamvas Pro 20 (2019) que cuenta con 120% sRGB en gama de colores y 16,7 millones de colores, lo que llevará la calidad de sus obras a una nueva altura.</p><h3>Cada detalle se muestra animado</h3><p>Haga que su dibujo o diseño se muestre completamente en la pantalla IPS de 19.5 pulgadas que cuenta con resoluciones de 1920 x 1080, con cada detalle para ser renderizado en vivo. Además, el ángulo de visión de 178° de la pantalla puede garantizar aún más la calidad de la imágen.</p>', 2, 210000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-pro-20-2019-pen-display-011-7fd1aae5c210e07fe616321790281305-640-0.jpg'),
(7, 'INSPIROY DIAL Q620', '<h3>Posibilidades ilimitadas</h3><p>Realice un trabajo mas fácil con Dial Controller. Diseño creativo que despertará tu próxima gran idea.</p><h3>Cada detalle importa mucho</h3><p>Hecho de plásticos y metal ABS superiores, Inspiroy Dial se distingue por su diseño estético exclusivo y mano de obra exquisita. Además, el área activa de 10.5 x 6.5 pulgadas le garantiza un gran lienzo para expresar la creatividad.</p><h3>Indicadores LED multi propósito</h3><p>Hay una luz LED integrada en las ocho teclas de presión que puede indicar la energía en tiempo real. Cuando enciende la tableta digitalizadora. se encenderán 8 luces LED, una tras otra, mientras que las luces se apagarán posteriormente si apaga la tableta digitalizadora</p>', 1, 29000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-dial-q620m-pen-tablet-011-625ddee44c7394fbb015949228919358-640-0.jpg'),
(8, 'INSPIROY KEYDIAL KD200', '<h3>La clave es la productividad</h3><p>Inspiroy Keydial KD200 es la primera tableta gráfica en la industria que combina una tableta gráfica y un teclado, además del controlador de marcación y 5 teclas programables, que pueden mejorar efectivamente su productividad. También es compatible con la conexión inalámbrica Bluetooth 5.0 y la carga rápida, para que su trabajo sea más conveniente.</p><h3>La combinación mágica de teclado y Pen Tablet</h3><p>Siguiendo las preferencias de los artistas, agregamos 23 teclas estándar en la tableta gráfica, para mejorar la productividad y ahorrar su espacio de trabajo, que tiene como objetivo romper los estereotipos del dibujo digital. Además, el reposa muñeca ergonómico puede minimizar eficazmente la fatiga después de un uso prolongado.</p>', 1, 29000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-keydial-kd200-main-21-4d6d17894aa3f406f216276726497878-640-0.jpg'),
(9, 'KAMVAS PRO 13 (2.5K)', '<h3>Nueva apariencia con mayor calidad</h3><p>El nuevo Kamvas Pro 13 (2.5K) posee la misma parte posterior de aluminio texturizado, vidrio grabajo antideslumbrante y laminación completa que su predecesor: Kamvas Pro 13. Además, la resolución más alta de 2.5K y la tecnología QLED le dan una nueva definición. Kamvas pro 13 te permite sumergirte profundamente en diferentes áreas del arte, como diseño, photoshop, modelado 3D, etc.</p>', 2, 150000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/huion-kamvas-pro-13-2-5k-011-0e96801fef028e8f4e16490829939018-640-0.jpg'),
(10, 'KAMVAS PRO 24 (4K)', '<h3>Simplemente poderosa</h3><p>Kamvas Pro 24 (4K) es un monitor interactivo insignia de acercamiento / alejamiento del lienzo y cambiar entre diferentes ventanas para mejorar en gran medida su productividad. Además, se presenta con 4K de resolución, pantalla QLED, función HDR y muchas otras características para garantizar que los artistas profesionales puedan sumergirse fácilmente en la creación.</p>', 2, 500000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-pro-24-4k-pen-display-011-ecef5464a3c3ec61e116390700523651-640-0.jpg');

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
