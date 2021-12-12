import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Content from 'components/profile/Content';
import React from 'react';
import ProfilePicture from 'assets/img/team-2-800x800.jpg';

export default function Profile() {
    return (
        <>
            <div className="absolute w-full z-20">
                <div style={{display:"flex", alignItems:"center", justifyContent:"center",marginTop:"100px"}}>
                {/* <img src={ProfilePicture} style={{width:'100%',height:"350px",objectFit:"cover"}}/> */}
                <h1>Hellllloooooo</h1>
                </div>
                
                {/* <DefaultNavbar /> */}
            </div>
            <main>
                <Header />
                <Content />
            </main>
            <DefaultFooter />
        </>
    );
}
