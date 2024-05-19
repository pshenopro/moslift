import { firebaseConfig } from '/constants'
import { ref as storageRef, uploadBytes, getStorage } from 'firebase/storage'
import { initializeApp } from 'firebase/app'

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export const updateFile = (file) => {
  const st = storageRef(storage, `folder/${file.name}`)
  uploadBytes(st, file)
}
