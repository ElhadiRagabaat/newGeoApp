import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet

import 'assets/styles/tailwind.css';
import React, { useEffect, useState } from 'react';
import { fireDB } from './components/Firebase';
import ContactSection from 'components/landing/ContactSection';
import Content from 'components/profile/Content';


function App() {
    const [places, setPlaces] = useState([])
        

    useEffect(() => {
        fireDB.collection("AddNewPlace")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    // console.log(doc.data())
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setPlaces(documents)
            })

    }, [])

    return (

        <Switch>
            <Route exact path="/">
                <Landing places={places} />
            </Route>
            <Route exact path="/restaurant">
                <Content />
            </Route>

            <Route exact path="/login" component={Login} />
            <Route exact path="/contact">
                <ContactSection />
            </Route>
            <Route exact path="/postNewPlace">
                <Register/>
            </Route>
            <Redirect from="*" to="/" />

        </Switch>

    );
}

export default App;
