import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  height: 78px;
  margin: auto;
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Div.Left = styled.div`
  img {
    cursor: pointer;
  }
`;
Div.Middle = styled.div`
  display: flex;
  gap: 50px;
  font-family: Cera Pro;
  font-size: 16px;
  font-weight: 700;
  line-height: 20.11px;
  text-align: left;

  h3 {
    cursor: pointer;
  }
  h3:hover {
    color: red;
  }
`;
Div.Right = styled.div``;

export { Div };
