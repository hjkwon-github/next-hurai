import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "next hurai",
  description: "Next.js, DaisyUI와 함께하는 프로젝트 시작점",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" data-theme="light"><body>{children}</body></html>;
}
