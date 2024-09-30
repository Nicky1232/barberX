import { Alumni_Sans } from "next/font/google";

const alumni = Alumni_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "За мен | Мъжко Подстригване Ring Mall",
  description: "Посетете най-добрия барбър и фризьор в Ring Mall, Beauty Boutique. Отлично подстригване за мъже и деца, стилни прически за всеки вкус.",
  keywords: "Barber, Барбър, Бръснар, Брада, Фризьор, Подстригване, Мъжко подстригване, Детско Подстригване, Ring Mall, Beauty Botique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className={alumni.className}>{children}</body>
    </html>
  );
}
