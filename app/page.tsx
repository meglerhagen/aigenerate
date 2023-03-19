import Link from "next/link";

export default function Home() {
  return (

    <div className="bg-black mt-10 flex items-center justify-center">
      <div className="flex items-center justify-center text-md font-semibold text-gray-300">asds</div>
        <div>
          <div className="py-8 px-48">
          <Link href={"/aipicture"} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 rounded-lg py-3 px-4 ml-1 font-semibold">Go to picture</Link>
          </div>
        </div>
    </div>
  );
}

