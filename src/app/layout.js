import { Container } from "@/components/container";
import "./globals.css";
import Navbar from "@/components/pages/shared/navbar/navbar";

export const metadata = {
  title: "E-commerce app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
