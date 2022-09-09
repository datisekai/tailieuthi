import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../redux";
import { Toaster } from "react-hot-toast";
import ThemeLayout from "../components/layout/ThemeLayout";
import AuthLayout from "../components/layout/AuthLayout";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeLayout>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
          <Toaster />
        </ThemeLayout>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
