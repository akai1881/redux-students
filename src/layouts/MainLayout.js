import Header from './../components/Header/Header';
import Container from '../components/Container/Container';
import { Modal } from 'antd';
import { useState } from 'react';
import CreateModal from '../shared/CreateModal/CreateModal';

const MainLayout = ({ children }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const onOpenModal = () => {
        setModalVisible(true);
    };

    const onCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="wrapper">
            <CreateModal visible={isModalVisible} onCloseModal={onCloseModal} />
            <Header onOpenModal={onOpenModal} />
            <Container>{children}</Container>
        </div>
    );
};

export default MainLayout;
