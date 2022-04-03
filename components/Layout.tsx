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