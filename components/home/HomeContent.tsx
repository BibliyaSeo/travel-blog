import TripAnimation from "./TripAnimation";

export default function HomeContent() {
  return (
    // <div className="grid md:grid-cols-2 w-full gap-4">
    <div className="w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto">
      <div className="bg-slate-100">
        <TripAnimation />
      </div>
    </div>
  );
}
