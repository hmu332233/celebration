import React, { useState } from 'react';

import useDebounce from 'hooks/useDebounce';
import Layout from 'components/Layout';

const DEFAULT_MESSAGE: string = '🎉Celebration Message🎉\nType a Message!';

function Home() {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const debouncedMessage = useDebounce(message, 500);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { currentTarget: { value } } = e;
    setMessage(value);
  };

  const handleSubmit = async () => {
    await navigator.clipboard.writeText(`https://celebration.minung.dev/message?m=${encodeURI(debouncedMessage)}`);
    alert('Copied!');
  };

  return (
    <Layout>
      <iframe className="w-full h-96 border zoom-half" src={`/message?m=${encodeURI(debouncedMessage)}`} />
      <div className="container">
        <div className="form-control">
          <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Type in Message!" value={message} onChange={handleChange} />
        </div>
        <button className="btn btn-block mt-4" onClick={handleSubmit}>Copy Link</button>
      </div>
    </Layout>
  );
}

export default Home;
