import SideBar from "@/components/SideBar";

export const dynamic = 'force-dynamic'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedin = {
    firstName: "John",
    lastName: "Doe",
  }
  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedin} /> 
    {children}</main>
  );
}