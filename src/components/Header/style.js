import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem 0 1.5rem;
  font-family: "EF_jejudoldam", sans-serif;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.background || "white"};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;
