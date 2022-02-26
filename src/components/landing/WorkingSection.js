import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import './style.css'
import React from 'react';
import CardHeader from '@material-tailwind/react/CardHeader';
import Heading5 from '@material-tailwind/react/Heading5';
import { useHistory } from 'react-router';
export default function WorkingSection({places}) {
    const history = useHistory()
    console.log(places)

    return (
        <section className="pb-20 bg-gray-100 -mt-10">
             <CardHeader color="red">
                        <Heading5 color="white" style={{ marginTop: 30 }}>
                        NEVE-SHAANAN Restaurants
                        </Heading5>
                    </CardHeader>
            <div className="container max-w-7xl mx-auto px-4 py-5 mt-10">
                <div className="flex flex-wrap relative z-50 ">
                    {places.map(place=>{
                       return(
                           
                        <StatusCard  key={place.id}>
                        <CardImage alt="Image" className="nav"
                      src={place.photoUrl} />
                      {place.address}
                      <br/>
                      <a className='more' onClick={()=> history.push("/restaurant", place={place})}>More</a>
                        </StatusCard>
                       )
                    })}
                    
                    {/* <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Free Revisions"
                    >
                  <CardImage alt="Card Image" 
                  src="https://firebasestorage.googleapis.com/v0/b/geo-loaction-6334d.appspot.com/o/DSC04151.jpg?alt=media&token=b6490711-8b9f-43dd-bc61-b028552a4290" />

                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Verified Company"
                    >
                        Write a few lines about each one. A paragraph describing
                        a feature will be enough. Keep you user engaged!
                    </StatusCard> */}
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Working with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            Don't let your uses guess by attaching tooltips and
                            popoves to any element. Just make sure you enable
                            them first via JavaScript.
                        </LeadText>
                        <LeadText color="blueGray">
                            The kit comes with three pre-built pages to help you
                            get started faster. You can change the text and
                            images and you're good to go. Just make sure you
                            enable them first via JavaScript.
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src="https://firebasestorage.googleapis.com/v0/b/geo-loaction-6334d.appspot.com/o/DSC04151.jpg?alt=media&token=07f3721a-e23b-4944-94ae-90824aacbdd8" />
                            <CardBody>
                                <H6 color="gray">Top Notch Services</H6>
                                <Paragraph color="blueGray">
                                    The Arctic Ocean freezes every winter and
                                    much of the sea-ice then thaws every summer,
                                    and that process will continue whatever
                                    happens.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
