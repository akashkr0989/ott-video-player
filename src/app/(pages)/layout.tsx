import { Container, CssBaseline } from "@mui/material";
import Header from "../shared/components/header/page";
import { SnackbarProvider } from "../shared/components/snackbar/page";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <Container maxWidth={false} style={{ padding: "0 0" }}>
          {children}
        </Container>
    </>
  );
}
