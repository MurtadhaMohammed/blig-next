import fs from "fs";
import path from "path";

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const fileData = fs.readFileSync(
    path.join(process.cwd(), "file.json"),
    "utf8"
  );

  if (req.method == "POST") {
    console.log("ok")
    res.end(JSON.stringify(req.body));
  } else {
    res.end(fileData);
  }
};
