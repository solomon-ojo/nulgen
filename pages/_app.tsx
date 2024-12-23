import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";
import { Progress } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => setLoading(true);
    const handleRouteEnd = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
    router.events.on("routeChangeError", handleRouteEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteEnd);
      router.events.off("routeChangeError", handleRouteEnd);
    };
  }, [router]);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        {loading && (
          <Progress size="sm" isIndeterminate aria-label="Loading..." />
        )}
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Europe/London"
          messages={pageProps.messages}
        >
          <SessionProvider session={pageProps.session}>
            <React.StrictMode>
              <Component {...pageProps} />
            </React.StrictMode>
            <ToastContainer />
          </SessionProvider>
        </NextIntlClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
