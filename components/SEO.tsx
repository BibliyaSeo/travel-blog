import Head from "next/head";

type SEOProps = {
  title: string;
  content: string;
};

export default function SEO({ title, content }: SEOProps) {
  return (
    <Head>
      <title>{title}| 리페를 새롭게</title>
      <meta name="description" content={`${content}`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
