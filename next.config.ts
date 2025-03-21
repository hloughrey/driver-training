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
  webpack: (cfg, { isServer }) => {
    // Handle markdown files
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      // options: { mode: ["react-component"] },
    });

    // Handle previews compilation
    if (!isServer) {
      // Add entry for previews if needed
      // This is a fallback in case the separate build script doesn't work
      cfg.resolve = {
        ...cfg.resolve,
        fallback: {
          ...cfg.resolve?.fallback,
          fs: false,
          path: false,
        },
      };
    }
    
    return cfg;
  },
};

export default nextConfig;
