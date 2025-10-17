// app/layout.tsx
import './globals.css'; // Global Tailwind CSS imports
import Header from '@/components/Header'; // Điều chỉnh path nếu cần

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}