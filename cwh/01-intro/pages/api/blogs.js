import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("blogData", (err, data) => {
    console.log("hello");
    return res.status(200).json(data);
  });
}
