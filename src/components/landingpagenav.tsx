
const LandingPageNav = () => {
  return (
    <nav className="md:w-1/3 md:mr-20 font-semibold">
      <ul className="flex justify-end gap-5">
        <li>
          <a href="" className="text-white hover:text-yellow1 whitespace-nowrap text-[15px]">
            Guide
          </a>
        </li>
        <li>
          <a href="/login" className="text-white hover:text-yellow1 whitespace-nowrap text-[15px]">
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LandingPageNav;
