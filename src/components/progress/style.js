import styled from "styled-components";
import { media } from "../../theme/media-queries";

const ProgressOuter = styled.div`
  height: 20px;
  width: 90%;
  background-color: ${p => p.theme.colors.darkgrey};
  border-radius: 0;
  margin: 30px auto;

  ${media.tablet`
    width: 60%;
  `}
`;

const ProgressInner = styled.div`
  background-color: ${p => p.theme.colors.teal};
  height: 100%;
  width: ${p => p.completed}%;
  border-radius: inherit;
  text-align: right;
`;

const ProgressPercent = styled.p`
  padding: 5px;
  color: ${p => p.theme.colors.white};
  font-weight: bold;
`;

export { ProgressInner, ProgressOuter, ProgressPercent };