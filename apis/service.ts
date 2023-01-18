import axios from 'axios';

export const adminService = {
    updateHome: (data: any) => {
        return axios.patch('/api/home', data);
    },
};
