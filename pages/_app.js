import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Drishti Makhijani</title>
        <meta
          name="description"
          content="Meet Drishti Makhijani a 20 year old , changing the world one period
          at a time .she is the founder of project qadira , a CS student,
          kathak dancer and a visual artist . She has a zest for food life and
          basically anything that challenges her . She is a go getter by heart
          and most importantly a sucker for pizza and happy endings ."
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="canonical" href="https://www.drishtimakhijani.com" />
        <meta
          name="keywords"
          content="Drishti Makhijani, Social Entrepreneur, Entrepreneur , Project Qadira, Drishti, Qadira"
        />
        <meta name="author" content="Drishti Makhijani" />

        {/* Social: Twitter */}
        <meta name="twitter:card" content="/assets/drishti.jpeg" />
        <meta
          name="twitter:site"
          content="https://www.https://www.drishtimakhijani.com"
        />
        <meta name="twitter:title" content="Drishti Makhijani" />
        <meta
          name="twitter:description"
          content="Meet Drishti Makhijani a 20 year old , changing the world one period
          at a time .she is the founder of project qadira , a CS student,
          kathak dancer and a visual artist . She has a zest for food life and
          basically anything that challenges her . She is a go getter by heart
          and most importantly a sucker for pizza and happy endings ."
        />
        <meta name="twitter:image:src" content="/assets/drishti.jpeg" />
        <meta name="twitter:image:alt" content="Drishti Makhijani" />

        {/* Social: Facebook / Open Graph */}
        <meta property="og:url" content="https://www.drishtimakhijani.com" />
        <meta property="og:type" content="Entrepreneur" />
        <meta property="og:title" content="Drishti Makhijani" />
        <meta property="og:image" content="/assets/drishti.jpeg" />
        <meta
          property="og:description"
          content="Meet Drishti Makhijani a 20 year old , changing the world one period
          at a time .she is the founder of project qadira , a CS student,
          kathak dancer and a visual artist . She has a zest for food life and
          basically anything that challenges her . She is a go getter by heart
          and most importantly a sucker for pizza and happy endings ."
        />
        <meta property="og:site_name" content="Drishti Makhijani" />

        {/* Social: Google+ / Schema.org */}
        <meta itemProp="name" content="Drishti Makhijani" />
        <meta
          itemProp="description"
          content="Meet Drishti Makhijani a 20 year old , changing the world one period
          at a time .she is the founder of project qadira , a CS student,
          kathak dancer and a visual artist . She has a zest for food life and
          basically anything that challenges her . She is a go getter by heart
          and most importantly a sucker for pizza and happy endings ."
        />
        <meta itemProp="image" content="/assets/drishti.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
