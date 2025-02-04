import { ApolloProvider, SuspenseCache } from '@apollo/client';
import type { FC, ReactNode } from 'react';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const Fallback = lazy(() => import('../../../pages/Fallback'));
import { apolloClient } from '../../../utils//apollo_client';

type Props = {
  children: ReactNode;
};

const suspenseCache = new SuspenseCache();

export const Providers: FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient} suspenseCache={suspenseCache}>
    <BrowserRouter>
      <RecoilRoot>
        <ErrorBoundary fallbackRender={Fallback}>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  </ApolloProvider>
);
