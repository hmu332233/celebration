import type { NextPage } from 'next'
import Script from 'next/script';

// import party from 'party-js';

const Home: NextPage = () => {
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
        <div id="asdf" className="text-4xl font-extrabold animate-bounce">정답입니다~</div>
      </div>
    </>
  );
}

export default Home;
