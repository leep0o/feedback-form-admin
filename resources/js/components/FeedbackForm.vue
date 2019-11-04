<template>
    <div>
        <b-form
            v-if="showForm"
            id="upload_form"
            @submit.prevent="addFeedback()"
        >
            <div class="row">
                <div class="col-6">
                    <file-pond
                        ref="pond"
                        name="files"
                        :allow-drop="false"
                        label-idle="Добавить файлы к вопросу"
                        allow-multiple="true"
                        accepted-file-types="image/jpeg, image/png"
                        :files="files"
                    />
                </div>

                <div class="col-6">
                    <b-form-group
                        v-if="!name"
                        label-for="name"
                    >
                        <b-form-input
                            id="name"
                            v-model="feedback.name"
                            :state="!errors.hasOwnProperty('name')"
                            aria-describedby="input-name-feedback"
                            placeholder="Ваше имя"
                        />

                        <b-form-invalid-feedback>
                            <small
                                v-for="(e, i) in errors.name"
                                :key="i"
                            >
                             {{ e }}
                            </small>
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group
                        v-if="!email"
                        label-for="email"
                    >
                        <b-form-input
                            id="email"
                            v-model="feedback.email"
                            :state="!errors.hasOwnProperty('email')"
                            required
                            placeholder="Ваш Email"
                        />

                        <b-form-invalid-feedback>
                            <small
                                v-for="(e, i) in errors.email"
                                :key="i"
                            >
                                {{ e }}
                            </small>
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label-for="title">
                        <b-form-input
                            id="title"
                            v-model="feedback.title"
                            :state="!errors.hasOwnProperty('title')"
                            required
                            placeholder="Тема"
                        />

                        <b-form-invalid-feedback>
                            <small
                                v-for="(e, i) in errors.title"
                                :key="i"
                            >
                                {{ e }}
                            </small>
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label-for="body">
                        <b-form-textarea
                            id="body"
                            v-model="feedback.body"
                            :state="!errors.hasOwnProperty('body')"
                            placeholder="Ваш вопрос"
                            :rows="3"
                            :max-rows="6"
                            required
                        />

                        <b-form-invalid-feedback>
                            <small
                                v-for="(e, i) in errors.body"
                                :key="i"
                            >
                                {{ e }}
                            </small>
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group>
                        <b-button variant="primary" v-if="loading" disabled>
                            <b-spinner small></b-spinner>
                            <span class="sr-only">...</span>
                        </b-button>

                        <vue-recaptcha
                            v-else
                            sitekey="6LccGZ4UAAAAAN6d0SC5D9_GGmSysZaTlJkusiuI"
                        >
                            <b-button
                                variant="primary"
                                :disabled="loading"
                                @click.prevent="addFeedback()"
                            >
                                <i class="fas fa-fw fa-paper-plane"></i> Отправить
                            </b-button>
                        </vue-recaptcha>
                    </b-form-group>
                </div>
            </div>
        </b-form>
        <div v-else>
            <h3>Ваше сообщение успешно отправлено!</h3>

            <p>
                <b-btn variant="success" @click="showForm = true">Отправить новый вопрос</b-btn>
            </p>
        </div>
    </div>
</template>

<script>
    import VueRecaptcha from 'vue-recaptcha'
    import vueFilePond from 'vue-filepond'
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
    import 'filepond/dist/filepond.min.css'
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

    const FilePond = vueFilePond(FilePondPluginImagePreview)

    export default {
        name: 'FeedbackForm',
        components: {
          FilePond,
          VueRecaptcha
        },
        props: {
            route: {
                type: String,
                default: '/'
            },
            name: {
                type: String,
                default: ''
            },
            email: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                loading: false,
                showForm: true,
                errors: {},
                files: [],
                feedback: {
                    name: '',
                    email: '',
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            addFeedback () {
                this.loading = true

                let fd = new FormData()
                fd.append('name', this.feedback.name || this.name)
                fd.append('email', this.feedback.email || this.email)
                fd.append('title', this.feedback.title)
                fd.append('body', this.feedback.body)

                for (let i = 0; i < this.$refs.pond.getFiles().length; i++) {
                    let file = this.$refs.pond.getFiles()[i].file
                    fd.append('files[' + i + ']', file, file.name)
                }

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

                this.axios
                    .post(this.route, fd, config)
                    .then(() => {
                        this.loading = false
                        this.showForm = false
                        this.$refs.pond.removeFiles()
                        this.feedback = {}
                    })
                    .catch(error => {
                        this.loading = false
                        this.errors = error.response.data.errors
                    })
            }
        }
    }
</script>
