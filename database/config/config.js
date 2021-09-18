module.exports = {
  development: {
    host: "localhost",
    /*port: 5432,*/
    database: "ova",
    username: "root",
    password: null,
    dialect: "mysql",
  },
  production: {
    host: "ec2-44-198-80-194.compute-1.amazonaws.com",
    /*port: 5432,*/
    database: "dfi0aveu2dh9m0",
    username: "twrywdbyqfifyd",
    password:
      "3d23ecea7a718b70263366cfa8894d02cdfc5d835707cd4e3944d5cc5fe73f3b",
    dialect: "postgres",
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
