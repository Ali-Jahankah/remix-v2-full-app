import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import shared from '~/styles/shared.css?url';
import MainHeader from '~/components/navigation/MainHeader';

export const meta = () => {
  return [
    {
      charset: 'utf-8',
      title: 'New Remix App',
      viewport: 'width=device-width,initial-scale=1'
    }
  ];
};
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainHeader />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: shared
    }
  ];
}
export default function App() {
  return <Outlet />;
}
