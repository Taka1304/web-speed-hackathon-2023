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
    <img className={classNames(styles.container({ color, height, width }))} src={`/icons/${icon}.svg`} />
  );
};