import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ContextProvider } from 'context/store';
import useCallContext from 'hooks/useCallContext';
import React from 'react';
import AxiosClient from 'apis/axiosClient';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <Main Component={Component} pageProps={pageProps} />
        </ContextProvider>
    );
}

const Main = ({ Component, pageProps }: any) => {
    const { dispatch } = useCallContext();
    React.useEffect(() => {
        AxiosClient.get('home').then((res) => {
            dispatch({ type: 'SET_APP_CONTENT', payload: { ...res.data } });
        });
    }, []);

    return <Component {...pageProps} />;
};
