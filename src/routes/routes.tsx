import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';




const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/*" index element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;