import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from 'server/config';
import home from 'server/models/home';
connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
    switch (req.method) {
        case 'GET':
            await getHome(req, res);
            break;
    }
};

const getHome = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const home_page = await home.findOne();

        res.json({ home: home_page });
    } catch (err: any) {
        return res.status(500).json({ err: err.message });
    }
};
