import Post from "../components/post";
import Userimgcp from "../components/userimgcp";
import { user } from "../asset/images";

export default function Home() {
  return (
    <div className="my-2 max-w-[450px] mx-auto">
      <div className="flex w-full py-2 my-2 items-center">
        <Userimgcp src={user} />
        <input type="text" placeholder="Start a thread" className="w-full bg-transparent py-2 px-3 placeholder:text-gray-t text-white flex outline-none" />
        <button className="bg-white py-1 px-3 font-bold text-black rounded-lg">
          Post
        </button>
      </div>
      <hr className="bg-gray-t-l" />
      <Post />
      <hr className="bg-gray-t-l my-2" />
    </div>
  );
}
