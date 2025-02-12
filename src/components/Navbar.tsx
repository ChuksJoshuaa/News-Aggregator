import toggleSvg from "@/assets/toggle.svg";
import { NavProfile } from "@/components";
import { openSidebar } from "@/redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";


const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.news);

  return (
    <div className="w-full h-[55px] relative bg-[#222]">
      <div
        className={`main-container flex flex-row justify-between tems-center w-full`}
      >
        <Link
          to="/"
          className="w-72 h-[55px]"
          style={{ fontFamily: "Lobster Two" }}
        >
          <h1
            className={`text-gray-50 text-3xl font-bold pt-2.5 ${
              !isSidebarOpen ? "ml-5" : "ml-0"
            }`}
            data-testid="navbar-title"
          >
            Innoscripta
          </h1>
        </Link>

        <div className={`mt-4 ${!isSidebarOpen ? "block" : "hidden"}`}>
          <div>
            <NavProfile />
          </div>
        </div>

        <div
          className={`mt-4 cursor-pointer ${!isSidebarOpen ? "hidden" : "block"}`}
          onClick={() => dispatch(openSidebar(true))}
        >
          <img src={toggleSvg} alt="search" className=" h-8 w-8 text-[#222]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
