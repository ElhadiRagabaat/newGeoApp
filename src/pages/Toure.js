import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import Input from "@material-tailwind/react/Input";
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Pages1';
import firebase from 'firebase';
import Container from 'components/login/Container';
import './style.css'
import React,{useState,useEffect} from 'react';
import { fireDB } from 'components/Firebase';
import { storage } from 'components/Firebase';
import makeid from 'components/help/function';
import { useHistory } from 'react-router';
export default function Toure() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [desc, setDesc] = useState(null)
  
    const [fileName, setFileName] = useState("")
    const history = useHistory()



  const onChangeFile = e => {
    setFileName(e.target.files[0])

   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileName) {
      const imageName = makeid(10)
      const uploadTask = storage.ref(`tour/${imageName}.jpg`)
          .put(fileName)

      uploadTask.on("state_change", (snapshot) => {

          
      }, (error) => {
          alert(error)

      }, () => {
          /////get Image Url
          storage.ref("tour").child(`${imageName}.jpg`)
              .getDownloadURL()

              .then((imageUrl) => {
                  fireDB.collection("TourGuider").add({
                      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                     photo: imageUrl,
                      name:name,
                      email:email,
                      phone:phone,
                      desc:desc,
                      
                    
                      
                      
                  })
          
                  
                  
                
              })

      })
  }
  
   
  }
    return (
        <Page>
            {/* <DefaultNavbar /> */}
            <>
            
                <Card  className='w-50 mb-40 mt-20 sm:w-30 '>
                    <CardHeader color="lightGreen">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            A tour guide
                        </H5>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                    <CardBody>
                        
                    {/* <div className="mb-2 px-4 ">
                            <Input
                                type="file"
                                color="lightBlue"
                                onchange={onChangeFile}
                               
                            />
                        </div> */}
                        {/* <div className="mb-2 px-4 ">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="Name "
                                iconName="person"
                                onchange={(e)=>setName(e.target.value)}
                            />
                        </div> */}
                        <div className="mb-2 px-4 ">
                            <Input
                                iconName='person'
                                type="email"
                                color="lightBlue"
                                placeholder="Email"
                                iconName="email"
                                onchange={(e)=>setEmail(e.target.value)}
                                
                            />
                        </div>
                        <div className="mb-2 px-4 ">
                            <Input
                                iconName='person'
                                type="email"
                                color="lightBlue"
                                placeholder="phone"
                                iconName="phone"
                                onchange={(e)=>setPhone(e.target.value)}
                                
                            />
                        </div>
                        <div className="px-4">
                            <Input
                                
                                color="lightBlue"
                                placeholder="Message"
                                 iconName="message"
                                 onchange={(e)=>setDesc(e.target.value)}
                            />
                        </div>
                        {/* <div className="mb-2 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Remember Me"
                                id="remember"
                            />
                        </div> */}
                    
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                type="submit"
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                    </CardBody>
                    </form>
                </Card>
                
            </>
            {/* <SimpleFooter /> */}
        </Page>
    );
}
