import type { FC } from 'react';
import { memo } from 'react';

import type { OrderFragmentResponse } from '../../../graphql/fragments';
import { useTotalPrice } from '../../../hooks/useTotalPrice';
import { format } from '../../../utils/format_price_jpn';
import { CartItem } from '../CartItem';

import * as styles from './OrderPreview.styles';

type Props = {
  order: OrderFragmentResponse;
  onUpdateCartItem: (productId: number, amount: number) => void;
  onRemoveCartItem: (productId: number) => void;
};

export const OrderPreview: FC<Props> = memo(({ onRemoveCartItem, onUpdateCartItem, order }) => {
  const { totalPrice } = useTotalPrice(order);

  return (
    <div className={styles.container()}>
      <ul className={styles.itemList()}>
        {order.items.map((item) => {
          return (
            <li key={item.product.id}>
              <CartItem item={item} onRemove={onRemoveCartItem} onUpdate={onUpdateCartItem} />
            </li>
          );
        })}
      </ul>
      <p className={styles.totalPrice()}>{format(totalPrice)}</p>
    </div>
  );
});

OrderPreview.displayName = 'OrderPreview';
