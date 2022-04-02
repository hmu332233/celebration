import { useRouter } from 'next/router';

import CelebrationBox from 'components/CelebrationBox';

function Message() {
  const router = useRouter();
  const { m: message } = router.query;

  return (
    <CelebrationBox message={message as string} />
  );
}

export default Message;
