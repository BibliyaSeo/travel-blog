import Link from "next/link";
import TravelAnimation from "./travelAnimation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          여행 가장
        </h1>
        <p className="mb-8 leading-relaxed">
          인류의 인간에 행복스럽고 산야에 뭇 구하지 스며들어 장식하는 이것이다. 쓸쓸한 커다란 보내는
          긴지라 과실이 아니다. 원질이 만물은 무엇을 가치를 힘있다. 노래하며 인간의 보배를 끓는
          쓸쓸하랴? 놀이 끓는 찾아다녀도, 어디 오직 인간에 능히 이것이다. 위하여, 그들에게 공자는
          미인을 싸인 것이 오직 열매를 것이다. 열락의 설산에서 소담스러운 미인을 대중을 같은 별과
          끓는 부패뿐이다. 무한한 봄날의 놀이 열락의 위하여 피가 것이다. 이상의 인간의 심장의 바로
          피가 않는 얼음과 있는가? 과실이 뭇 위하여, 대중을 반짝이는 없는 인간의 싸인 공자는
          황금시대다. 이상은 그러므로 바이며, 맺어, 이성은 곳으로 때까지 인간에 있으랴?
        </p>
        <div className="flex justify-center">
          <Link legacyBehavior href="/travels">
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              여행 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <TravelAnimation />
      </div>
    </>
  );
}
