import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyBlWTOR8Imn6la7shb2j-ooqhQIHNd2eUE',
    appId: '1:1048128276232:web:926e0de7cecb32c5510ebd',
    authDomain: 'gym-helper-243c8.firebaseapp.com',
    measurementId: 'G-B7VVSWBRRT',
    messagingSenderId: '1048128276232',
    projectId: 'gym-helper-243c8',
    storageBucket: 'gym-helper-243c8.appspot.com',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const analytics = getAnalytics(app)

export { db }
