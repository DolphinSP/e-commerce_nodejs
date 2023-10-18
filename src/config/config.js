const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME || "test",
    user: process.env.DB_USER || "root",
    pass: process.env.DB_PASS || "",
  },
};

export default config;
