import { css } from '@emotion/css';

export const container = ({ height, width }: { height: number | undefined, width: number | undefined }) => css`
  aspect-ratio: ${ width } / ${ height };
  position: relative;
  width: 100%;
`;
