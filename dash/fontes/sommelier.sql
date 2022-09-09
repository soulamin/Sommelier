-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Set-2022 às 03:34
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sommelier`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `dash_acesso`
--

CREATE TABLE `dash_acesso` (
  `id` int(11) NOT NULL,
  `ativacao` varchar(1) NOT NULL,
  `dt/hr` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `dash_acesso`
--

INSERT INTO `dash_acesso` (`id`, `ativacao`, `dt/hr`) VALUES
(4, 'q', '2022-09-08 12:26:04'),
(5, 'q', '2022-09-08 12:45:27'),
(6, 'q', '2022-09-08 12:47:42'),
(7, 'l', '2022-09-08 12:55:30'),
(8, 'l', '2022-09-08 12:55:54'),
(9, 'q', '2022-09-08 13:01:42'),
(10, 'q', '2022-09-08 15:42:35'),
(11, 'l', '2022-09-08 15:43:23'),
(12, 'q', '2022-09-08 15:43:58'),
(13, 'q', '2022-09-08 15:48:28'),
(14, 'q', '2022-09-08 15:57:52'),
(15, 'q', '2022-09-08 15:59:00'),
(16, 'q', '2022-09-08 16:00:12'),
(17, 'q', '2022-09-08 16:01:26'),
(18, 'q', '2022-09-08 16:41:26'),
(19, 'q', '2022-09-08 16:42:02'),
(20, 'q', '2022-09-08 16:42:10'),
(21, 'q', '2022-09-08 16:43:34'),
(22, 'q', '2022-09-08 16:44:21'),
(23, 'q', '2022-09-08 17:01:42'),
(24, 'l', '2022-09-08 17:01:45'),
(25, 'q', '2022-09-08 17:02:53'),
(26, 'q', '2022-09-08 17:03:28'),
(27, 'q', '2022-09-08 17:04:36'),
(28, 'q', '2022-09-08 17:13:46'),
(29, 'q', '2022-09-08 17:25:30'),
(30, 'q', '2022-09-08 17:28:02'),
(31, 'q', '2022-09-08 17:31:32'),
(32, 'q', '2022-09-08 19:41:20'),
(33, 'q', '2022-09-08 19:41:47'),
(34, 'q', '2022-09-08 19:55:40');

-- --------------------------------------------------------

--
-- Estrutura da tabela `dash_pergunta`
--

CREATE TABLE `dash_pergunta` (
  `id` int(11) NOT NULL,
  `tipo` varchar(150) NOT NULL,
  `datahr` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `dash_pergunta`
--

INSERT INTO `dash_pergunta` (`id`, `tipo`, `datahr`) VALUES
(1, 'Trade Marketing', '2022-09-08 13:01:44'),
(2, 'Residencial', '2022-09-08 15:49:06'),
(3, 'Destacar o PDV - Efeito WoW', '2022-09-08 16:01:29'),
(4, 'Destacar o PDV - Efeito WoW', '2022-09-08 16:41:40'),
(5, 'Informativo', '2022-09-08 16:42:04'),
(6, 'Residencial', '2022-09-08 16:42:14'),
(7, 'Destacar o PDV - Efeito WoW', '2022-09-08 16:43:54'),
(8, 'Destacar o PDV - Efeito WoW', '2022-09-08 16:44:26'),
(9, 'Menu Board', '2022-09-08 17:04:38'),
(10, 'Informativo', '2022-09-08 17:13:49'),
(11, 'Menu Board', '2022-09-08 17:25:34'),
(12, 'Destacar o PDV - Efeito WoW', '2022-09-08 17:28:04'),
(13, 'Trade Marketing', '2022-09-08 17:31:34'),
(14, 'Trade Marketing', '2022-09-08 19:41:23'),
(15, 'Informativo', '2022-09-08 19:41:36'),
(16, 'Publicidade', '2022-09-08 19:41:50'),
(17, 'Residencial', '2022-09-08 19:42:45'),
(18, 'Informativo', '2022-09-08 19:43:15'),
(19, 'Informativo', '2022-09-08 19:43:25'),
(20, 'Trade Marketing', '2022-09-08 19:55:43'),
(21, 'Destacar o PDV - Efeito WoW', '2022-09-08 19:55:50');

-- --------------------------------------------------------

--
-- Estrutura da tabela `dash_produto`
--

CREATE TABLE `dash_produto` (
  `id` int(11) NOT NULL,
  `produto` varchar(150) NOT NULL,
  `datahr` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `dash_produto`
--

INSERT INTO `dash_produto` (`id`, `produto`, `datahr`) VALUES
(1, 'THE RETAIL', '2022-09-08 17:31:36'),
(2, 'THE RETAIL', '2022-09-08 19:41:25'),
(3, 'The Display', '2022-09-08 19:42:24'),
(4, 'THE OUT', '2022-09-08 19:42:48'),
(5, 'THE OUT', '2022-09-08 19:43:21'),
(6, 'THE OUT', '2022-09-08 19:56:10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `local`
--

CREATE TABLE `local` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `local`
--

INSERT INTO `local` (`id`, `name`, `slug`) VALUES
(236, 'The Led', 'the-led');

-- --------------------------------------------------------

--
-- Estrutura da tabela `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vinho_escolhido` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `perguntas` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `send_wordpress` tinyint(1) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `unidade` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `log`
--

INSERT INTO `log` (`id`, `tipo`, `vinho_escolhido`, `perguntas`, `send_wordpress`, `created_at`, `unidade`) VALUES
(24, 'perguntas', 'CDS VH AR TT  GRA RES MALB 750ML', '[{\"pergunta\":\"Para qual ocasião<strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Para celebrar\"},{\"pergunta\":\"Qual o tipo de vinho <strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Tinto\"},{\"pergunta\":\"Tem em mente gastar <strong class=\\\"text-secondary\\\">quanto em seu vinho?</strong>\",\"opcaoSelecionada\":\"R$ 10,00 a R$ 50,00\"},{\"pergunta\":\"Para acompanhar <strong class=\\\"text-secondary\\\">um prato...</strong>\",\"opcaoSelecionada\":\"Carne de vaca\"},{\"pergunta\":\"Por país <strong class=\\\"text-secondary\\\">de origem</strong>\",\"opcaoSelecionada\":\"Argentina\"}]', 1, '2021-12-28 01:07:29.223', 'loja-1203-iguatemi'),
(25, 'pesquisa', 'VH POR ROSE PONTE DA BARCA 750ML', NULL, 1, '2021-12-28 01:15:49.389', 'loja-1203-iguatemi'),
(26, 'perguntas', 'CDS VH AR TT  GRA RES MALB 750ML', '[{\"pergunta\":\"Para qual ocasião<strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Para celebrar\"},{\"pergunta\":\"Qual o tipo de vinho <strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Tinto\"},{\"pergunta\":\"Tem em mente gastar <strong class=\\\"text-secondary\\\">quanto em seu vinho?</strong>\",\"opcaoSelecionada\":\"R$ 10,00 a R$ 50,00\"},{\"pergunta\":\"Para acompanhar <strong class=\\\"text-secondary\\\">um prato...</strong>\",\"opcaoSelecionada\":\"Carne de vaca\"},{\"pergunta\":\"Por país <strong class=\\\"text-secondary\\\">de origem</strong>\",\"opcaoSelecionada\":\"Argentina\"}]', 1, '2022-01-04 21:29:39.344', 'loja-1203-iguatemi'),
(27, 'perguntas', 'CDS VH AR TT  GRA RES MALB 750ML', '[{\"pergunta\":\"Para qual ocasião<strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Para celebrar\"},{\"pergunta\":\"Qual o tipo de vinho <strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Tinto\"},{\"pergunta\":\"Tem em mente gastar <strong class=\\\"text-secondary\\\">quanto em seu vinho?</strong>\",\"opcaoSelecionada\":\"R$ 10,00 a R$ 50,00\"},{\"pergunta\":\"Para acompanhar <strong class=\\\"text-secondary\\\">um prato...</strong>\",\"opcaoSelecionada\":\"Carne de vaca\"},{\"pergunta\":\"Por país <strong class=\\\"text-secondary\\\">de origem</strong>\",\"opcaoSelecionada\":\"Argentina\"}]', 1, '2022-01-04 21:30:52.886', 'loja-1203-iguatemi'),
(28, 'perguntas', 'CDS VH AR TT  GRA RES MALB 750ML', '[{\"pergunta\":\"Para qual ocasião<strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Para celebrar\"},{\"pergunta\":\"Qual o tipo de vinho <strong class=\\\"text-secondary\\\">você está buscando...</strong>\",\"opcaoSelecionada\":\"Tinto\"},{\"pergunta\":\"Tem em mente gastar <strong class=\\\"text-secondary\\\">quanto em seu vinho?</strong>\",\"opcaoSelecionada\":\"R$ 10,00 a R$ 50,00\"},{\"pergunta\":\"Para acompanhar <strong class=\\\"text-secondary\\\">um prato...</strong>\",\"opcaoSelecionada\":\"Carne de vaca\"},{\"pergunta\":\"Por país <strong class=\\\"text-secondary\\\">de origem</strong>\",\"opcaoSelecionada\":\"Argentina\"}]', 1, '2022-01-04 21:32:14.385', 'loja-1203-iguatemi'),
(29, 'perguntas', 'CDS VH ARG TT  MALBEC 375ML', NULL, 1, '2022-02-17 10:34:56.829', 'loja-1203-iguatemi'),
(30, 'perguntas', 'CDS VH CHI BCO SAUV BLAN  750ML', NULL, 1, '2022-02-21 01:44:16.095', 'loja-1203-iguatemi'),
(31, 'perguntas', 'CDS VH FRA BCO BORDEAUX  750ML', NULL, 1, '2022-02-22 03:19:38.975', 'loja-1203-iguatemi'),
(32, 'pesquisa', 'Vinho Português Tinto Doce Sweet Red Casal Garcia Vinhão Touriga Nacional Azal Tinto Vinho Verde Garrafa 750ml', NULL, 1, '2022-08-21 18:00:17.030', 'loja-1203-iguatemi'),
(33, 'pesquisa', 'Vinho chileno tinto Santa Rita 120 varietal 750 ml', NULL, 1, '2022-08-21 19:41:14.961', 'loja-1203-iguatemi'),
(34, 'perguntas', 'VH PAULA RSV 750ML', NULL, 1, '2022-08-24 17:11:37.980', 'loja-1302-brigadeiro'),
(35, 'perguntas', 'Vinho Chileno Branco Seco Reserva Oveja Negra Chardonnay Viognier Valle del Maule Garrafa 750ml', NULL, 1, '2022-08-29 20:33:32.397', 'loja-1302-brigadeiro'),
(36, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 20:37:10.230', 'loja-1302-brigadeiro'),
(37, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 20:38:44.711', 'loja-1302-brigadeiro'),
(38, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:06:15.455', 'loja-1302-brigadeiro'),
(39, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:13:33.262', 'loja-1302-brigadeiro'),
(40, 'perguntas', 'Vinho chileno tinto Medalla Real carménère 750 ml', NULL, 1, '2022-08-29 21:15:25.213', 'loja-1302-brigadeiro'),
(41, 'perguntas', 'Vinho Brasileiro Tinto Seco Pizzato Fausto Cabernet Sauvignon Serra Gaúcha Garrafa 750ml', NULL, 1, '2022-08-29 21:20:49.971', 'loja-1302-brigadeiro'),
(42, 'perguntas', 'Mp Vh Esp Bco Cds Xarello 750ml', NULL, 1, '2022-08-29 21:22:13.746', 'loja-1302-brigadeiro'),
(43, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:22:28.846', 'loja-1302-brigadeiro'),
(44, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:24:38.549', 'loja-1302-brigadeiro'),
(45, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:25:55.240', 'loja-1302-brigadeiro'),
(46, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:26:06.651', 'loja-1302-brigadeiro'),
(47, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:27:23.743', 'loja-1302-brigadeiro'),
(48, 'perguntas', 'Vinho Brasileiro Tinto Seco Pizzato Fausto Cabernet Sauvignon Serra Gaúcha Garrafa 750ml', NULL, 1, '2022-08-29 21:28:47.408', 'loja-1302-brigadeiro'),
(49, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:35:54.460', 'loja-1302-brigadeiro'),
(50, 'perguntas', 'VH C PERINI BL 750ML', NULL, 1, '2022-08-29 21:36:27.640', 'loja-1302-brigadeiro'),
(51, 'perguntas', 'Vinho português tinto Club des Sommeliers Douro 750 ml', NULL, 1, '2022-08-29 21:36:51.895', 'loja-1302-brigadeiro'),
(52, 'perguntas', 'Vinho portugues branco Alandra - 750 ml', NULL, 1, '2022-08-29 21:47:26.476', 'loja-1302-brigadeiro'),
(53, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-29 21:47:40.286', 'loja-1302-brigadeiro'),
(54, 'perguntas', 'Vinho Brasileiro Tinto Seco Vivant Cabernet Sauvignon Merlot Lata 269ml', NULL, 1, '2022-08-30 11:36:44.853', 'loja-1302-brigadeiro'),
(55, 'perguntas', 'Vinho Brasileiro Tinto Seco Vivant Cabernet Sauvignon Merlot Lata 269ml', NULL, 1, '2022-08-30 11:38:49.935', 'loja-1302-brigadeiro'),
(56, 'perguntas', 'Vinho tinto Aurora Reserva cabernet sauvignon - 750 ml', NULL, 1, '2022-08-30 11:39:03.951', 'loja-1302-brigadeiro'),
(57, 'perguntas', 'Vinho Brasileiro Tinto MIOLO Reserva Cabernet Sauvignon Garrafa 750ml', NULL, 1, '2022-08-30 11:40:40.828', 'loja-1302-brigadeiro'),
(58, 'perguntas', 'Vinho tinto Aurora Reserva cabernet sauvignon - 750 ml', NULL, 1, '2022-08-30 15:20:53.785', 'loja-1302-brigadeiro'),
(59, 'perguntas', 'Vinho tinto Aurora Reserva Tannat - 750 ml', NULL, 1, '2022-08-30 15:40:50.761', 'loja-1302-brigadeiro'),
(60, 'perguntas', 'Vinho tinto Aurora Varietal pinot noir - 750 ml', NULL, 1, '2022-08-30 18:33:56.545', 'loja-1302-brigadeiro'),
(61, 'perguntas', 'THE OUT', NULL, 1, '2022-09-08 01:09:51.934', 'the-led'),
(62, 'pesquisa', 'THE WALL', NULL, 1, '2022-09-08 01:16:29.280', 'the-led'),
(63, 'perguntas', 'THE OUT', NULL, 1, '2022-09-08 01:22:51.481', 'the-led'),
(64, 'perguntas', 'THE WALL', NULL, 1, '2022-09-08 01:25:59.912', 'the-led'),
(65, 'perguntas', 'THE WALL', NULL, 1, '2022-09-08 01:26:22.087', 'the-led');

-- --------------------------------------------------------

--
-- Estrutura da tabela `opcao`
--

CREATE TABLE `opcao` (
  `id` int(11) NOT NULL,
  `titulo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `perguntaId` int(11) NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `opcao`
