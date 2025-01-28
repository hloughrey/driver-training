// import * as React from "react";
import { Layout } from "../components/layout";
// import BasicMeta from "../components/meta/BasicMeta";
// import OpenGraphMeta from "../components/meta/OpenGraphMeta";
// import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// import { SocialList } from "../components/SocialList";
// import Router from "next/router";
// import {
//   QueryClient,
//   QueryClientProvider,
//   Hydrate,
// } from "@tanstack/react-query";
// import NProgress from "nprogress";
// import { syncDrupalPreviewRoutes } from "next-drupal";
// import "nprogress/nprogress.css";

import "../styles/globals.css";

// NProgress.configure({ showSpinner: false });

// Router.events.on("routeChangeStart", function (path) {
//   syncDrupalPreviewRoutes(path);
//   NProgress.start();
// });
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  // const queryClientRef = React.useRef<QueryClient>();
  // if (!queryClientRef.current) {
  //   queryClientRef.current = new QueryClient();
  // }
  return (
    // <QueryClientProvider client={queryClientRef.current}>
    //   <Hydrate state={pageProps.dehydratedState}>#
    <Layout>
      {/* <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />  */}
      <Component {...pageProps} />
    </Layout>
    //   </Hydrate>
    // </QueryClientProvider>
  );
}
