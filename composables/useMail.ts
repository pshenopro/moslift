import axios from "axios";
import { parseHtml } from '/constants'

export const useMail = () => {
  const snackbar = useSnackbar()

  return async function (subject, data) {
    snackbar.add({
      type: 'info',
      text: 'Отправление ...',
      duration: 30000,
    })

    try {
      await axios.post('http://localhost:8080/email', {
        html: parseHtml(data),
        subject
      })

      snackbar.clear()

      snackbar.add({
        type: 'success',
        text: 'Заявка отправлена'
      })
    } catch (e) {
      console.log(e)
      snackbar.add({
        type: 'error',
        text: 'Ошибка'
      })
    }
  }
}
