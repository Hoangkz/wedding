import { ToastContainer } from 'react-toastify';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}