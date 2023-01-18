import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from "../components/header/Header";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Codino 404' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; { title }</title>
      </Head>

      <Header isErrorPage />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}