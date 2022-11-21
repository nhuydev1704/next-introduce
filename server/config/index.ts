import mongoose from 'mongoose';

const connectDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected.');
        return;
    }
    mongoose.connect(
        'mongodb+srv://nhuydev:Nguyennhuy1704@cluster0.fdzgugd.mongodb.net/?retryWrites=true&w=majority',

        (err) => {
            if (err) throw err;
            console.log('Connected to mongodb.');
        }
    );
};

export default connectDB;
