import classNames from 'classnames';
import type { FC } from 'react';

import * as styles from './Icon.styles';

type Props = {
  icon: string
  width: number;
  height: number;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, icon, width }) => {
  return (
    <span className={classNames(styles.container({ color, height, width }))}>
      <img src={`/icons/${icon}.svg`} />
    </span>
  );
};