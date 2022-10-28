import HomeContent from "../components/home/HomeContent";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" content="여행, 어디 갈까?" />
      <section className="min-h-screen flex flex-col">
        <div className="container mx-auto min-h-screen flex px-5 py-10 md:flex-row flex-col items-center justify-center">
          <HomeContent />
        </div>
      </section>
    </Layout>
  );
}
