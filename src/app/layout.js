import localFont from 'next/font/local';
import "./globals.css";
import Provider from "./Provider";
import Navbar from "./(components)/Navbar";

const quicksand = localFont({
  src: [
    { path: 'Quicksand.ttf' },
  ],
  variable: '--font-quicksand'
})

const neutro = localFont({
  src: [
    { path: 'Neutro-Bold.otf' },
  ],
  variable: '--font-neutro'
})

export const metadata = {
  title: "Muzammil Ansari",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${neutro.variable}`}>
        <Provider>
            <Navbar />
            {children}
        </Provider>
      </body>
    </html>
  );
}
