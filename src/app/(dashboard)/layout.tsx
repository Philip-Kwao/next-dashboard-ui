import DashboardNavbar from "./_components/DashboardNavbar";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full bg-gray-100">
      {/* LEFT */}
      <Sidebar />
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] ">
        {/* Head */}
        <DashboardNavbar />
        {/* Body */}
        {children}
      </div>
    </div>
  );
}
