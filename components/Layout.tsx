import React from 'react';
import Head from 'next/head';

// import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Celebration</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celebration.minung.dev/" />
        <meta property="og:title" content="Celebration"/>
        <meta property="og:description" content="Show a message with visual effects" />
        <meta property="og:image" content="https://celebration.minung.dev/meta-image?message=Celebration" />
        <meta property="og:site_name" content="Celebration"/>
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="720" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="grow flex flex-col justify-center items-center gap-y-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;