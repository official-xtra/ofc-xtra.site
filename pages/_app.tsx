import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/layouts/Layout";
import { DefaultSeo } from "next-seo";
import "@fontsource/inter";
import theme from "../styles/theme";
import Head from "next/head";
import seo from "../config/seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <DefaultSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          title: seo.title,
          description: seo.description,
          type: seo.type,
          site_name: seo.title,
          images: [
            {
              url: `${seo.url}/opengraph.png`,
              width: seo.openGraph.width,
              height: seo.openGraph.height,
              alt: `${seo.title} OG Image`,
            },
          ],
        }}
      />

      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
