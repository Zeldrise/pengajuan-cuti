import Header from "../ui/dashboard/system/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="fixed w-full top-0">
        <Header />
      </div>
      <div className="mt-[50px]">{children}</div>
    </div>
  );
}
