import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const animation = keyframes`
  from{
    transform:rotate(0deg);
    border-radius: 0px
  } to {
    transform:rotate(360deg);
    border-radius: 100px
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 100px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
