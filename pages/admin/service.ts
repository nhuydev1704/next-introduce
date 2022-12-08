import axios from 'axios';

export const adminService = {
    updateHome: (data: any) => {
        return axios.put('/api/home', data);
    },
};
