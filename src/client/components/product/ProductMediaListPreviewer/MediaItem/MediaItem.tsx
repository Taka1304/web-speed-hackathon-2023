import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import { getMediaType } from '../../../../utils/get_media_type';
import { Icon } from '../../../foundation/Icon';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItem.styles';

type Props = {
  file: MediaFileFragmentResponse;
};
const REG = /[0-9]{3}/

export const MediaItem: FC<Props> = ({ file }) => {
  const [imageSrc, setImageSrc] = useState<string>();
  const mediaType = getMediaType(file.filename);
  useEffect(() => {
    if (mediaType === 'image') {
      return setImageSrc(file.filename);
    }
    const videoNumber = file.filename.match(REG)
    setImageSrc(`/images/thumbnail/${videoNumber}.webp`)
  }, [file.filename, mediaType]);

  if (imageSrc === undefined) {
    return null;
  }

  return (
    <div className={styles.container()}>
      <Image fill src={imageSrc} />
      {mediaType === 'video' && (
        <div className={styles.playIcon()}>
          <Icon color="#ffffff" height={16} icon="play-solid" width={16} />
        </div>
      )}
    </div>
  );
};
