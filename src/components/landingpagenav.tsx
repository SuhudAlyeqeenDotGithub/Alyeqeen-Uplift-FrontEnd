
const LandingPageNav = () => {
  return (
    <nav className="w-1/3 mr-20 font-semibold">
      <ul className="flex justify-end gap-5">
        <li>
          <a href="" className="text-white hover:text-yellow1">
            Help
          </a>
        </li>
        <li>
          <a href="/login" className="text-white hover:text-yellow1">
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LandingPageNav;
