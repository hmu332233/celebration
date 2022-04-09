import Head from 'next/head';
import { useRouter } from 'next/router';

import CelebrationBox from 'components/CelebrationBox';

function Message() {
  const router = useRouter();
  const { m: message = '', hideOgImage } = router.query;
  const showOgImage = hideOgImage !== 'true';
  return (
    <>
      {showOgImage && (
        <Head>
          <meta property="og:image" content={`https://celebration.minung.dev/api/meta-image?message=${encodeURI(message as string)}`} />
        </Head>
      )}
      <CelebrationBox message={message as string} />
    </>
  );
}

export default Message;
