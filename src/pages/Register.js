import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import React,{useState} from 'react';
import Input from "@material-tailwind/react/Input";
import makeid from 'components/help/function';
import { storage } from 'components/Firebase';
import { fireDB } from 'components/Firebase';
import firebase from 'firebase';
import { useHistory } from 'react-router';

export default function Register() {
    const [open, setOpen] = useState("")
    const [title, setTitle] = useState(null)
    const [address, setAddress] = useState(null)
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
      const uploadTask = storage.ref(`images/${imageName}.jpg`)
          .put(fileName)

      uploadTask.on("state_change", (snapshot) => {

          
      }, (error) => {
          alert(error)

      }, () => {
          /////get Image Url
          storage.ref("images").child(`${imageName}.jpg`)
              .getDownloadURL()

              .then((imageUrl) => {
                  fireDB.collection("AddNewPlace").add({
                      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                      photoUrl: imageUrl,
                      address:address,
                      phone:phone,
                      desc:desc,
                      title:title,
                      open:open
                      
                  })
          
                  
                  history.push("/")
                
              })

      })
  }
  
   
  }
    return (
        <Page>
            <DefaultNavbar />
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Add new Place
                        </H5>
                    </CardHeader>

                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <Input
                                type="file"
                                color="lightBlue"
                                onChange={onChangeFile}
                                
                            />
                        </div>
                     
                        <div className="">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="Place Name"
                                onChange={(e) => setTitle(e.target.value)}
                               
                            />
                        </div>
                        <div className="">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="phone"
                                onChange={(e) => setPhone(e.target.value)}
                               
                            />
                        </div>
                        <div className="">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="Opent & close Time"
                                onChange={(e) => setOpen(e.target.value)}
                               
                            />
                        </div>
                        <div className="">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="address"
                                onChange={(e) => setAddress(e.target.value)}
                               
                            />
                        </div>
                        <div className="">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="about the place"
                                onChange={(e) => setDesc(e.target.value)}
                               
                            />
                        </div>
                    
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                type='submit'
                            >
                                Submit
                            </Button>
                        </div>
                    </CardFooter>
                    </form>
                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
