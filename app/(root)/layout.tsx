import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedin = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedin} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src={"/icons/logo.svg"}
            width={30}
            height={30}
            alt="menu icon"
          />

          <div>
            <MobileNav user={loggedin} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
