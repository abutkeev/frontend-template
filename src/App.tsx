import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import PageTitle from './components/common/PageTitle';
import routes from './routes';

function App() {
    return (
        <>
            <PageTitle />
            <Paper sx={{ mx: { md: 'auto' }, my: 1, p: 1, maxWidth: 'md', width: { md: '100%' }, height: '100vh', backgroundColor: '#fafafa' }}>
                <Routes>
                    {routes.map(([path, { Component }]) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                </Routes>
            </Paper>
        </>
    );
}

export default App;
