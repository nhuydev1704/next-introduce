import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema(
    {
        title_banner: {
            type: String,
            trim: true,
        },
        description_banner: {
            type: String,
            trim: true,
        },
        image_banner: {
            type: String,
        },
        title_left_section1: {
            type: String,
            trim: true,
        },
        description_left_section1: {
            type: String,
            trim: true,
        },
        feature_left_section1: {
            type: Array,
        },
        title_right_section1: {
            type: String,
            trim: true,
        },
        description_right_section1: {
            type: String,
            trim: true,
        },
        feature_right_section1: {
            type: Array,
        },
        image_left_section1: {
            type: String,
        },
        image_right_section1: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.home || mongoose.model('home', homeSchema);
