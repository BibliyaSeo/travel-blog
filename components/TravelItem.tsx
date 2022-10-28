import Image from "next/image";

const imageCss = { width: "100%", height: "auto" };

export default function TravelItem({ data }: any) {
  const travelName = data.properties.Name.title[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="flex flex-col m-3 bg-slate-400 rounded-xl w-full">
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
