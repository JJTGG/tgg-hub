import { readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const pages = [
  "index.html",
  "ecosystem.html",
  "about.html",
  "contact.html",
  "404.html"
];

const components = {
  header: await readFile(join(root, "components/header.html"), "utf8"),
  footer: await readFile(join(root, "components/footer.html"), "utf8")
};

for (const page of pages) {
  const sourcePath = join(root, "pages", page);
  const outputPath = join(root, basename(page));

  let content = await readFile(sourcePath, "utf8");

  content = content
    .replace("<!-- include:header -->", components.header)
    .replace("<!-- include:footer -->", components.footer);

  await writeFile(outputPath, content);
}