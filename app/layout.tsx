import { FeatureProvider } from "@/context/feature.context"
import { ToastContainer } from "react-toastify"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <FeatureProvider>
          {children}
        </FeatureProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
