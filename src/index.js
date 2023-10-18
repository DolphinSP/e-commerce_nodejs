import app from "./app.js";
import pkg from "../package.json";
import config from "./config/config.js";

app.get("/", (req, res) => {
  res.json({
    name: pkg.name,
    author: pkg.author,
    description: pkg.description,
    version: pkg.version,
  });
});

app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port}`);
});
