import React from 'react';

const CardNews = () => {
    return (
        <div
            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
            style={{ backgroundPosition: '50%' }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
        >
            <img src="https://mdbootstrap.com/img/new/standard/nature/051.jpg" className="w-full" />
            <a href="#!">
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                    <div className="flex justify-start items-end h-full">
                        <div className="text-white m-6">
                            <h5 className="font-bold text-lg mb-3">I miss the sun</h5>
                            <p>
                                <small>
                                    Published <u>13.01.2022</u> by Anna Maria Doe
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CardNews;
