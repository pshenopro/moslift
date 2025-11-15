<script lang="ts" setup>
import {reactive, ref} from "@vue/reactivity";
// import {updateFile} from '/composables/useFiles'

const emit = defineEmits(['files-dropped', 'onChange'])

const events = ['dragenter', 'dragover', 'dragleave', 'drop']
const active = ref(false)
const files = ref([])
const filesName = ref([])
const inActiveTimeout: any = ref(null)

// const onDrop = (e) => {
//   setInactive()
//   emit('files-dropped', [...e.dataTransfer.files])
// }

const setInactive = () => {
    active.value = false
}

const setActive = () => {
    active.value = true
}

const addFiles = (newFiles) => {
    filesName.value = []

    const file = newFiles.dataTransfer.files
    let newUploadableFiles = [...file]
        .map((file) => new UploadableFile(file))
        .filter((file) => !fileExists(file.id))
    files.value = files.value.concat(newUploadableFiles)

    files.value.forEach(el => {
        // updateFile(el.file)
        filesName.value.push(el.file.name)
    })

    emit('onChange',filesName.value)
}

const fileExists = (otherId) => {
    return files.value.some(({id}) => id === otherId)
}

const removeFile = (file) => {
    const index = files.value.indexOf(file)

    if (index > -1) files.value.splice(index, 1)
    if (!files.value?.length) active.value = false
}

const onInputChange = (e) => {
    filesName.value = []
    const file = e.target.files

    let newUploadableFiles = [...file]
        .map((file) => new UploadableFile(file))
        .filter((file) => !fileExists(file.id))
    files.value = files.value.concat(newUploadableFiles)
    e.target.value = null

    files.value.forEach(el => {
        // updateFile(el.file)
        filesName.value.push(el.file.name)
    })

    emit('onChange',filesName.value)
}

class UploadableFile {
    constructor(file) {
        this.file = file
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.url = URL.createObjectURL(file)
        this.status = null
    }
}

onMounted(() => {
    events.forEach((eventName) => {
        document.body.addEventListener(eventName, (e) => {
            e.preventDefault()
        })
    })
})

onUnmounted(() => {
    events.forEach((eventName) => {
        document.body.removeEventListener(eventName, (e) => {
            e.preventDefault()
        })
    })
})
</script>

<template>
    <div v-if="files.length">
        <div v-for="file of files" :key="file.id" class="file-ready">
            <div>
                <img src="/img/file.svg"/> {{ file.file.name }}
            </div>

            <Button remove small @click="removeFile(file)">Удалить</Button>
        </div>
    </div>
    <div
        v-else
        :class="{
      'file-upload': true,
      'active': active
    }"
        :data-active="active"
        @dragenter.prevent="setActive"
        @dragover.prevent="setActive"
        @dragleave.prevent="setInactive"
        @drop.prevent="addFiles"
    >
        <label for="file-input">
            <span v-if="active"/>
            <div v-else class="file-input-wrapper">
                <img src="/img/upload.svg"/>
                <div class="file-input__text">
                    <span>Загрузите</span> или перетащите файл резюме
                </div>
                <p>Doc, PDF до 5MB</p>
            </div>

            <input type="file" id="file-input" size="" accept="application/pdf,.doc,.docx," multiple
                   @change="onInputChange" hidden/>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.file-ready {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #E5E5E5;
}

.file-upload {
    width: 100%;
    min-height: 124px;
    border: 1px solid #E5E5E5;
    padding: 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all .3s;

    label {
        cursor: pointer;
    }

    &.active {
        border-color: rgba(165, 180, 252, 0.99);
        background: #A5B4FC4A;
    }
}

.file-input {
    &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            color: var(--second-text-color);
            font-size: 14px;
        }
    }

    &__text {
        padding: 12px 0 8px;
        font-size: 16px;
        font-weight: 700;
        color: var(--title-text-color);
        line-height: 24px;

        span {
            color: #6366F1;
        }
    }
}
</style>
