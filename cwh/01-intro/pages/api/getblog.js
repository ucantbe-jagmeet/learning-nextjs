import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir(`blogData/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "No Such Blog Found" });
    }

    console.log(req.query);
    return res.status(200).json(JSON.parse(data));
  });
}
