import http from '../service';

export const deleteUser = (id) => {
    return http.delete(`/contact/${id}`);
};

export const createUser = (user) => {
    return http.post(`/contact/`, user);
};

export const editUser = (user) => {};
