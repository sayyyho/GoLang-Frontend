import * as S from "./style";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const EndButton = ({ children }) => {
  const handleFinish = () => {
    Swal.fire({
      title: "종료하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
      confirmButtonColor: "#429f50",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        location.href = "/";
      }
    });
  };

  return <S.StyledButton onClick={handleFinish}>{children}</S.StyledButton>;
};
