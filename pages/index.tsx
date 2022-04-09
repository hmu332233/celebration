import React, { useEffect, useState } from 'react';

import useDebounce from 'hooks/useDebounce';
import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';

const DEFAULT_MESSAGE: string = '🎉Celebration Message🎉\nType a Message!';

function Home() {
  const [showShareButton, setShowShareButton] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const debouncedMessage = useDebounce(message, 500);

  useEffect(() => {
    setShowShareButton(typeof navigator.share === 'undefined');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { currentTarget: { value } } = e;
    setMessage(value);
  };

  const handleSubmit = async () => {
    await navigator.clipboard.writeText(`https://celebration.minung.dev/message?m=${encodeURI(debouncedMessage)}`);
  };

  const handleShareClick = async () => {
    await navigator.share({
      url: `https://celebration.minung.dev/message?m=${encodeURI(debouncedMessage)}`,
    });
  };

  return (
    <Layout>
      <iframe className="w-full h-96 border zoom-half" src={`/message?hideOgImage=true&m=${encodeURI(debouncedMessage)}`} />
      <div className="container">
        <div className="form-control">
          <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Type in Message!" value={message} onChange={handleChange} />
        </div>
        <CopyModal.Button onClick={handleSubmit} />
        {showShareButton && (
          <button className="btn btn-outline btn-block mt-4" onClick={handleShareClick}>Share Link</button>
        )}
      </div>
      <CopyModal.Modal />
    </Layout>
  );
}

export default Home;
