<script setup>
import { useRoute, useRouter} from 'vue-router'
import { ref, onMounted } from "vue";

import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, runTransaction  } from "firebase/firestore";

import { firebaseConfig } from '../../constant.js'

const route = useRoute()
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const data = ref()

const updateMessage = async () => {
    await runTransaction(db, async transaction => {
        const sfDoc = await transaction.get(doc(db, "mails", "message"));
        data.value = sfDoc.data().posts.find(el => el.id === Number(route.params.id))

        transaction.update(doc(db, "mails", "message"), { posts: sfDoc.data().posts.map(el => {
            if (el.id === Number(route.params.id)) {
                return {
                    ...el,
                    isRead: true
                }
            }

            return el
            }) });
    })
}

onMounted(() => {
    updateMessage()
})

</script>

<template>
    <h1>{{ data?.header }}</h1>

    <div v-if="data" v-html="data.html" />
</template>

<style scoped>

</style>
