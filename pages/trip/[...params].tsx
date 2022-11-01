import { useRouter } from "next/router";
import SEO from "../../components/SEO";

export default function Detail({ params }: any) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <SEO title={title} content={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: { params },
  };
}