--

INSERT INTO `opcao` (`id`, `titulo`, `tipo`, `image`, `perguntaId`, `slug`) VALUES
(10298, 'Indoor com comunicação para o lado externo', 'Padrão', NULL, 1566, 'the-out%the-wall%the-retail'),
(10299, 'Indoor com comunicação para o lado interno', 'Padrão', NULL, 1566, 'the-retail%the-in%the-wall%the-megabanner%the-display'),
(10300, 'Outdoor exposto a variações climáticas', 'Padrão', NULL, 1566, 'the-out'),
(10301, 'Outdoor com cobertura e sem exposição ao clima', 'Padrão', NULL, 1566, 'the-out%the-wall'),
(10302, 'Indoor com comunicação para o lado externo', 'Padrão', NULL, 1567, 'the-out%the-wall%the-retail'),
(10303, 'Indoor com comunicação para o lado interno', 'Padrão', NULL, 1567, 'the-retail%the-in%the-wall%the-megabanner%the-display'),
(10304, 'Outdoor exposto a variações climáticas', 'Padrão', NULL, 1567, 'the-out'),
(10305, 'Outdoor com cobertura e sem exposição ao clima', 'Padrão', NULL, 1567, 'the-out%the-wall'),
(10306, 'Indoor com comunicação para o lado externo', 'Padrão', NULL, 1568, 'the-out%the-wall%the-retail'),
(10307, 'Indoor com comunicação para o lado interno', 'Padrão', NULL, 1568, 'the-retail%the-in%the-wall%the-megabanner%the-display'),
(10308, 'Outdoor exposto a variações climáticas', 'Padrão', NULL, 1568, 'the-out'),
(10309, 'Outdoor com cobertura e sem exposição ao clima', 'Padrão', NULL, 1568, 'the-out%the-wall'),
(10310, 'Indoor com comunicação para o lado externo', 'Padrão', NULL, 1570, 'the-out%the-wall%the-retail'),
(10311, 'Indoor com comunicação para o lado interno', 'Padrão', NULL, 1570, 'the-retail%the-in%the-wall%the-megabanner%the-display'),
(10312, 'Outdoor exposto a variações climáticas', 'Padrão', NULL, 1570, 'the-out'),
(10313, 'Outdoor com cobertura e sem exposição ao clima', 'Padrão', NULL, 1570, 'the-out%the-wall'),
(10314, 'Indoor com comunicação para o lado externo', 'Padrão', NULL, 1571, 'the-out%the-wall%the-retail'),
(10315, 'Indoor com comunicação para o lado interno', 'Padrão', NULL, 1571, 'the-retail%the-in%the-wall%the-megabanner%the-display'),
(10316, 'Outdoor exposto a variações climáticas', 'Padrão', NULL, 1571, 'the-out'),
(10317, 'Outdoor com cobertura e sem exposição ao clima', 'Padrão', NULL, 1571, 'the-out%the-wall'),
(10318, 'Indoor com comunicação para o lado externo', 'Padrão', NULL, 1569, 'the-out%the-wall%the-retail'),
(10319, 'Indoor com comunicação para o lado interno', 'Padrão', NULL, 1569, 'the-retail%the-in%the-wall%the-megabanner%the-display'),
(10320, 'Outdoor exposto a variações climáticas', 'Padrão', NULL, 1569, 'the-out'),
(10321, 'Outdoor com cobertura e sem exposição ao clima', 'Padrão', NULL, 1569, 'the-out%the-wall');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pergunta`
--

CREATE TABLE `pergunta` (
  `id` int(11) NOT NULL,
  `titulo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageFooter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `perguntaFooter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int(11) NOT NULL,
  `rotaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `pergunta`
