import Head from 'next/head';
import { useRouter } from 'next/router';

import CelebrationBox from 'components/CelebrationBox';

function Message() {
  const router = useRouter();
  const { m: message } = router.query;

  return (
    <>
      <Head>
        <meta property="og:image" content={`/api/meta-image?message=${message}`} />
      </Head>
      <CelebrationBox message={message as string} />
    </>
  );
}

export default Message;
