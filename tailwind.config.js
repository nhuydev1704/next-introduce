/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                bg_video: "url('http://toanphat.com.vn/templates/fashion01/assets/media/template/bg-video.png')",
            },
        },
    },
    plugins: [],
    darkMode: ['class'],
};
