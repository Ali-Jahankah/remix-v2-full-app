import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import sharedStyles from '~/styles/shared.css';
import './tailwind.css';
import MainHeader from '~/components/navigation/MainHeader';
export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: sharedStyles
  }
];

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

export default function App() {
  return <Outlet />;
}
