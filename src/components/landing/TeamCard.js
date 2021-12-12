import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import React from 'react';
import SocialMedia from 'components/SocialMedia';
export default function LandingTeamCard({img, name, position }) {
    const faceBook = "https://www.hackampus.com/"
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <Image src={img} alt={name} raised />
                <div className="pt-6 text-center">
                    <H6 color="gray">{name}</H6>
                    <Paragraph color="blueGray">{position}</Paragraph>
                   <SocialMedia link ={faceBook} />
                </div>
            </div>
        </div>
    );
}
