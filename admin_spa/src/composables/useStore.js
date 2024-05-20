import { ref as storageRef, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage'
import { firebaseConfig } from '../constant.js'

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const pathReference = storageRef(storage, 'folder/{Edith-Piaf.webp');

getDownloadURL(pathReference).then( url => {
  console.log(url)
})
