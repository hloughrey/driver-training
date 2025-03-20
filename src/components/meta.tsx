import Head from "next/head";
import { useRouter } from "next/router";

interface MetaProps {
  title?: string;
  path?: string;
}

export function Meta({ title }: MetaProps) {
  const router = useRouter();

  return (
    <Head>
      <meta name="theme-color" content="#FFFFFF"></meta>
      <link
        key="canonical_link"
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${
          router.asPath !== "/" ? router.asPath : ""
        }`}
      />
      <>
        <title>{`${title} | C1 Driver Training`}</title>
        <meta
          key="description"
          name="description"
          content="C1 Driver Training provides training to companies and private individuals looking to add the C1 classification to their driver licence"
        />
        <meta property="og:title" content={title} key="title" />
        {/* <meta
          key="og_image"
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/meta.jpg`}
        /> */}
        <meta key="og_image_width" property="og:image:width" content="800" />
        <meta key="og_image_height" property="og:image:height" content="600" />
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
