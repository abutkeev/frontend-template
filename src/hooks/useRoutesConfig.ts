import React from 'react';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';

interface Route {
  readonly pageTitle: string;
  readonly Component: React.ComponentType<any>;
  readonly root?: true;
}

type Routes = [path: string, route: { pageTitle: string; Component: React.ComponentType<any> }][];

const pages: Record<string, Route> = {
  '/main': {
    root: true,
    pageTitle: 'Main page',
    Component: MainPage,
  },
  '*': {
    pageTitle: 'Page not found',
    Component: NotFound,
  },
};

const useRoutesConfig = (): Routes => {
  const routes: Routes = Object.entries(pages).map(([page, { pageTitle, Component }]) => [
    page,
    { pageTitle, Component },
  ]);

  if (!('/' in pages)) {
    const pagesArray = Object.entries(pages);
    const root = pagesArray.find(([, { root }]) => root);
    const first = pagesArray[0];
    if (root || first) {
      const [, { pageTitle, Component }] = root ?? first;
      routes.push(['/', { pageTitle, Component }]);
    }
  }
  return routes;
};

export default useRoutesConfig;
