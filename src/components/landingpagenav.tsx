import Link from "next/link";
const LandingPageNav = () => {
  return (
    <nav className="md:w-1/3 md:mr-20 font-semibold">
      <ul className="flex justify-end gap-5">
        <li>
          <Link href="/main/guide" className="text-white hover:text-yellow1 whitespace-nowrap text-[15px]">
            Guide
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-white hover:text-yellow1 whitespace-nowrap text-[15px]">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandingPageNav;
