import { useEffect } from "react";
import BOT_IMG from "@/assets/bot.png";
const { Kakao } = window;

export const Share = () => {
  const realUrl = "https://golang-ktb.site";
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = window.location.href;

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(import.meta.env.VITE_KAKAO);
    // 잘 적용되면 true 를 뱉는다.
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "고랭",
        description: "우리들의 건강한 대화 스킬을 위한 고랭",
        imageUrl: BOT_IMG,
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <button
        className="grey-btn"
        onClick={() => {
          shareKakao();
        }}
      >
        카카오톡 공유하기
      </button>
    </>
  );
};
