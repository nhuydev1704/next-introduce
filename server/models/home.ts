import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema(
    {
        title_banner: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.home || mongoose.model('home', homeSchema);