--

INSERT INTO `pergunta` (`id`, `titulo`, `imageFooter`, `perguntaFooter`, `order`, `rotaId`) VALUES
(1566, 'Como é o seu <strong class=\"text-primary\">ambiente... </strong>', NULL, NULL, 0, 343),
(1567, 'Como é o seu <strong class=\"text-primary\">ambiente... </strong>', NULL, NULL, 0, 344),
(1568, 'Como é o seu <strong class=\"text-primary\">ambiente... </strong>', NULL, NULL, 0, 345),
(1569, 'Como é o seu <strong class=\"text-primary\">ambiente... </strong>', NULL, NULL, 0, 346),
(1570, 'Como é o seu <strong class=\"text-primary\">ambiente... </strong>', NULL, NULL, 0, 347),
(1571, 'Como é o seu <strong class=\"text-primary\">ambiente... </strong>', NULL, NULL, 0, 348);

-- --------------------------------------------------------

--
-- Estrutura da tabela `primeirapagina`
--

CREATE TABLE `primeirapagina` (
  `id` int(11) NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `texto1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `texto2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `primeirapagina`
--

INSERT INTO `primeirapagina` (`id`, `logo`, `texto1`, `texto2`, `banner`) VALUES
(291, 'http://localhost:3000//sommelier/imagens/logo_png.png', 'Sou o seu', 'Consultor Digital THE LED', 'http://localhost:3000//sommelier/imagens/banner.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `titulo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descricao` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `preco_promocional` double DEFAULT NULL,
  `corredor` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `setor` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temperatura` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `caracteristicas_visuais` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `teor_alcoolico` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `volume` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagem` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pais` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tags` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `titulo`, `descricao`, `preco`, `preco_promocional`, `corredor`, `setor`, `temperatura`, `caracteristicas_visuais`, `teor_alcoolico`, `volume`, `imagem`, `tipo`, `pais`, `tags`) VALUES
(115392, 'THE RETAIL', '', NULL, NULL, '', '', 'de 2.5 mm até 3.9mm', '600 nits', 'Frontal', '7.8 kg', 'http://localhost:3000//sommelier/imagens/The-RETAIL_PRODUTO.jpg', 'The Retail', NULL, 'todos  the-retail'),
(115393, 'THE MEGABANNER', '', NULL, NULL, '', '', 'de 1.9 mm até 3.9mm', 'de 800 nits até 900 nits', 'Frontal', '9 kg', 'http://localhost:3000//sommelier/imagens/The-MEGABANNER_PRODUTO.jpg', 'The Mega Banner', NULL, 'todos  the-megabanner'),
(115394, 'TheTV', '', NULL, NULL, '', '', 'de 0.9 mm até 1.9mm', 'de 600 até 800 nits', 'Frontal', 'de 6.8 kg até 7kg', 'http://localhost:3000//sommelier/imagens/TheTV_PRODUTO.jpg', 'TheTV', NULL, 'todos  thetv'),
(115395, 'THE WALL', '', NULL, NULL, '', '', 'de 1.9 mm até 3.9mm', 'de 800 nits até 900 nits', 'Frontal', 'de 4 kg até 6.3 kg', 'http://localhost:3000//sommelier/imagens/TheWall.png', 'The Wall', NULL, 'todos  the-wall'),
(115396, 'The Display', '', NULL, NULL, '', '', '1.66 mm', '700 nits', 'Traseira', '1,5 kg', 'http://localhost:3000//sommelier/imagens/The-DISPLAY_PRODUTO.jpg', 'The Display', NULL, 'todos  the-display'),
(115397, 'THE OUT', '', NULL, NULL, '', '', 'de 3.9mm até 10mm', 'de 4500 até 6500 nits', 'Traseira', 'de 8.2 kg até 15.1 kg', 'http://localhost:3000//sommelier/imagens/TheOUT_PRODUTO.jpg', 'The Out', NULL, 'todos  the-out');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtoconfig`
--

CREATE TABLE `produtoconfig` (
  `id` int(11) NOT NULL,
  `quantidade_de_produtos` int(11) NOT NULL DEFAULT 10
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `produtoconfig`
--

INSERT INTO `produtoconfig` (`id`, `quantidade_de_produtos`) VALUES
(89, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `rota`
--

CREATE TABLE `rota` (
  `id` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `rota`
--

INSERT INTO `rota` (`id`, `order`, `nome`) VALUES
(343, 3, 'Destacar o PDV - Efeito WoW'),
(344, 4, 'Menu Board'),
(345, 2, 'Informativo'),
(346, 5, 'Residencial'),
(347, 0, 'Trade Marketing'),
(348, 1, 'Publicidade');

-- --------------------------------------------------------

--
-- Estrutura da tabela `segundapagina`
--

CREATE TABLE `segundapagina` (
  `id` int(11) NOT NULL,
  `titulo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pergunta1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pergunta2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `segundapagina`
--

INSERT INTO `segundapagina` (`id`, `titulo`, `pergunta1`, `pergunta2`, `banner`) VALUES
(285, '', 'Quiz', 'Lista', 'http://localhost:3000//sommelier/imagens/banner.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `updated`
--

CREATE TABLE `updated` (
  `id` int(11) NOT NULL,
  `date` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `updated`
--

INSERT INTO `updated` (`id`, `date`) VALUES
(221, '2022-09-08 04:26:59.000');

-- --------------------------------------------------------

--
-- Estrutura da tabela `_localtoproduto`
--

CREATE TABLE `_localtoproduto` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `_localtoproduto`
--

INSERT INTO `_localtoproduto` (`A`, `B`) VALUES
(236, 115392),
(236, 115393),
(236, 115394),
(236, 115395),
(236, 115396),
(236, 115397);

-- --------------------------------------------------------

--
-- Estrutura da tabela `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0aec3acb-2575-44ef-8ec7-e36a14804386', 'fb0a6dbcdadf989c67f76b20ad93bbe48019abbfaeda3d753276006c97cf3a62', '2021-12-20 06:58:18.886', '20211220065818_log_date', NULL, NULL, '2021-12-20 06:58:18.858', 1),
('432a3638-d2dd-4e43-9842-54327bf8c5d8', '6b23f792a246e336b282ffc33827738b0901456cf2ff8af746d032c85184be23', '2021-12-15 08:54:30.576', '20211215085430_order_pergunta', NULL, NULL, '2021-12-15 08:54:30.556', 1),
('45346e0f-dce3-420c-a810-187a03583052', '794890056888f9c71cd91d830551a21cd8b172c0f3977593bf3f52471de99a62', '2021-12-12 23:44:20.036', '20211212234419_pergunta_footer', NULL, NULL, '2021-12-12 23:44:20.017', 1),
('457682fa-4c26-447b-8518-72cb8e416aaa', '849c5ae3f9c8ab2942927d3c18e8beb614c6eb781b2c9ca8218fa0982c8fa98d', '2021-12-09 06:55:49.201', '20211209065549_unique_name', NULL, NULL, '2021-12-09 06:55:49.126', 1),
('4b2603d2-0874-4ae7-a6ea-64bebd15a282', '011c6c5d165b1ad14249b59e210cbdd87c19462bdc4d02c5e59be518421a1836', '2021-12-27 19:12:30.669', '20211227191230_log_unidade', NULL, NULL, '2021-12-27 19:12:30.656', 1),
('4dc050c7-7853-4edb-b4a3-1f0a72f1a2fe', 'd7c7fee34132b4c2830b7328674c730d3070eb6e533950de9f3d4a232a35a648', '2021-12-09 06:45:18.619', '20211209064518_add_slug', NULL, NULL, '2021-12-09 06:45:18.567', 1),
('55175e9c-cb02-47f0-83bc-5b0053937f9b', '26c95df50047de62c3b88b75d876a5f97962f3a9b7105295d6ae34e81a9865f0', '2021-12-09 04:41:07.049', '20211209044106_produto', NULL, NULL, '2021-12-09 04:41:06.859', 1),
('567e232c-0287-4708-a166-7f91a56f0335', 'a5e00947e381dbf33bf8f73aa368dc49de782efcd89fd25df97567372b96298e', '2021-12-09 05:06:01.501', '20211209050601_unidade_unique', NULL, NULL, '2021-12-09 05:06:01.457', 1),
('631d1bb3-faf1-4a2f-ac01-d66b70b99f3c', 'd71214458dde4991b3b705c7eec21f3c03dcc3669a9b4cf7811decdab70196ad', '2021-12-10 04:00:07.290', '20211210040007_table_updated', NULL, NULL, '2021-12-10 04:00:07.264', 1),
('6af9b48d-b05d-429d-b607-dd6002ca4d4e', '5404816881dfeabecaa8a660b2698125be10b6e4ebf2d482e1ab863961a9828c', '2021-12-09 07:08:16.461', '20211209070816_unique_opc', NULL, NULL, '2021-12-09 07:08:16.283', 1),
('6ce99843-d72a-401c-8453-d596a7f12583', '5570ff8fd6669fd93817c9918750d73a095f09ce39ce9c93e5e9b001e35468b9', '2022-02-16 03:50:27.674', '20220216035027_rota', NULL, NULL, '2022-02-16 03:50:27.593', 1),
('71318728-dc3d-4d78-a38d-f60bedfc4a18', '8431d5a550fbb6539434349048b418d4217f2d503a07e3e4731e283798ee7e94', '2021-12-09 06:30:27.072', '20211209063026_unidade_to_local', NULL, NULL, '2021-12-09 06:30:26.896', 1),
('a62acc36-50f3-47ba-8091-2c9d20656470', 'b5893eb014ba474c101a4815bb91b6b1edea323218300a925d6384ecb696dff1', '2021-12-09 07:21:55.421', '20211209072155_go', NULL, NULL, '2021-12-09 07:21:55.150', 1),
('b2e10b4a-c225-4728-96a1-9e113dba08e6', '7aa068f115a3a08bfb9b848818fd56c6796bdf3db10932f2788e29a19772e6ff', '2022-02-16 05:35:17.951', '20220216053517_rotav4', NULL, NULL, '2022-02-16 05:35:17.868', 1),
('c71611b3-ed9c-49b6-a1eb-032f0bd805fe', 'c38a35711b34bc0fd16cd72afdee5a0436c858c248fae12aedcfd770436af1ab', '2022-02-21 03:49:05.513', '20220221034905_quantidade_produtos', NULL, NULL, '2022-02-21 03:49:05.493', 1),
('cf22d9d7-d1dc-481f-a7bf-bdb47dc28e74', 'cba58f6213a9a9136bae45ef195f7912ec99c9cc4c556ea05d5d51943f9d7a47', '2021-12-27 20:42:53.821', '20211227204253_log_long_text', NULL, NULL, '2021-12-27 20:42:53.723', 1),
('d32b8c50-10bf-43db-8c1d-07b08bf622e3', '9a94e0a791306d91ae7341c2b143e2c7c9738e014c438f791220f1733912a67a', '2021-12-09 06:11:53.646', '20211209061153_teste_rela', NULL, NULL, '2021-12-09 06:11:53.493', 1),
('d6af9223-b6c3-4a13-a665-e8e7d816d387', 'a73a174da1a8bf210a0b5cb3417a86d54802ddf9b688649aae48860f3112cd7e', '2021-12-09 06:03:45.446', '20211209060345_unidade_remove_unique', NULL, NULL, '2021-12-09 06:03:45.427', 1),
('d8a5da08-127b-4215-83a6-c5a9584064d3', 'ced5bd8e05ebae2b8b2e14e52e51c59a0e7637ca15d00db24910664ef25cb5d1', '2021-12-16 04:28:31.021', '20211216042830_slug_tags', NULL, NULL, '2021-12-16 04:28:30.990', 1),
('e7dc5058-7188-45a2-8ffa-f1765ce79ab3', '8a8bc7bccda27c0d8efc1cecf0955656e1911a19af1665655f902776e09e52c2', '2021-11-29 04:23:46.259', '20211129042346_init', NULL, NULL, '2021-11-29 04:23:46.104', 1),
('f0e8c70b-f068-4867-a4d9-93bd12bced74', '02bf147c818b390532db30da2e565f5865ccadd26fecad66180856287661da9c', '2021-12-20 06:42:18.605', '20211220064218_log', NULL, NULL, '2021-12-20 06:42:18.558', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `dash_acesso`
--
ALTER TABLE `dash_acesso`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `dash_pergunta`
--
ALTER TABLE `dash_pergunta`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `dash_produto`
--
ALTER TABLE `dash_produto`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Local_slug_key` (`slug`);

--
-- Índices para tabela `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `opcao`
--
ALTER TABLE `opcao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Opcao_perguntaId_fkey` (`perguntaId`);

--
-- Índices para tabela `pergunta`
--
ALTER TABLE `pergunta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Pergunta_rotaId_fkey` (`rotaId`);

--
-- Índices para tabela `primeirapagina`
--
ALTER TABLE `primeirapagina`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produtoconfig`
--
ALTER TABLE `produtoconfig`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `rota`
--
ALTER TABLE `rota`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `segundapagina`
--
ALTER TABLE `segundapagina`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `updated`
--
ALTER TABLE `updated`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `_localtoproduto`
--
ALTER TABLE `_localtoproduto`
  ADD UNIQUE KEY `_LocalToProduto_AB_unique` (`A`,`B`),
  ADD KEY `_LocalToProduto_B_index` (`B`);

--
-- Índices para tabela `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `dash_acesso`
--
ALTER TABLE `dash_acesso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de tabela `dash_pergunta`
--
ALTER TABLE `dash_pergunta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `dash_produto`
--
ALTER TABLE `dash_produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `local`
--
ALTER TABLE `local`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=237;

--
-- AUTO_INCREMENT de tabela `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de tabela `opcao`
--
ALTER TABLE `opcao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10322;

--
-- AUTO_INCREMENT de tabela `pergunta`
--
ALTER TABLE `pergunta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1572;

--
-- AUTO_INCREMENT de tabela `primeirapagina`
--
ALTER TABLE `primeirapagina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=292;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115398;

--
-- AUTO_INCREMENT de tabela `produtoconfig`
--
ALTER TABLE `produtoconfig`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT de tabela `rota`
--
ALTER TABLE `rota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=349;

--
-- AUTO_INCREMENT de tabela `segundapagina`
--
ALTER TABLE `segundapagina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=286;

--
-- AUTO_INCREMENT de tabela `updated`
--
ALTER TABLE `updated`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=222;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `opcao`
--
ALTER TABLE `opcao`
  ADD CONSTRAINT `Opcao_perguntaId_fkey` FOREIGN KEY (`perguntaId`) REFERENCES `pergunta` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `pergunta`
--
ALTER TABLE `pergunta`
  ADD CONSTRAINT `Pergunta_rotaId_fkey` FOREIGN KEY (`rotaId`) REFERENCES `rota` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `_localtoproduto`
--
ALTER TABLE `_localtoproduto`
  ADD CONSTRAINT `_localtoproduto_ibfk_1` FOREIGN KEY (`A`) REFERENCES `local` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_localtoproduto_ibfk_2` FOREIGN KEY (`B`) REFERENCES `produto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
