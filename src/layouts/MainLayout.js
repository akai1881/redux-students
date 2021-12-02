import Header from './../components/Header/Header';
import Container from '../components/Container/Container';

const MainLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <Container>{children}</Container>
        </div>
    );
};

export default MainLayout;
