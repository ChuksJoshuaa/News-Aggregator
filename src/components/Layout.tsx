import { ChildrenProps } from "@/interface";
import { openSidebar, setLoader } from "@/redux/features/newsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";

const Layout = ({ children }: ChildrenProps) => {
  const dispatch = useAppDispatch();
  const [screenSize, setScreenSize] = useState<number | null>(null);
  const checkWidth = () => {
    let windowWidth = null;
    if (typeof window !== "undefined") {
      windowWidth = window?.innerWidth;
      setScreenSize(windowWidth);
    }
    if (windowWidth) {
      if (windowWidth <= 850) dispatch(openSidebar(true));
      if (windowWidth >= 850) dispatch(openSidebar(false));
      return windowWidth;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 300);
  });

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [screenSize]);
  return (
    <div className="main-container" style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
};

export default Layout;
