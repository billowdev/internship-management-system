-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 30, 2022 at 05:24 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `internship_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `house_number` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `road` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `village` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sub_district` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `district` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_code` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address_type` enum('hometown','present','company','contact_person') COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `house_number`, `road`, `village`, `sub_district`, `district`, `province`, `post_code`, `address_type`, `created_at`, `updated_at`) VALUES
('0437c3b4-38cb-4a63-b852-626b2f255a1b', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hometown', '2022-04-30 04:59:12', '2022-04-30 04:59:12'),
('168a2339-6ead-4cea-8661-681a7ac0fcfd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'present', '2022-04-30 04:58:58', '2022-04-30 04:58:58'),
('1d1aa2e8-c842-4266-bbe4-fcaec6430865', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hometown', '2022-04-30 04:58:40', '2022-04-30 04:58:40'),
('225155ca-433c-4b1f-b800-5f687ddfac87', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hometown', '2022-04-30 04:58:45', '2022-04-30 04:58:45'),
('3168d0af-1d67-46d0-bef5-12600e59c655', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'company', '2022-04-30 04:58:58', '2022-04-30 04:58:58'),
('35bc8bbe-8a1c-48d1-b505-2ec35eeed1db', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hometown', '2022-04-30 04:59:04', '2022-04-30 04:59:04'),
('3acd85bf-049d-48be-8eab-0661d4926605', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'contact_person', '2022-04-30 04:58:52', '2022-04-30 04:58:52'),
('3c2d8418-1610-4b0f-a349-9074ae87c36a', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'company', '2022-04-30 04:58:52', '2022-04-30 04:58:52'),
('3fcb9c44-1b98-42ed-b0ca-b4e5f5b7655b', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hometown', '2022-04-30 04:58:58', '2022-04-30 04:58:58'),
('40808946-32bf-47f8-874d-a6eda43803c2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'present', '2022-04-30 04:58:45', '2022-04-30 04:58:45'),
('446b309e-b4a2-48dc-81ed-f778992937b2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'contact_person', '2022-04-30 04:58:40', '2022-04-30 04:58:40'),
('45b5b55a-7fa9-4443-a887-adf9a1c3f2e4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hometown', '2022-04-30 04:58:52', '2022-04-30 04:58:52'),
('53c6bab7-6af3-4715-badd-713ae3285da1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'company', '2022-04-30 04:58:45', '2022-04-30 04:58:45'),
('5a8be873-36ab-44f6-8116-07b46dd5df5c', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'present', '2022-04-30 04:59:12', '2022-04-30 04:59:12'),
('75f722f2-8011-43f4-a15a-cdc0e613d9a9', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'company', '2022-04-30 04:58:40', '2022-04-30 04:58:40'),
('7a4b1897-fef2-491a-aa1b-1d8a99917c39', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'present', '2022-04-30 04:58:40', '2022-04-30 04:58:40'),
('7e12a780-6d1f-4c9e-a127-16c8728fc2a4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'contact_person', '2022-04-30 04:59:12', '2022-04-30 04:59:12'),
('92f6215f-a875-442c-bdbb-641c78b415b2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'present', '2022-04-30 04:58:52', '2022-04-30 04:58:52'),
('951f5d47-3372-4892-8dbe-91a21cd4f10c', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'present', '2022-04-30 04:59:04', '2022-04-30 04:59:04'),
('9e770822-fae6-4d3e-a6b5-13fa96dbccd1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'company', '2022-04-30 04:59:12', '2022-04-30 04:59:12'),
('a6c01b95-a4e3-4514-be98-0ab4abeba943', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'contact_person', '2022-04-30 04:58:58', '2022-04-30 04:58:58'),
('b29cfe50-f6ae-45dc-8057-7d7e33207c9d', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'contact_person', '2022-04-30 04:59:04', '2022-04-30 04:59:04'),
('dd47d1ed-06ce-4506-9518-f4af8949877f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'company', '2022-04-30 04:59:04', '2022-04-30 04:59:04'),
('f2a01151-2591-4a73-bab2-e98582d9b35e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'contact_person', '2022-04-30 04:58:45', '2022-04-30 04:58:45');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `contact_person_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_person_position` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_person_phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` enum('รัฐบาล','เอกชน','รัฐวิสาหกิจ') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'รัฐบาล',
  `activities` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `propose_to` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `address_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `contact_person_name`, `contact_person_position`, `contact_person_phone`, `name`, `type`, `activities`, `propose_to`, `phone`, `created_at`, `updated_at`, `address_id`) VALUES
('3b7e0739-132a-4d69-b0f5-8874fec97ac2', NULL, NULL, NULL, '', 'รัฐบาล', NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', 'dd47d1ed-06ce-4506-9518-f4af8949877f'),
('4159a677-472b-4ce0-a1bc-a896fd7ff6b8', NULL, NULL, NULL, '', 'รัฐบาล', NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '53c6bab7-6af3-4715-badd-713ae3285da1'),
('4f206a65-6648-459f-8572-0ae3b4c7a2ed', NULL, NULL, NULL, '', 'รัฐบาล', NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '75f722f2-8011-43f4-a15a-cdc0e613d9a9'),
('c9828f21-a43e-4449-ac13-98b28481ecf7', NULL, NULL, NULL, '', 'รัฐบาล', NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', '9e770822-fae6-4d3e-a6b5-13fa96dbccd1'),
('cfc0dfb4-d322-451d-8ea8-23d092de36ed', NULL, NULL, NULL, '', 'รัฐบาล', NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '3c2d8418-1610-4b0f-a349-9074ae87c36a'),
('fd16aca2-d429-4d75-9a31-e15af991a979', NULL, NULL, NULL, '', 'รัฐบาล', NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', '3168d0af-1d67-46d0-bef5-12600e59c655');

-- --------------------------------------------------------

--
-- Table structure for table `contact_persons`
--

CREATE TABLE `contact_persons` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `relationship` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `address_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `student_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `contact_persons`
--

INSERT INTO `contact_persons` (`id`, `first_name`, `last_name`, `relationship`, `created_at`, `updated_at`, `address_id`, `student_id`) VALUES
('5b003884-4af9-4497-93c4-bd028d7e9dd7', '', '', NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', 'b29cfe50-f6ae-45dc-8057-7d7e33207c9d', '7'),
('5e55e5c7-ebe1-4a35-b6d1-5d3b137a35ef', '', '', NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', 'f2a01151-2591-4a73-bab2-e98582d9b35e', '4'),
('735fc7d6-b780-4bd5-a987-a87bbd671e6f', '', '', NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '446b309e-b4a2-48dc-81ed-f778992937b2', '3'),
('80f3c69c-f17e-4623-a832-e4355c913adf', '', '', NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', 'a6c01b95-a4e3-4514-be98-0ab4abeba943', '6'),
('e2a72e7e-2aea-45e1-bb74-fa6a41d839fb', '', '', NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', '7e12a780-6d1f-4c9e-a127-16c8728fc2a4', '8'),
('fb98b8a2-3e02-44f5-b681-2c36d0b7f390', '', '', NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '3acd85bf-049d-48be-8eab-0661d4926605', '5');

-- --------------------------------------------------------

--
-- Table structure for table `co_student_internships`
--

CREATE TABLE `co_student_internships` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `student_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `internship_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `co_student_internships`
--

INSERT INTO `co_student_internships` (`id`, `student_id`, `first_name`, `last_name`, `phone`, `created_at`, `updated_at`, `internship_id`) VALUES
('008ebac4-0f2f-4d64-8436-5c0364efaf5a', NULL, NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', 'bccd77a6-6593-4990-b440-bef5a262bb38'),
('024b55c9-5921-4dc1-960d-b37c50659a08', NULL, NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', 'a1d6ab96-ce08-4b02-81ee-1730d3877fe8'),
('0563b5d2-6737-4391-ad94-a571b06efd8e', NULL, NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', 'd92b8d82-6cd5-4cec-99d1-6acb791bcad0'),
('16b3070f-a68b-4b1f-ae8b-2b4cbf5c36e5', NULL, NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', 'bccd77a6-6593-4990-b440-bef5a262bb38'),
('3fb11777-066b-4e65-b09c-d6feb92af874', NULL, NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', 'a1d6ab96-ce08-4b02-81ee-1730d3877fe8'),
('41576b58-594a-4b09-a71f-89230bcc086a', NULL, NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '50592243-c1bd-49d5-ab67-55ff01277c6d'),
('4abdd514-e6fb-4a2d-a13b-343c9b25e3d4', NULL, NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '50592243-c1bd-49d5-ab67-55ff01277c6d'),
('4e69d105-e068-4e96-b12e-779bdc29ae09', NULL, NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '24782d4e-50a0-432c-8c1c-e56b435cd870'),
('53f4d8e4-f191-4e34-9730-fa5162007e84', NULL, NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '24782d4e-50a0-432c-8c1c-e56b435cd870'),
('5c379508-7f7f-4f9d-809e-4ba579d7a0b1', NULL, NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', 'a1d6ab96-ce08-4b02-81ee-1730d3877fe8'),
('6ec049ba-19e4-4903-ae5b-a02779f88f7e', NULL, NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '97323378-e6cd-4d67-bc47-08a31423e8c7'),
('6f5178a2-8c4a-4b85-8b00-900808ae58a5', NULL, NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', 'bccd77a6-6593-4990-b440-bef5a262bb38'),
('7b7a0a69-266e-44fb-9ec4-df6568f610b1', NULL, NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '24782d4e-50a0-432c-8c1c-e56b435cd870'),
('805768fd-24da-4c29-a479-8b05d2c21e4c', NULL, NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '24782d4e-50a0-432c-8c1c-e56b435cd870'),
('84fc0451-01cb-41c4-aedb-9fe7b3efac21', NULL, NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', 'a1d6ab96-ce08-4b02-81ee-1730d3877fe8'),
('85816d60-a290-454c-a871-3689bc12686d', NULL, NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '97323378-e6cd-4d67-bc47-08a31423e8c7'),
('8ddf656b-0151-4231-83ea-03fb6278a084', NULL, NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '97323378-e6cd-4d67-bc47-08a31423e8c7'),
('96e575cb-c22f-4cd2-85a2-2da3a88592d8', NULL, NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', 'd92b8d82-6cd5-4cec-99d1-6acb791bcad0'),
('99ea51e3-cdf1-449f-bc07-0290e95fe977', NULL, NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '50592243-c1bd-49d5-ab67-55ff01277c6d'),
('9c40a9e8-2917-4d6d-8aad-a506b65e8906', NULL, NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '97323378-e6cd-4d67-bc47-08a31423e8c7'),
('cc6e58e5-9130-4c26-b0c0-1c08f8776fc0', NULL, NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', 'bccd77a6-6593-4990-b440-bef5a262bb38'),
('cff34de7-42c5-436a-89ae-c26df11cacff', NULL, NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '50592243-c1bd-49d5-ab67-55ff01277c6d'),
('d97099cd-f126-4e61-bb38-9080d22fe9e1', NULL, NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', 'd92b8d82-6cd5-4cec-99d1-6acb791bcad0'),
('fea31127-da07-40d2-b734-5564a996e5c2', NULL, NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', 'd92b8d82-6cd5-4cec-99d1-6acb791bcad0');

-- --------------------------------------------------------

--
-- Table structure for table `directors`
--

CREATE TABLE `directors` (
  `id` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `program` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `department` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `login_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `directors`
--

INSERT INTO `directors` (`id`, `first_name`, `last_name`, `phone`, `program`, `department`, `created_at`, `updated_at`, `login_id`) VALUES
('2', 'คณะกรรมการฝึกประสบการณ์', '', '', '', '', '2022-04-30 04:58:11', '2022-04-30 04:58:11', '6b14e54b-26f3-4f01-ad08-35866c8438b9');

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int(11) NOT NULL,
  `code` int(11) DEFAULT NULL,
  `name_th` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_en` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province_id` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `educations`
--

CREATE TABLE `educations` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `academy` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `level` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gpa` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `student_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `educations`
--

INSERT INTO `educations` (`id`, `academy`, `level`, `gpa`, `created_at`, `updated_at`, `student_id`) VALUES
('0903b187-60cb-463e-80c4-77797f4fe0e4', NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', '8'),
('0f672d2a-aa10-4d64-b1ac-101d3016590f', NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '5'),
('2e818673-fa89-4baa-9e8b-86e434d36f3d', NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '5'),
('3696fe81-b82d-4894-8705-b14c3b2f4889', NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '4'),
('3c606299-0240-4a83-8d24-291042463f59', NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '3'),
('46abe82b-d618-477f-bc79-cd78d6c73280', NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', '7'),
('477546ad-b057-4a99-a385-7c086b152bcf', NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '4'),
('4fa17fd5-f576-4bdf-a753-caf03e094216', NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', '8'),
('6ec22146-6861-48ff-bda6-b302ed6498aa', NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '4'),
('700d6a5a-1296-4b5f-a434-e32a8dba5536', NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '5'),
('74cbf669-7fbf-405d-8194-ed1c685951b0', NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', '6'),
('821d10ee-c601-4030-8202-4b9996fc937f', NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', '7'),
('8a1fccac-bcd5-480c-a367-531b4838ca02', NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', '8'),
('b828f232-e986-4916-9d1a-444a6d7ea2ad', NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', '6'),
('b8d4d105-f051-4fa4-9d0c-f568e84a0d4e', NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', '7'),
('e4ad3b4e-57ff-4201-afa2-57c6d6fc3449', NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', '6'),
('eb4ab6a4-bc8d-4a49-81ab-5196e4108ece', NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '3'),
('f63ea72b-fe2f-498a-a9ec-70d7d107b77a', NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '3');

-- --------------------------------------------------------

--
-- Table structure for table `geographies`
--

CREATE TABLE `geographies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hometown_addresses`
--

CREATE TABLE `hometown_addresses` (
  `id` int(11) NOT NULL,
  `student_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `hometown_addresses`
--

INSERT INTO `hometown_addresses` (`id`, `student_id`, `address_id`, `created_at`, `updated_at`) VALUES
(11, '3', '1d1aa2e8-c842-4266-bbe4-fcaec6430865', '2022-04-30 04:58:40', '2022-04-30 04:58:40'),
(12, '4', '225155ca-433c-4b1f-b800-5f687ddfac87', '2022-04-30 04:58:45', '2022-04-30 04:58:45'),
(13, '5', '45b5b55a-7fa9-4443-a887-adf9a1c3f2e4', '2022-04-30 04:58:52', '2022-04-30 04:58:52'),
(14, '6', '3fcb9c44-1b98-42ed-b0ca-b4e5f5b7655b', '2022-04-30 04:58:58', '2022-04-30 04:58:58'),
(15, '7', '35bc8bbe-8a1c-48d1-b505-2ec35eeed1db', '2022-04-30 04:59:04', '2022-04-30 04:59:04'),
(16, '8', '0437c3b4-38cb-4a63-b852-626b2f255a1b', '2022-04-30 04:59:12', '2022-04-30 04:59:12');

-- --------------------------------------------------------

--
-- Table structure for table `internships`
--

CREATE TABLE `internships` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `is_send` tinyint(1) DEFAULT '0',
  `is_confirm` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `company_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `student_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `internships`
--

INSERT INTO `internships` (`id`, `is_send`, `is_confirm`, `created_at`, `updated_at`, `company_id`, `student_id`) VALUES
('24782d4e-50a0-432c-8c1c-e56b435cd870', 1, 0, '2022-04-30 04:58:52', '2022-04-30 05:00:54', 'cfc0dfb4-d322-451d-8ea8-23d092de36ed', '5'),
('50592243-c1bd-49d5-ab67-55ff01277c6d', 1, 1, '2022-04-30 04:58:45', '2022-04-30 05:02:10', '4159a677-472b-4ce0-a1bc-a896fd7ff6b8', '4'),
('97323378-e6cd-4d67-bc47-08a31423e8c7', 0, 0, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '4f206a65-6648-459f-8572-0ae3b4c7a2ed', '3'),
('a1d6ab96-ce08-4b02-81ee-1730d3877fe8', 1, 1, '2022-04-30 04:58:58', '2022-04-30 05:02:07', 'fd16aca2-d429-4d75-9a31-e15af991a979', '6'),
('bccd77a6-6593-4990-b440-bef5a262bb38', 1, 1, '2022-04-30 04:59:04', '2022-04-30 05:02:05', '3b7e0739-132a-4d69-b0f5-8874fec97ac2', '7'),
('d92b8d82-6cd5-4cec-99d1-6acb791bcad0', 1, 0, '2022-04-30 04:59:12', '2022-04-30 05:01:28', 'c9828f21-a43e-4449-ac13-98b28481ecf7', '8');

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `username` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `roles` enum('admin','director','student') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'student',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`id`, `username`, `password`, `roles`, `is_active`, `created_at`, `updated_at`) VALUES
('27702484432584706', '1', '1', 'admin', 1, '2022-04-06 00:00:00', '2022-04-07 00:00:00'),
('44d00ccd-1d7c-46e0-9bbd-6d63778889ec', '3', '3', 'student', 1, '2022-04-30 04:58:40', '2022-04-30 04:58:40'),
('61177251-5fcd-4616-9b86-f70b32794e4b', '8', '8', 'student', 1, '2022-04-30 04:59:12', '2022-04-30 04:59:12'),
('65d09738-8ded-4c03-9e6a-4d51a6396a41', '5', '5', 'student', 1, '2022-04-30 04:58:52', '2022-04-30 04:58:52'),
('6b14e54b-26f3-4f01-ad08-35866c8438b9', '2', '2', 'director', 1, '2022-04-30 04:58:11', '2022-04-30 04:58:11'),
('7541ca55-6482-48c1-828b-7dde8a4419fe', '4', '4', 'student', 1, '2022-04-30 04:58:45', '2022-04-30 04:58:45'),
('bf19a399-81c7-41a0-a5c8-ad65a3a9a7c6', '6', '6', 'student', 1, '2022-04-30 04:58:58', '2022-04-30 04:58:58'),
('d31258d6-83d6-4d33-88eb-28a8e8b4acb3', '7', '7', 'student', 1, '2022-04-30 04:59:04', '2022-04-30 04:59:04');

-- --------------------------------------------------------

--
-- Table structure for table `present_addresses`
--

CREATE TABLE `present_addresses` (
  `id` int(11) NOT NULL,
  `student_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `present_addresses`
--

INSERT INTO `present_addresses` (`id`, `student_id`, `address_id`, `created_at`, `updated_at`) VALUES
(11, '3', '7a4b1897-fef2-491a-aa1b-1d8a99917c39', '2022-04-30 04:58:40', '2022-04-30 04:58:40'),
(12, '4', '40808946-32bf-47f8-874d-a6eda43803c2', '2022-04-30 04:58:45', '2022-04-30 04:58:45'),
(13, '5', '92f6215f-a875-442c-bdbb-641c78b415b2', '2022-04-30 04:58:52', '2022-04-30 04:58:52'),
(14, '6', '168a2339-6ead-4cea-8661-681a7ac0fcfd', '2022-04-30 04:58:58', '2022-04-30 04:58:58'),
(15, '7', '951f5d47-3372-4892-8dbe-91a21cd4f10c', '2022-04-30 04:59:04', '2022-04-30 04:59:04'),
(16, '8', '5a8be873-36ab-44f6-8116-07b46dd5df5c', '2022-04-30 04:59:12', '2022-04-30 04:59:12');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` int(5) NOT NULL,
  `code` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_th` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_en` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `geography_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_card` varchar(13) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `program` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `department` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `skill` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `interest` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `project_topic` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `exp` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `religion` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `father_name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `father_job` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mother_name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mother_job` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `present_gpa` float DEFAULT NULL,
  `image_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `login_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `email`, `id_card`, `first_name`, `last_name`, `phone`, `program`, `department`, `skill`, `interest`, `project_topic`, `dob`, `exp`, `religion`, `father_name`, `father_job`, `mother_name`, `mother_job`, `present_gpa`, `image_name`, `created_at`, `updated_at`, `login_id`) VALUES
('3', NULL, NULL, 'test', 'test', 'test', 'test', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-04-30 04:58:40', '2022-04-30 04:58:40', '44d00ccd-1d7c-46e0-9bbd-6d63778889ec'),
('4', NULL, NULL, 'test2', 'test2', 'test', 'test', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-04-30 04:58:45', '2022-04-30 04:58:45', '7541ca55-6482-48c1-828b-7dde8a4419fe'),
('5', NULL, NULL, 'test3', 'test3', 'test', 'test', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-04-30 04:58:52', '2022-04-30 04:58:52', '65d09738-8ded-4c03-9e6a-4d51a6396a41'),
('6', NULL, NULL, 'test4', 'test4', 'test', 'test', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-04-30 04:58:58', '2022-04-30 04:58:58', 'bf19a399-81c7-41a0-a5c8-ad65a3a9a7c6'),
('7', NULL, NULL, 'test5', 'test5', 'test', 'test', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-04-30 04:59:04', '2022-04-30 04:59:04', 'd31258d6-83d6-4d33-88eb-28a8e8b4acb3'),
('8', NULL, NULL, 'test6', 'test6', 'test', 'test', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-04-30 04:59:12', '2022-04-30 04:59:12', '61177251-5fcd-4616-9b86-f70b32794e4b');

-- --------------------------------------------------------

--
-- Table structure for table `sub_districts`
--

CREATE TABLE `sub_districts` (
  `id` int(11) NOT NULL,
  `zip_code` int(11) DEFAULT NULL,
  `name_th` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_en` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address_id` (`address_id`);

--
-- Indexes for table `contact_persons`
--
ALTER TABLE `contact_persons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address_id` (`address_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `co_student_internships`
--
ALTER TABLE `co_student_internships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `internship_id` (`internship_id`);

--
-- Indexes for table `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `login_id` (`login_id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `province_id` (`province_id`);

--
-- Indexes for table `educations`
--
ALTER TABLE `educations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `geographies`
--
ALTER TABLE `geographies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hometown_addresses`
--
ALTER TABLE `hometown_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `address_id` (`address_id`);

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `present_addresses`
--
ALTER TABLE `present_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `address_id` (`address_id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `geography_id` (`geography_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `login_id` (`login_id`);

--
-- Indexes for table `sub_districts`
--
ALTER TABLE `sub_districts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `district_id` (`district_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hometown_addresses`
--
ALTER TABLE `hometown_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `present_addresses`
--
ALTER TABLE `present_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `contact_persons`
--
ALTER TABLE `contact_persons`
  ADD CONSTRAINT `contact_persons_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contact_persons_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `co_student_internships`
--
ALTER TABLE `co_student_internships`
  ADD CONSTRAINT `co_student_internships_ibfk_1` FOREIGN KEY (`internship_id`) REFERENCES `internships` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `directors`
--
ALTER TABLE `directors`
  ADD CONSTRAINT `directors_ibfk_1` FOREIGN KEY (`login_id`) REFERENCES `logins` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `districts`
--
ALTER TABLE `districts`
  ADD CONSTRAINT `districts_ibfk_1` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `educations`
--
ALTER TABLE `educations`
  ADD CONSTRAINT `educations_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hometown_addresses`
--
ALTER TABLE `hometown_addresses`
  ADD CONSTRAINT `hometown_addresses_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hometown_addresses_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `internships`
--
ALTER TABLE `internships`
  ADD CONSTRAINT `internships_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `internships_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `present_addresses`
--
ALTER TABLE `present_addresses`
  ADD CONSTRAINT `present_addresses_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `present_addresses_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `provinces`
--
ALTER TABLE `provinces`
  ADD CONSTRAINT `provinces_ibfk_1` FOREIGN KEY (`geography_id`) REFERENCES `geographies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`login_id`) REFERENCES `logins` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `sub_districts`
--
ALTER TABLE `sub_districts`
  ADD CONSTRAINT `sub_districts_ibfk_1` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
