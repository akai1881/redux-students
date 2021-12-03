import React from 'react';
import Container from '../Container/Container';
import './header.scss';

const Header = ({ onOpenModal }) => {
    const handleOpenModal = (e) => {
        e.preventDefault();
        onOpenModal();
    };

    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <p className="header__title">Users</p>
                    <nav className="nav ">
                        <a href="#" className="nav__link">
                            User list
                        </a>
                        <a href="#" className="nav__link" onClick={handleOpenModal}>
                            Create User
                        </a>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
