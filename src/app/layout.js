import StoreProvider from "@/lib/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "Discwords",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
      </head>
        <body>
          <StoreProvider>
            {children}
          </StoreProvider>
        </body>
    </html>
  );
}
