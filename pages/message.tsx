import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import CelebrationBox from 'components/CelebrationBox';

type Props = {
  message: string,
  showOgImage: boolean,
};

function Message({
  message,
  showOgImage,
}: Props) {
  return (
    <>
      {showOgImage && (
        <Head>
          <meta property="og:image" content={`https://celebration.minung.dev/api/meta-image?message=${encodeURI(message)}`} />
        </Head>
      )}
      <CelebrationBox message={message as string} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { m: message, hideOgImage } = query;
  const showOgImage = hideOgImage !== 'true';
  return {
    props: {
      message,
      showOgImage,
    },
  }
}

export default Message;
