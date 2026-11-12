-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Nov 12. 10:44
-- Kiszolgáló verziója: 10.11.16-MariaDB
-- PHP verzió: 8.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS konyvtar CHARACTER SET utf8mb4;
USE konyvtar;
--
-- Adatbázis: `konyvtar`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `konyvek`
--

CREATE TABLE `konyvek` (
  `id` int(11) NOT NULL,
  `cim` varchar(200) NOT NULL,
  `szerzo` varchar(150) NOT NULL,
  `kiadas_eve` int(11) DEFAULT NULL,
  `kategoria` varchar(80) DEFAULT NULL,
  `ar` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `konyvek`
--

INSERT INTO `konyvek` (`id`, `cim`, `szerzo`, `kiadas_eve`, `kategoria`, `ar`) VALUES
(1, 'Egri csillagok', 'Gárdonyi Géza', 1901, 'Regény', 3490),
(2, 'A Pál utcai fiúk', 'Molnár Ferenc', 1906, 'Ifjúsági', 2990),
(3, 'Az ember tragédiája', 'Madách Imre', 1861, 'Dráma', 2490);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `konyvek`
--
ALTER TABLE `konyvek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `konyvek`
--
ALTER TABLE `konyvek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
