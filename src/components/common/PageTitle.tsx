import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import routes from '../../routes';

const PageTitle: FC = () => (
    <div>
        <AppBar>
            <Toolbar>
                <Routes>
                    {routes.map(([path, { pageTitle }]) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <HelmetProvider>
                                    <Helmet>
                                        <title>{pageTitle}</title>
                                    </Helmet>
                                    <Typography variant='h6'>{pageTitle}</Typography>
                                </HelmetProvider>
                            }
                        />
                    ))}
                </Routes>
            </Toolbar>
        </AppBar>
        <Toolbar />
    </div>
);
export default PageTitle;
