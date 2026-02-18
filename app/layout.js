
import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Deal Drop",
  description: "A platform to get discover about the best deals .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
