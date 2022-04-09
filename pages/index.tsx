import React, { useState } from 'react';

import useDebounce from 'hooks/useDebounce';
import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';

const DEFAULT_MESSAGE: string = '🎉Celebration Message🎉\nType a Message!';

function Home() {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const debouncedMessage = useDebounce(message, 500);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { currentTarget: { value } } = e;
    setMessage(value);
  };

  const handleSubmit = async () => {
    if (typeof navigator.share === 'undefined') {
      await navigator.clipboard.writeText(`https://celebration.minung.dev/message?m=${encodeURI(debouncedMessage)}`);
    } else {
      await navigator.share({
        url: `https://celebration.minung.dev/message?m=${encodeURI(debouncedMessage)}`,
      });
    }
  };

  return (
    <Layout>
      <iframe className="w-full h-96 border zoom-half" src={`/message?hideOgImage=true&m=${encodeURI(debouncedMessage)}`} />
      <div className="container">
        <div className="form-control">
          <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Type in Message!" value={message} onChange={handleChange} />
        </div>
        <CopyModal.Button onClick={handleSubmit} />
      </div>
      <CopyModal.Modal />
    </Layout>
  );
}

export default Home;
