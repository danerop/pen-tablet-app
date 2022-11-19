DROP schema IF EXISTS `pentablet`;

CREATE schema pentablet;

USE pentablet;


-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-11-2022 a las 02:52:09
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

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `usuario`, `totalPagado`, `fecha`) VALUES
(3, 'mlvxCj6gN8aiEaazawBsuOsNcjF3', NULL, '2022-11-17 00:40:25');

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
(1, 'HUION HS64', '<h5>Estilo minimalista</h5> <p>La tableta HS64 de 8 milímetros de grosor está diseñada en un estilo minimalista con puntos estrellados en la superficie, donde se combinan la funcionalidad y la simplicidad.</p><h5>La mejor experiencia de dibujo</h5> <p>La sensibilidad a la presión mejorada cuenta con 8192 niveles, haciendo que el movimiento y la presión aplicados al lápiz sean más precisos y tengan un mejor rendimiento.</p><h5>Un gran margen de compatibilidad</h5> <p>Se admiten las conexiones con dispositivos de computadora y android 6.0 (o superior) (el dispositivo debe ser compatible con USB OTG). Se admite la operación en Windows, macOS y Android, con varios programas de dibujo y diseño estándar compatibles.</p>', 1, 14000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/huion-hs64-pen-tablet-011-96d426e48d4605b89716008966178343-640-0.jpg'),
(2, 'INSPIROY H640P (8192)', '<h5>Vive joven en la creatividad</h5><p>Última generación de tecnología electromecánica pasiva, apoyando continuamente el desencadenamiento de inspiraciones creativas.</p><h5>Vive joven con la más alta eficiencia</h5><p>Entre sus teclas de acceso directo, la de encendido y apagado, ayuda a evitar el tacto innecesario o accidental de otras teclas de acceso directo.</p><h5>Vive joven en confianza e inclusividad</h5><p>Compatible con sistemas convencionales tales como Windows y macOS, lo que permite la operación libre en variados softwares de dibujo y diseño convencionales.</p>', 1, 15000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-h640p-pen-tablet-0111-91de5344c00380171d16008971196118-640-0.jpg'),
(3, 'KAMVAS 13', '<h5>Bolígrafo Kamvas 13, un as en accesibilidad</h5><p>Conexión más fácil, mejor conveniencia y superior eficiencia.</p><h5>Suficientemente ligero para mejor conveniencia</h5><p>Kamvas 13 es ultra delgado. Tiene un grosor de solo 11.2 mm y pesa solo 980 g, que lo convierte en un monitor interactivo fácil de transportar para dibujar al aire libre.</p><h5>Enciéndalo con un cable USB</h5><p>El diseño de bajo consumo de energía permite que Kamvas 13 sea alimentado por una computadora portátil directamente. Para encender el monitor interactivo, los usuarios solo necesitan conectar Kamvas 13 a una computadora portátil que funcione con 5 voltios o más a través de un cable USB.</p>', 2, 77000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-13-pen-display-011-3999c9f5a34577e5d615917079734323-640-0.jpg'),
(4, 'INSPIROY H1060P', '<h5>Para desencadenar un avance en la creación</h5><p>Los niveles de sensibilidad a la presión de 8192 ayudan a llevar su creación a una nueva altura, ya que cada entrada de línea se procesa de manera más delicada y con mayor precisión.</p><h5>Presentación suave y precisa del trazo del lápiz</h5><p>La tasa de informe de 220PPS garantiza una respuesta instantánea con un retraso mínimo y una mayor precisión en el dibujo. De esta manera logrará un gran avance en sus dibujos, ya que el rendimiento de la tableta se optimizará constantemente.</p><h5>Delicadeza desplegada en píxeles</h5><p>Las líneas creadas por su lápiz se pueden capturar con precisión con la ayuda de la resolución del lápiz 5080LPI y, por lo tanto, una presentación realista en la pantalla puede incluso revelar la delicadeza de cada píxel.</p>', 1, 26000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-h1060p-pen-tablet-011-8ec923882cef5cf96216334550090623-640-0.jpg'),
(5, 'KAMVAS 22 PLUS', '<h5>Millones de colores brillan delante de tus ojos</h5><p>Con la tecnología de puntos cuánticos, la gama de colores de Kamvas 22 Plus alcanza el 140% de sRGB y la relación de contraste llega a 1200: 1, lo que ayuda a aumentar la profundidad de color de su trabajo. Además, los usuarios también pueden disfrutar de una impresionante presentación de imágenes en esta pantalla de 21,5 pulgadas, ya que se pueden mostrar 16,7 millones de colores de forma natural y vívida.</p><h5>Una pantalla low blue de baja luz azul protegerá tus ojos</h5><p>La pantalla equipada con la avanzada tecnología de puntos cuánticos puede filtrar eficazmente la luz azul que es dañina para los ojos, lo que protege en gran medida a los usuarios de la fatiga visual digital.</p>', 2, 200000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-22-kamvas-22-plus-pen-display-011-265c04721c3da96f7d16009636423800-640-0.jpg'),
(6, 'KAMVAS PRO 20', '<h5>Experiencia de dibujo inmersivo traída por colores preciosos</h5><p>Intente sumergirse en el dibujo o el diseño con Kamvas Pro 20 (2019) que cuenta con 120% sRGB en gama de colores y 16,7 millones de colores, lo que llevará la calidad de sus obras a una nueva altura.</p><h5>Cada detalle se muestra animado</h5><p>Haga que su dibujo o diseño se muestre completamente en la pantalla IPS de 19.5 pulgadas que cuenta con resoluciones de 1920 x 1080, con cada detalle para ser renderizado en vivo. Además, el ángulo de visión de 178° de la pantalla puede garantizar aún más la calidad de la imágen.</p>', 2, 210000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-pro-20-2019-pen-display-011-7fd1aae5c210e07fe616321790281305-640-0.jpg'),
(7, 'INSPIROY DIAL Q620', '<h5>Posibilidades ilimitadas</h5><p>Realice un trabajo mas fácil con Dial Controller. Diseño creativo que despertará tu próxima gran idea.</p><h5>Cada detalle importa mucho</h5><p>Hecho de plásticos y metal ABS superiores, Inspiroy Dial se distingue por su diseño estético exclusivo y mano de obra exquisita. Además, el área activa de 10.5 x 6.5 pulgadas le garantiza un gran lienzo para expresar la creatividad.</p><h5>Indicadores LED multi propósito</h5><p>Hay una luz LED integrada en las ocho teclas de presión que puede indicar la energía en tiempo real. Cuando enciende la tableta digitalizadora. se encenderán 8 luces LED, una tras otra, mientras que las luces se apagarán posteriormente si apaga la tableta digitalizadora</p>', 1, 29000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-dial-q620m-pen-tablet-011-625ddee44c7394fbb015949228919358-640-0.jpg'),
(8, 'INSPIROY KEYDIAL KD200', '<h5>La clave es la productividad</h5><p>Inspiroy Keydial KD200 es la primera tableta gráfica en la industria que combina una tableta gráfica y un teclado, además del controlador de marcación y 5 teclas programables, que pueden mejorar efectivamente su productividad. También es compatible con la conexión inalámbrica Bluetooth 5.0 y la carga rápida, para que su trabajo sea más conveniente.</p><h5>La combinación mágica de teclado y Pen Tablet</h5><p>Siguiendo las preferencias de los artistas, agregamos 23 teclas estándar en la tableta gráfica, para mejorar la productividad y ahorrar su espacio de trabajo, que tiene como objetivo romper los estereotipos del dibujo digital. Además, el reposa muñeca ergonómico puede minimizar eficazmente la fatiga después de un uso prolongado.</p>', 1, 29000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-keydial-kd200-main-21-4d6d17894aa3f406f216276726497878-640-0.jpg'),
(9, 'KAMVAS PRO 13 (2.5K)', '<h5>Nueva apariencia con mayor calidad</h5><p>El nuevo Kamvas Pro 13 (2.5K) posee la misma parte posterior de aluminio texturizado, vidrio grabajo antideslumbrante y laminación completa que su predecesor: Kamvas Pro 13. Además, la resolución más alta de 2.5K y la tecnología QLED le dan una nueva definición. Kamvas pro 13 te permite sumergirte profundamente en diferentes áreas del arte, como diseño, photoshop, modelado 3D, etc.</p><h5>Aclarar la pantalla en un monitor interactivo</h5><p>Puede usar Kamvas Pro 13 (2.5K) como monitor interactivo para modelar, pintar o editar directamente en la pantalla</p>', 2, 150000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/huion-kamvas-pro-13-2-5k-011-0e96801fef028e8f4e16490829939018-640-0.jpg'),
(10, 'KAMVAS PRO 24 (4K)', '<h5>Simplemente poderosa</h5><p>Kamvas Pro 24 (4K) es un monitor interactivo insignia de acercamiento / alejamiento del lienzo y cambiar entre diferentes ventanas para mejorar en gran medida su productividad. Además, se presenta con 4K de resolución, pantalla QLED, función HDR y muchas otras características para garantizar que los artistas profesionales puedan sumergirse fácilmente en la creación.</p><h5>Enfóquese en una calidad de imagen brillante con HDR</h5><p>Es el primer monitor interactivo que adopta la tecnología HDR en la industria. Puede abrir la función HDR para disfrutar de un color más rico, un contraste más profundo y un brillo más alto, a fin de ofrecer una obra de arte dinámica y realista que resalte</p>', 2, 500000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/kamvas-pro-24-4k-pen-display-011-ecef5464a3c3ec61e116390700523651-640-0.jpg'),
(11, 'INSPIROY H420X', '<h5>No solo con experiencia en dibujo</h5><p>Suave, rápido y portátil. Inspiroy H420X tiene una alta tasa de informes y un nivel de sensibilidad a la presión que le permite no solo disfrutar dibujando sino también sumergirse en el juego OSU. Además, es compatible con varios sistemas operativos para satisfacer diversas demandas, como aprendisaje en línea, toma de notas y dibujo al aire libre</p><h5>Fácil de cargar, conveniente de usar</h5><p>Con solo 105g de peso y 7 mm de grosor, la Inspiroy H420X ofrece una gran portabilidad. Puede llevarlo a cualquier parte.</p>', 1, 9000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/huion-inspiroy-h420x-11-2e7731a26f68719e9216420862010521-640-0.jpg'),
(12, 'HUION G920S WIRELESS', '<h5>Huion G920S Touch Inalambrica</h5><p>Bisel ultra estrecho. La primera tableta digital de la industria con un diseño de bisel ultra estrecho puede ahorrar espacio adicional.</p><h5>Especificaciones Técnicas</h5><p>Color: Negro\nDimensión: 374 x 177 x 9mm<br>\nPeso Neto: 650g<br>\nTeclas Presionables: 16 Teclas Programables<br>\nEspacio de trabajo: 99.3 x 158.8mm<br>\nLápiz digital: PW500<br>\nTecnología de lápiz: Lápiz sin Batería (EMR)<br>\nResolución del lápiz: 5080 LPI<br>\nSensibilidad a la presión: 8192 Niveles<br>\nExactitud: ±0.3 mm<br>\nAltura de detección: 10 mm<br>\nTasa de informe: 266 PPS<br>\nInterface: Micro USB</p>', 1, 22000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/huion-inspiroy-h610x-11-aa21cad270a7f2c26216474483740024-640-0.jpg'),
(13, 'INSPIROY RTM-500', '<h5>Estéticamente agradable pero más práctica</h5><p>La hoja de textura no solo hace que los productos se vean más a la moda, sino que también tiene una función antihuellas, que permite la experiencia de dibujo con lápiz sobre papel. También puede ayudar a controlar los movimientos precios del puntero con mayor facilidad</p><h5>Da rienda suelta a tu creatividad en Android</h5><p>Puedes conectar fácilmente la tableta RTM-500 a sus dispositivos Android, a través de adaptador OTG, que te permite disfrutar del dibujo al aire libre.</p>', 1, 18000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/inspiroy-rtm-500-pen-tablet-11-143ba8fa46ea25e92516317334426276-640-0.jpg'),
(14, 'KAMVAS 24 PLUS', '<h5>Simple, pero poderosa</h5><p>Mayor tamaño, mayor resolución y productividad sin cambios</p><h5>Capture todos los detalles en la pantalla QHD</h5><p>Con la resolución QHD (2560x1440) y la pantalla de 23,8 pulgadas, Kamvas 24 Plus presentan imágenes más claras y detalladas frente a sus ojos. También le proporciona un espacio de trabajo más grande para ayudar a sumergirse en su creación.</p><h5>No olvide el puerto USB súper práctico</h5><p>Kamvas 24 y Kamvas 24 Plus están equipados con un puerto USB que le permite conectar fácilmente todos sus periféricos sin tener que pasar mucho por debajo de su escritorio o detrás de su computadora.</p>', 2, 520000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/k24-plus1-92b9f6200f998c5f1416420870114657-640-0.jpg'),
(15, 'KAMVAS 24 SERIES', '<h5>Apota más colores a tus obras de arte</h5><p>Al igual que otros motitores interactivos Kamvas, Kamvas 24 tiene una gama de colores sRGB del 120%, lo que aporta más color a su trabajo y hace que la imagen sea más vibrante. Además, la versión Plus adopta la tecnología Quantum Dots líder en la industria para lograr una gama de colores ultra amplia de 140% sRGB. Combinando la resolución QHD y el acabado de superficie perfecto, puede obtener una excelente experiencia visual.</p><h5>Disfrute de la estabilidad con PenTech 3.0</h5><p>Con la última tecnología de bolígrafo PenTech 3.0, el bolígrafo sin batería PW517 proporciona una mejor estabilidad con una punta de lápiz en una posición más baja para brindarle una experiencia de dibujo realista. También admite la función de inclinación de 60° y 8192 niveles de sensibilidad a la presión.</p>', 2, 320000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/k241-8ba919e8bdde133e9d16390702814491-640-0.jpg'),
(16, 'KAMVAS PRO 16 2.5K', '<h5>Nueva apariencia con mayor calidad</h5><p>El nuevo Kamvas Pro 16 (2.5K) posee la misma parte posterior de aluminio texturizado, vidrio grabado antideslumbrante y laminación completa que su predecesor: Kamvas Pro 16. Además, la resolución más alta de 2.5K y la tecnología QLED le dieron una nueva definición. Kamvas Pro 16 te permite sumergirte profundamente en diferentes áreas del arte, como diseño, photoshop, modelado 3D, etc.</p><h5>Visión más clara, crea más ideas</h5><p>La resolución mejorada de 2.5K QHD (2560x1440) le permite ver más detalles en su impresionante pantalla de 15,8\", puede alcanzar los 186 PPI (pixeles por pulgada), lo que duplica los detalles para mejorar su visión y su experiencia personal</p>', 2, 230000, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/363/products/huion-kamvas-pro-16-2-5k-011-3f973c6b73e190416f16587646821073-640-0.jpg');

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
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`uid`, `nombre`, `apellido`, `direccion`, `email`) VALUES
('mlvxCj6gN8aiEaazawBsuOsNcjF3', 'Arami', 'Aquino', 'DIRECCION 1', 'jannett.aquino2106@gmail.com');

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
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
