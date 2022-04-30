<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <a href="https://github.com/lacakp/internship-management-system">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">ระบบสารสนเทศเพื่อจัดการสถานที่ฝึกประสบการณ์วิชาชีพสาขาวิชาคอมพิวเตอร์</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/lacakp/internship-management-system"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lacakp/internship-management-system">View Demo</a>
    ·
    <a href="https://github.com/lacakp/internship-management-system/issues">Report Bug</a>
    ·
    <a href="https://github.com/lacakp/internship-management-system/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `lacakp`, `internship-management-system`, `lacakkarapon`, `lacakp`, `gmail`, `lacakp.contact`, `internship-management-system`, `project_description` -->

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [tailwindcss](https://tailwindcss.com/)
* [NodeJs](https://nodejs.org/)
* [Sequelize](https://sequelize.org/)
* [MySQL](https://www.mysql.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

ระบบสารสนเทศเพื่อจัดการสถานที่ฝึกประสบการณ์วิชาชีพสาขาวิชาคอมพิวเตอร์ ซึ่งเป็นโครงงานคอมพิวเตอร์นี้ขึ้นมา เพื่อแก้ปัญหา ในการจัดการแบบฟอร์มสถานที่ฝึกประสบการณ์วิชาชีพสาขาวิชาคอมพิวเตอร์ 

### Prerequisites

#### BACK END - Node.js
###### หลังบ้านจัดการฐานข้อมูลด้วย sequelize รูปแบบการเขียนรองรับทั้ง NoSQL และ SQL แบ่งเป็น 3 ส่วนหลักๆ

- models
- routes
- controllers


#### FRONT END - React.js & Redux
###### หน้าบ้านพัฒนาด้วย React.js ร่วมกับไลบรารี่จัดการ State Redux แบ่งเป็น 3 ส่วนหลักๆ
- infrastructure ( Axios - การเชื่อมต่อกับ api)
- views ( React - admin, director, student)
- redux ( Redux - action middleware reducer selector store)


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lacakp/internship-management-system.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `/server/infrastructure/services/config/index.js`
   ```js
    const BASE_URL = "http://localhost:5000/api";
   ```
4. DOT ENV `/src/.env`
   ```env
    NODE_ENV=development
    CLIENT_URL= "http://localhost"
    PORT="YOUR PORT"
    JWT_SECRET= "YOUR JWT RANDOM THING"
    DB_USERNAME= "DBUSERNAME"
    DB_PASSWORD="DBPASS"
    DB_HOST=

    DB_DATABASE_MAIN_DEV= internship_db
    DB_DATABASE_ADDRESS_DEV=thai_addresses_db

    DB_DATABASE_MAIN_PRODUCTION=internship_db
    DB_DATABASE_ADDRESS_PRODUCTION=thai_addresses_db

    DB_DATABASE_MAIN_TEST=internship_db
    DB_DATABASE_ADDRESS_TEST=thai_addresses_db

    PATH_TO_SAVE_IMG_PRODUCTION=/var/www/html/images
    PATH_TO_SAVE_IMG_DEVELOPMENT=../public/images
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage -->
<!-- 
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

## Release version 1.0.0

### นักศึกษา
- [x] สามารถเข้าสู่ระบบได้
- [x] สามารถดูแบบฟอร์มฝึกประสบการณ์วิชาชีพได้
- [x] สามารถเพิ่มข้อมูลแบบฟอร์มฝึกประสบการณ์วิชาชีพได้
- [x] สามารถส่งแบบฟอร์มฝึกประสบการณ์วิชาชีพได้
- [x] เมื่อส่งแบบฟอร์มจะไม่สามารถบันทึกข้อมูลแบบฟอร์มฝึกประสบการณ์วิชาชีพได้
- [x] สามารถยกเลิกการส่งแบบฟอร์มวิชาชีพได้
- [x] สามารถดูข้อมูลแบบฟอร์มประวัติส่วนตัวได้
- [x] สามารถเพิ่มข้อมูลแบบฟอร์มประวัติส่วนตัวได้
- [x] สามารถบันทึกแบบฟอร์มประวัติส่วนตัวได้
- [x] สามารถออกจากระบบได้

### คณะกรรมการฝึกประสบการณ์วิชาชีพ
- [x] สามารถเข้าสู่ระบบได้
- [x] สามารถดูข้อมูลรายการฝึกประบการณ์วิชาชีพนักศึกษา สถาณะ "รออนุมัติ" ได้
- [x] สามารถดูข้อมูลแบบฟอร์มฝึกประสบการณ์วิชาชีพของนักศึกษาได้
- [x] สามารถอนุมัติแบบฟอร์มฝึกประสบการณ์วิชาชีพของนักศึกษาได้
- [x] สามารถส่งคืนแบบฟอร์มฝึกประสบการณ์วิชาชีพของนักศึกษาได้
- [x] สามารถดูข้อมูลรายการฝึกประบการณ์วิชาชีพนักศึกษา สถาณะ "อนุมัติ" ได้
- [x] สามารถเปลี่ยนสถานะแบบฟอร์มฝึกประสบการณ์วิชาชีพของนักศึกษา เป็น "รออนุมัติ" ได้
- [x] สามารถออกจากระบบได้

### ผู้ดูแลระบบ
- [x] สามารถเข้าสู่ระบบได้
- [x] สามารถดูข้อมูลรายการข้อมูลสมาชิกได้
- [x] สามารถเพิ่มสมาชิกได้
- [x] สามารถแก้ไขข้อมูลการเข้าสู่ระบบของสมาชิกได้
- [x] สามารถแก้ไขประวัติส่วนตัวของนักศึกษาได้
- [x] สามารถออกจากระบบได้



See the [open issues](https://github.com/lacakp/internship-management-system/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
<!-- ## License -->

<!-- Distributed under the MIT License. See `LICENSE.txt` for more information. -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contact

Your Name - [@lacakkarapon](https://twitter.com/lacakkarapon) - lacakp.contact@gmail.com

Project Link: [https://github.com/lacakp/internship-management-system](https://github.com/lacakp/internship-management-system)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []() -->

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lacakp/internship-management-system.svg?style=for-the-badge
[contributors-url]: https://github.com/lacakp/internship-management-system/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lacakp/internship-management-system.svg?style=for-the-badge
[forks-url]: https://github.com/lacakp/internship-management-system/network/members
[stars-shield]: https://img.shields.io/github/stars/lacakp/internship-management-system.svg?style=for-the-badge
[stars-url]: https://github.com/lacakp/internship-management-system/stargazers
[issues-shield]: https://img.shields.io/github/issues/lacakp/internship-management-system.svg?style=for-the-badge
[issues-url]: https://github.com/lacakp/internship-management-system/issues
[license-shield]: https://img.shields.io/github/license/lacakp/internship-management-system.svg?style=for-the-badge
[license-url]: https://github.com/lacakp/internship-management-system/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lacakp
[product-screenshot]: images/screenshot.png
