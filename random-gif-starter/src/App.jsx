import Random from "./components.js/Random";
import Tag from "./components.js/tag";
export default function App() {
  return (
    <div className="w-screen h-screen background flex flex-col items-center overflow-x-hidden">
      <div className="w-[1160px] mt-4">
        <h1 className=" text-center border bg-white px-5 py-3 rounded-lg font-bold text-[25px] ">
          RANDOM GIFS
        </h1>
      </div>

      <div className="w-full">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
