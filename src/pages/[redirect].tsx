import type DynamicUrlPaths from "../types/DynamicUrlPaths";
import Head from "next/head";

const redirectMap: Map<string, string> = new Map([
  ["twitter", "https://twitter.com/kunalsin9h"],
  ["github", "https://github.com/kunalsin9h"],
  ["linkedin", "https://linkedin.com/in/kunalsin9h"],
  ["keybase", "https://keybase.io/kunalsin9h"],
]);

function getAllRedirectCandiadates(): {
  params: { redirect: string };
}[] {
  const arr = Array.from(redirectMap.keys());
  return arr.map((x) => {
    return {
      params: {
        redirect: x,
      },
    };
  });
}

export async function getStaticPaths(): Promise<DynamicUrlPaths> {
  const paths = getAllRedirectCandiadates();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const redirectTo = params.redirect;
  return {
    props: {
      url: redirectMap.get(redirectTo),
    },
  };
}

export default function ({ url }) {
  return (
    <Head>
      <meta http-equiv="Refresh" content={`0; URL=${url}`} />
    </Head>
  );
}
