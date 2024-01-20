import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 10px 30px;
  display: flex;

  @media screen and (min-width: 1200px) {
    max-width: 1120px;
  }
  @media screen and (min-width: 992px) {
    max-width: 968px;
  }
  @media screen and (min-width: 768) {
    max-width: 660px;
  }
  @media screen and (min-width: 576) {
    max-width: 576px;
  }
`;