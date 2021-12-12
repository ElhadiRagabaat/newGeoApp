import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/gogo.jpg';
import Image2 from 'assets/img/me2.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/seliq1.jpg';
import React from 'react';
export default function TeamSection() {
    const protf = "https://www.alnowcenter.com/";
  
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Here are our heroes">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Goanar Abraham"
                        position="FullStack Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Elhadi Adam"
                        position="FullStack Developer"
                    />
                    <TeamCard
                        img={Image1}
                        name="Goanar Abraham"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Seliq Kone"
                        position="FullStack && QA Engineer"
                    />
                   
                </div>
            </div>
        </section>
    );
}
