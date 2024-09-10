
import Navbar from "../components/shared/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
