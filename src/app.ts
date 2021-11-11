const Blob = require('node-blob')
const FormData = require('form-data');
import axios from 'axios';
import * as app from 'firebase/app'
import * as auth from 'firebase/auth';

app.initializeApp({
    apiKey: 'AIzaSyAJkCfsNjSyD8CBNlcHJwuUU88y32-4vQg',
    authDomain: 'sports-mobile-application.firebaseapp.com',
    databaseURL: 'https://sports-mobile-application.firebaseio.com/',
    storageBucket: 'gs://sports-mobile-application.appspot.com',
    projectId: 'sports-mobile-application'
});

axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
})

axios.interceptors.response.use(response => {
    response.request = undefined
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
})

const main = async () => {
    // const formData = new FormData();
    // formData.append('file', new Blob(['Hello World'], { type: 'text/plain' }).buffer, 'file.txt');
    // axios.post('http://localhost:8000/storage/eEDGaELxSvakIno67iltxjBGGlD2/private/test.txt', formData, {
    //     headers: {
    //         'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    //         Authorization: `Bearer ${await (await auth.signInWithEmailAndPassword(auth.getAuth(), 'jarsenau@asu.edu', '@@ZebrA3@@')).user.getIdToken()}`
    //     },
    // }).then(res => {
    //     console.log(JSON.stringify(res.data));
    // })

    axios.get('http://localhost:8000/storage/eEDGaELxSvakIno67iltxjBGGlD2/public/test.txt', {
        //    headers: {
        //        Authorization: `Bearer ${await (await auth.signInWithEmailAndPassword(auth.getAuth(), 'jarsenau@asu.edu', '@@ZebrA3@@')).user.getIdToken()}`
        //    },
    }).then(res => {
        console.log(res.data);
    })
};

main();