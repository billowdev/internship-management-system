require("dotenv").config(); // this is important!
module.exports = {
  development: {
   databases:{
     internship_db:{
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_MAIN_DEV,
      host: process.env.DB_HOST,
      dialect: "mysql",
     },
     thai_addresses_db:{
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_ADDRESS_DEV,
      host: process.env.DB_HOST,
      dialect: "mysql",
     }
   }
  },
  test: {
    databases:{
      internship_db:{
       username: process.env.DB_USERNAME,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_DATABASE_MAIN_TEST,
       host: process.env.DB_HOST,
       dialect: "mysql",
      },
      thai_addresses_db:{
       username: process.env.DB_USERNAME,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_DATABASE_ADDRESS_TEST,
       host: process.env.DB_HOST,
       dialect: "mysql",
      }
    }
  },
  production: {
    databases:{
      internship_db:{
       username: process.env.DB_USERNAME,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_DATABASE_MAIN_PRODUCTION,
       host: process.env.DB_HOST,
       dialect: "mysql",
      },
      thai_addresses_db:{
       username: process.env.DB_USERNAME,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_DATABASE_MAIN_PRODUCTION,
       host: process.env.DB_HOST,
       dialect: "mysql",
      }
    }
  },
};