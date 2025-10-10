import type { NextConfig } from "next";
import "dotenv/config";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Required for static export
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      // options: { mode: ["react-component"] },
    });
    return cfg;
  },
};

export default nextConfig;
