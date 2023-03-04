import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  // 遷移した時に、ページの先頭までスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
