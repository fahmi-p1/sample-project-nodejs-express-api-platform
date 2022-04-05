-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2022 at 06:20 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies-app-nba`
--

-- --------------------------------------------------------

--
-- Table structure for table `favorites_movie`
--

CREATE TABLE `favorites_movie` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `user_id` varchar(50) DEFAULT NULL,
  `movie_id` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `director` varchar(50) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `poster` varchar(50) DEFAULT NULL,
  `rating` varchar(50) DEFAULT NULL,
  `main_genre` varchar(50) DEFAULT NULL,
  `second_genre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `created_at`, `title`, `director`, `duration`, `poster`, `rating`, `main_genre`, `second_genre`) VALUES
(2, '2022-04-03 17:00:00', 'Mission : Impossible', 'Brian De Palma', '180 Minutes', 'uploads/files/f2d1dec29ca8846f897d38daf87d25b0.jpg', '4.9', 'Action', 'Action'),
(3, '2022-04-03 17:00:00', 'The Nun', 'Corin Hardy', '180 Minutes', 'uploads/files/6f7dd00ebe8e2804512b37dd48f48f6e.jpg', '4.8', 'Horror', 'Horror'),
(4, '2022-04-03 17:00:00', 'Red Notice', 'Rawson Marshall Thurber', '180 Minutes', 'uploads/files/6e9ad0b108dd8cd3cd6d51251dfa0dcf.jpg', '4.7', 'Action', 'Action'),
(5, '2022-04-03 17:00:00', 'Tenet', 'Christopher Nolan', '180 Minutes', 'uploads/files/aa9b8ffb2ffafe7d4ddb8879bc8e4472.jpg', '4.9', 'Action', 'Action'),
(6, '2022-04-03 17:00:00', 'Venom', 'Ruben Fleischer', '180 Minutes', 'uploads/files/b50d616194cf56dc592d5f77aaa3bff4.jpg', '4.5', 'Sci-Fi', 'Sci-Fi');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `photo` varchar(50) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `created_at`, `name`, `photo`, `dob`) VALUES
(1, '2022-04-02 17:00:00', 'Fahmi P', 'uploads/files/c7e6aac69921de5a21ad430207f90eef.png', 'Dob');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorites_movie`
--
ALTER TABLE `favorites_movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favorites_movie`
--
ALTER TABLE `favorites_movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
