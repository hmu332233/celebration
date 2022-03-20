import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function Message() {
  const router = useRouter();
  const { m } = router.query;

  const onLoad = () => {
    window.party.confetti(document.body, {
      shapes: ["star", "roundedSquare"],
      count: 100,
      size: 1.5,
    });
  };

  return (
    <>
      <Script id="party-js" src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"  onLoad={onLoad} />
      <div className="flex justify-center items-center h-screen">
        <div id="asdf" className="text-4xl font-extrabold animate-bounce">{m}</div>
      </div>
    </>
  );
}

export default Message;
