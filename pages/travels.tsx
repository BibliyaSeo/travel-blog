import Layout from "../components/Layout";
import SEO from "../components/SEO";
import axios from "axios";
import { TOKEN, DATABASE_ID } from "../config";
import TravelItem from "../components/TravelItem";

export default function Travels({ travels }: any) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
        <SEO title="Travel" content="여행" />
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 여행 데이터:
          <span className="pl-4 text-blue-500">{travels.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 m-6 gap-8 w-full">
          {travels.map((item: any) => (
            <TravelItem key={item.id} data={item} />
          ))}
        </div>
      </div>
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
    // const travelNames = travels.map((travel: any) => travel.properties.Name.title[0].plain_text);
  } catch (err) {
    console.log(err);
  }

  return {
    props: { travels },
  };
}
