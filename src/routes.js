import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
