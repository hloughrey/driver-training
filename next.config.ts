import type { NextConfig } from "next";
import "dotenv/config";

const nextConfig: NextConfig = {
  // output: "export",
  distDir: "dist",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/utils/cloudinary-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/latitude55/image/upload/driver-training",
        search: "",
      },
    ],
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
