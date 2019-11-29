import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <AppLayout>
                <div>프로필</div>
            </AppLayout>
        </>
    );
};

export default Profile;