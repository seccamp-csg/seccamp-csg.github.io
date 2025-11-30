import fs from "fs";
import path from "path";

export const getAllPostPath = async () => {
  const postDir = "posts/";
  const currentDir = process.cwd();
  const files = fs.readdirSync(path.join(currentDir, postDir));
  const postFiles = files.filter((file) => file.endsWith(".mdx"));
  return postFiles;
};
