import Script from 'next/script';
import { useRouter } from 'next/router';

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
        <div className="max-w-md px-4 text-4xl font-extrabold animate-bounce work-keep-all">{m}</div>
      </div>
    </>
  );
}

export default Message;
