import app from "./app.js";
import pkg from "../package.json";
import config from "./config/config.js";
import sequelize from "./config/db/sequelize.config.js";
import models from "./models";

app.get("/", (req, res) => {
  res.json({
    name: pkg.name,
    author: pkg.author,
    description: pkg.description,
    version: pkg.version,
  });
});

app.listen(config.app.port, async () => {
  try {
    await sequelize.sync();
    console.log(`Server running on port ${config.app.port}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
});
