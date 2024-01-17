import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import type { AppType } from "next/app"
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "~/components/ui/toaster"
import { api } from "~/utils/api"

import "../styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style jsx global>{`
				:root {
          --font-sans: ${fontSans?.style?.fontFamily};
				}
			}`}</style>
      <SessionProvider session={session}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          forcedTheme="dark"
        >
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default api?.withTRPC(MyApp)
