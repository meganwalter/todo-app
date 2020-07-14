// @flow

import styled from "styled-components";
import { media } from "../../theme/media-queries";

const baseSpacing = 10;
const contentMaxWidth = 80 * baseSpacing;
const contentPadding = 8 * baseSpacing;
const mobilePadding = 3 * baseSpacing;


const ContentContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${mobilePadding}px;
  text-align: center;
  background-color: #0b0c10;
  color: #c5c6c7;

  ${media.desktop`
    max-width: ${contentMaxWidth}px;
    margin: 0 auto;
    padding: 0 ${contentPadding}px;
  `}
`;

const TwoColContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${p => p.theme.colors.darkgrey};
  min-height: 500px;
  
  ${media.tablet`
    flex-wrap: nowrap;
  `}
`;

const Col = styled.div`
  width: 100%;

  ${media.tablet`
    width: 50%;

    :first-child {
      border-right: 1px solid ${p => p.theme.colors.black};
    }
  `}
`;

export { ContentContainer, TwoColContainer, Col };
