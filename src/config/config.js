const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME || "test",
    user: process.env.DB_USER || "root",
    pass: process.env.DB_PASS || "",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};

export default config;
