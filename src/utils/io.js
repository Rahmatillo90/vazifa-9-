import { json } from "express";
import fs from "fs/promises";

class Io {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async redfile() {
    try {
      const data = await fs.redfile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
  async writeFile(data) {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 200), "utf-8");
  }
}

export default Io;
