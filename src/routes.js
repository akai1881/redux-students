import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
