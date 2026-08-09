import { Outlet } from "react-router";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <div className="items-center justify-around bg-gray-50 h-screen">
        <Header />
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
