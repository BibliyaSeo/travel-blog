import Layout from "../components/Layout";
import SEO from "../components/SEO";
import axios from "axios";
import { TOKEN, DATABASE_ID } from "../config";

export default function Travels() {
  return (
    <Layout>
      <SEO title="Travel" content="여행" />
      <h1>Travels</h1>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    data: { page_size: 100 },
  };
  // 여기부터 내일 1:41:57
  try {
    const res = await axios(`${options.url}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
