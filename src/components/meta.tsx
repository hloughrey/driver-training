import Head from "next/head";
import { useRouter } from "next/router";

interface MetaProps {
  title?: string;
  path?: string;
  description?: string;
  ogImage?: string;
}

export function Meta({ title, description, ogImage }: MetaProps) {
  const router = useRouter();
  const currentPath = router.asPath !== "/" ? router.asPath : "";

  // Default description if none provided
  const metaDescription =
    description ||
    "C1 Driver Training provides training to companies and private individuals looking to add the C1 classification to their driver licence";

  // Page-specific title with site name
  const pageTitle = `${title} | C1 Driver Training`;

  // Default OG image if none provided
  const ogImageUrl = ogImage
    ? `${process.env.NEXT_PUBLIC_BASE_URL}${ogImage}`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/android-chrome-512x512.png`;

  return (
    <Head>
      <meta name="theme-color" content="#FFFFFF"></meta>
      <link
        key="canonical_link"
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${currentPath}`}
      />
      <>
        <title>{pageTitle}</title>
        <meta key="description" name="description" content={metaDescription} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={pageTitle} key="title" />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${currentPath}`}
        />
        <meta property="og:type" content="website" />
        <meta key="og_image" property="og:image" content={ogImageUrl} />
        <meta key="og_image_width" property="og:image:width" content="800" />
        <meta key="og_image_height" property="og:image:height" content="600" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />

        <meta
          name="google-site-verification"
          content="0V3an4lzKat3sZ-su2LtWldc5H2CCVrGXvaQrxOE__E"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </>
    </Head>
  );
}
