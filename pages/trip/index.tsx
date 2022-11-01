import axios from "axios";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { DATABASE_ID, TOKEN } from "../../config";

export default function Travels({ travels }: any) {
  return (
    <Layout>
      <SEO title="TRIP" content="여행" />
      <div className="min-h-screen"></div>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getServerSideProps() {
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

  let travels;

  try {
    const res = await axios.request(options);
    travels = res.data.results;
  } catch (err) {
    console.log(err);
  }

  return {
    props: { travels },
  };
}
