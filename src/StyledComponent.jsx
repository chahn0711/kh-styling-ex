// 하나의 파일에 넣어서 작업하기 위해, 프록스로 값 적용가능?
import styled, { css } from "styled-components";
// div태그에 스타일링 하는데 그 이름이 박스
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: lrem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  /* 프록스 넣기 : css를 재스타일링 하기 위해 백틱 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box>
      <Button>안녕하세요.</Button>
      <Button inverted={true}>테두리만 나옴</Button>
    </Box>
  );
};
export default StyledComponent;
