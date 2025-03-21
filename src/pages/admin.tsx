import { useEffect } from "react";
import Head from "next/head";

export default function Admin() {
  useEffect(() => {
    // Redirect to the Netlify CMS admin interface
    window.location.href = "/admin/index.html";
  }, []);

  return (
    <>
      <Head>
        <title>Admin | C1 Driver Training</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Redirecting to admin interface...</p>
      </div>
    </>
  );
}
