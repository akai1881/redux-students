import { Modal } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/actions/usersActions';

const schema = yup.object({
    first_name: yup.string().required('Имя не должно быть пустым'),
    last_name: yup.string().required('Фамилия не должна быть пустым'),
    birth_date: yup.string().required(),
    gender: yup.string().required(),
    job: yup.string().required(),
    biography: yup.string().max(256).required(),
});

const CreateModal = ({ visible, onCloseModal }) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            await createUser({ ...data, is_active: false });
            onCloseModal();
            reset();
            dispatch(fetchUsers());
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Modal title="Basic Modal" visible={visible} onCancel={onCloseModal} onOk={handleSubmit(onSubmit)}>
            <form className="form__create">
                <input {...register('first_name')} type="text" placeholder="First name" />
                <p className="error-msg">{errors?.first_name?.message}</p>
                <input {...register('last_name')} type="text" placeholder="Last name" />
                <p className="error-msg">{errors?.last_name?.message}</p>
                <input {...register('birth_date')} type="date" placeholder="Date of birth" />
                <p className="error-msg">{errors?.birth_date?.message}</p>
                <input {...register('job')} type="text" placeholder="Job" />
                <p className="error-msg">{errors?.job?.message}</p>
                <label htmlFor="gender">Gender</label>
                <select {...register('gender')} id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <p className="error-msg">{errors?.gender?.message}</p>
                <textarea {...register('biography')} cols="30" rows="10" placeholder="biography"></textarea>
                <p className="error-msg">{errors?.biography?.message}</p>
            </form>
        </Modal>
    );
};

export default CreateModal;
