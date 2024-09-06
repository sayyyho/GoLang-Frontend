import * as S from "./style";
import { useEffect } from "react";
import { Header } from "@/components/Header/Header";
import LAYOUT from "@/assets/share.png";
const { Kakao } = window;

export const Share = () => {
  const realUrl = "https://golang-ktb.site";

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
        description: "건강한 대화 스킬을 위한 고랭",
        imageUrl: "https://avatars.githubusercontent.com/u/180408204?s=200&v=4",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "건강한 대화 스킬 배우러 가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <S.Layout
      style={{
        backgroundImage: `url(${LAYOUT})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header>2인 채팅</Header>
      <S.Box>
        <p
          style={{
            color: "#647DC3",
            fontFamily: "Nunito",
            fontWeight: 700,
          }}
        >
          갈등 해결 채팅방
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              shareKakao();
            }}
          >
            <p
              style={{
                color: "#647DC3",
                fontFamily: "Nunito",
                fontSize: "26px",
                fontWeight: 700,
              }}
            >
              채팅방 코드 보내기
            </p>
            <S.ShareImg />
          </div>

          <p
            style={{
              color: "#647DC3",
              fontFamily: "Nunito",
              fontSize: "20px",
              fontWeight: 700,
            }}
            className="grey-btn"
          >
            {localStorage.getItem("chatroomUUID")}
          </p>
        </div>
      </S.Box>
      <S.CustomBtn>
        <S.Text color="white">채팅방 입장하기</S.Text>
      </S.CustomBtn>
    </S.Layout>
  );
};
