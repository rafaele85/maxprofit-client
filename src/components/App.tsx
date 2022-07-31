import styled from "styled-components";
import {MaxProfitForm} from "./MaxProfitForm";

export const App = () => {
  return (
      <Root>
          <MaxProfitForm />
      </Root>
  )
}

const Root = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`