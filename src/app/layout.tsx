"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import { Provider } from "react-redux";
import store from "./state/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "OTT Video Acceralator",
//   description: "Creates an OTT player",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
