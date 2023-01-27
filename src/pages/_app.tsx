import '../../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage, GetServerSideProps } from 'next';
import type { AppProps } from 'next/app'
import { prisma } from '../backend/lib/prisma';
import isAuth from '../backend/lib/auth';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}