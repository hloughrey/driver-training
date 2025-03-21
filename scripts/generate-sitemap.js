import fs from "fs";
import { globby } from "globby";
import prettier from "prettier";

// Your site's URL
const WEBSITE_URL = "https://www.c1drivertraining.com";

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  // Get all .tsx files in the pages directory
  const pages = await globby([
    "src/pages/**/*.tsx",
    "!src/pages/_*.tsx",
    "!src/pages/api",
  ]);

  // Create sitemap items from pages
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          // Convert page path to route
          const path = page
            .replace("src/pages", "")
            .replace(".tsx", "")
            .replace("/index", "");

          const route = path === "" ? "" : path;

          return `
            <url>
              <loc>${`${WEBSITE_URL}${route}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${route === "" ? "1.0" : "0.8"}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  try {
    // Format the XML
    const formatted = await prettier.format(sitemap, {
      ...prettierConfig,
      parser: "html",
    });

    // Write the sitemap to the public directory
    fs.writeFileSync("public/sitemap.xml", formatted);

    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
})();
