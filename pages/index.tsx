import React, { useState } from 'react';
import { useRouter } from 'next/router';

import useDebounce from 'hooks/useDebounce';
import Layout from 'components/Layout';


function Home() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const debouncedMessage = useDebounce(message, 500);

  const handleChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { currentTarget: { value } } = e;
    setMessage(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { message } = Object.fromEntries(formData);

    router.push({ pathname: '/message', query: { m: message as string }});
  };

  return (
    <Layout>
      <form className="w-full max-w-xs" onSubmit={handleSubmit}>
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Message</span>
          </label>  */}
          <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Message" onChange={handleChange} />
        </div>
        <button className="btn btn-block mt-4" type="submit">Create Link</button>
      </form>
      
      <h4 className="text-xl font-bold">Preview</h4>
      <iframe className="w-full h-80 border zoom-half" src={`/message?m=${debouncedMessage}`} />
    </Layout>
  );
}

export default Home;
