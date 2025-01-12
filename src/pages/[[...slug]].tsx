import type { GetStaticPaths, GetStaticPropsContext } from "next";
import { Node, NodeItem } from "../components/node";
import { Layout } from "../components/layout";
import { Meta } from "../components/meta";

type Params = {
  props: {
    title: string;
    attributes: any;
    html?: any;
  };
};

type Page = {
  slug: string;
  content: string;
};

const pages = ["home", "about", "contact"];

export const getStaticPaths = (async () => {
  return {
    paths: pages.map((page) => ({
      params: {
        slug: page === "home" ? [] : [page],
      },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

async function importContent(title: string): Promise<any> {
  switch (title) {
    case "about":
      return await import("@/content/about.md");
    case "contact":
      return await import("@/content/contact.md");
    default:
      return await import("@/content/home.md");
  }
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<Params> => {
  const slug = Array.isArray(params?.slug)
    ? params?.slug.join(" ")
    : params?.slug;
  const title = slug || "home";

  // es
  const { attributes, html } = await importContent(title);

  return { props: { title, attributes, html } };
};

export default function Page({ attributes }): Params {
  return (
    <Layout>
      <Meta title="Home" />
      {Object.values(attributes).map((value, index) => (
        <Node key={index} node={value as NodeItem} />
      ))}
    </Layout>
  );
}
