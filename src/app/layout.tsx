import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTT Video Acceralator",
  description: "Creates an OTT player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
