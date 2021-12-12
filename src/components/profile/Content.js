import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/team-2-800x800.jpg';
import React, { useEffect, useState } from 'react';
import Header from 'components/profile/Header';
import { useLocation } from 'react-router';
export default function Content() {
    const location = useLocation()
    const [data, setData] = useState([])

    const menuData = location.state.place
    useEffect(() => {

        setData(menuData)
        console.log(menuData)

    }, [location, menuData])

    return (
        <>
            {/* <Header /> */}

            <img src={menuData.photoUrl} style={{ width: '100%', height: "500px", objectFit: "cover" }} alt='place image' />

            <section className="relative py-16 bg-gray-100">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-6">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <div className="w-40 -mt-20">
                                            <Image
                                                src={menuData.photoUrl}
                                                alt="Profile picture"
                                                raised
                                                rounded
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                    <Button color="lightBlue" ripple="light">
                                        Conntect
                                    </Button>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                {/* 22 */}
                                                <Icon name="place" size="xl" />
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                {/* Friends */}
                                                {menuData.address}
                                            </span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-sm font-bold block uppercase tracking-wide text-gray-900">
                                                {/* 10 */}
                                                {/* open & close */}
                                                <Icon name="watch" size="xxl" />

                                            </span>
                                            <span className="text-sm text-gray-700">
                                                {/* Photos */}
                                                {menuData.open}
                                            </span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                {/* 89 */}
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                {/* Comments */}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center my-8">
                                <H3 color="gray">{menuData.title}</H3>
                                <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    {/* <Icon name="place" size="xl" />
                                    Los Angeles, California */}
                                </div>
                                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                    {/* <Icon name="work" size="xl" /> */}
                                    {/* Solution Manager - Creative Tim Officer */}
                                </div>
                                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                    {/* <Icon name="account_balance" size="xl" /> */}
                                    {/* University of Computer Science */}
                                </div>
                            </div>
                            { menuData.menu1&&menuData.menu1.map(menu => {
                                return (
                                    <>
                                        <img src={menu.image} alt={menuData.title} className="menuimg" />
                                        {menu.dishtitle && <span style={{ color: "white", marginLeft: "-76px", marginRight: "-30px" }}>{menu.dishtitle}</span>}
                                        {/* <PopupboxContainer /> */}
                                    </>
                                )
                            })}
                            <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                        <LeadText color="blueGray">
                                            {menuData.desc}
                                        </LeadText>

                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <Button
                                                color="lightBlue"
                                                buttonType="link"
                                                ripple="dark"
                                            >
                                                Show more
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
