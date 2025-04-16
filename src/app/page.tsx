import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url(/boatinsea.jpg)] h-screen w-screen bg-cover bg-center p-10">
        <div className="flex justify-between items-center">
          <div className="w-2/3">
            <Image src="/alyeqeenLogo.png" alt="A boat in the sea" height={200} width={200} />
          </div>

          <nav className="w-1/3 mr-20 font-semibold">
            <ul className="flex justify-end gap-5">
              <li>
                <a href="" className="text-white">
                  Help
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Log in
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
