import { Outlet } from "react-router";

import { Header } from "../components/Header";
import { useWindowSize } from "../hooks/useWindowSize";
import { Sidebar } from "../components/Sidebar";

export function MainLayout() {
    const size = useWindowSize();

  return (
    <>
      <div className="items-center justify-around bg-gray-50 h-screen">
        <Header />
          <nav className="flex mx-auto sm:h-full z-40">
                <div className="flex items-center justify-center w-full h-full shadow-md sm:w-fit rounded-2xl">
                  {size.height <= 760 ? null : <Sidebar />}
                </div>
              </nav>
        <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto bg-red-300 dark:bg-gray-700 rounded-3xl">
          <div className="relative flex flex-col w-full h-full gap-16 mx-auto">
            <div className="flex flex-col gap-16 sm:h-full">
              <div>
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
