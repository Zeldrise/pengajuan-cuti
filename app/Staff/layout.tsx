import SideNav from "../ui/dashboard/staff/sidenav";
import Header from "../ui/dashboard/staff/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="fixed w-full top-0">
        <Header />
      </div>
      <div className="flex flex-col h-screen md:flex-row md:overflow-hidden ">
        <div className="w-full mt-[55px] flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow lg:mt-[30px] md:mt-[30px] p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}