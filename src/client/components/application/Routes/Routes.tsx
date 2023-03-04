import type { FC } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Top = lazy(() => import('../../../pages/Top'));
const NotFound = lazy(() => import('../../../pages/NotFound'));
const Order = lazy(() => import('../../../pages/Order'));
const OrderComplete = lazy(() => import('../../../pages/OrderComplete'));
const ProductDetail = lazy(() => import('../../../pages/ProductDetail'));

import { useScrollToTop } from './hooks';

export const Router: FC = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route index element={<Top />} path="/" />
      <Route element={<ProductDetail />} path="/product/:productId" />
      <Route element={<Order />} path="/order" />
      <Route element={<OrderComplete />} path="/order/complete" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};
