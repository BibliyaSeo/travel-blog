import Image from "next/image";
import Router from "next/router";

const imageCss = { width: "100%", height: "65%" };

export default function TravelItem({ data, id }: any) {
  const travelName = data.properties.Name.title[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  const goToDetail = (e: any) => {
    e.preventDefault;
    console.log(e.currentTarget.id);
    Router.push(`/travels/${e.currentTarget.id}`);
  };

  return (
    <div
      id={id}
      className="flex flex-col m-3 bg-slate-400 rounded-xl w-full cursor-pointer"
      onClick={goToDetail}
    >
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt={"image"}
        width="100"
        height="100"
        style={imageCss}
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1>{travelName}</h1>
      </div>
    </div>
  );
}
