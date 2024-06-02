import axios from "axios";
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, runTransaction  } from "firebase/firestore";
import { parseHtml, firebaseConfig } from '/constants'

export const useMail = () => {
  const snackbar = useSnackbar()
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return async function (subject, data) {
    snackbar.add({
      type: 'info',
      text: 'Отправление ...',
      duration: 30000,
    })

    try {
      // await axios.post('http://31.129.43.97:8080/email', {
      //   html: parseHtml(data),
      //   subject
      // })

      // await setDoc(doc(db, "mails", "message"), {
      //   arr: ['222', '333']
      // }, { merge: true });

      await runTransaction(db, async transaction => {
        const sfDoc = await transaction.get(doc(db, "mails", "message"));
        transaction.update(doc(db, "mails", "message"), { posts: sfDoc.data().posts.concat({
            favorites: false,
            fileName: data.files || [],
            header: subject,
            html: parseHtml(data),
            id: Date.now(),
            isRead: false,
            text: data.comment || ''
          }) });
      })

      await runTransaction(db, async transaction => {
        const sfDoc = await transaction.get(doc(db, "mails", "archive"));
        transaction.update(doc(db, "mails", "archive"), { posts: sfDoc.data().posts.concat({
            favorites: false,
            fileName: data.files || [],
            header: subject,
            html: parseHtml(data),
            id: Date.now(),
            isRead: false,
            text: data.comment || data.textArea || ''
          }) });
      })

      snackbar.clear()

      snackbar.add({
        type: 'success',
        text: 'Заявка отправлена'
      })
    } catch (e) {
      snackbar.clear()
      console.log(e)
      snackbar.add({
        type: 'error',
        text: 'Ошибка'
      })
    }
  }
}
