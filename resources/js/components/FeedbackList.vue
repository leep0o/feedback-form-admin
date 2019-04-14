<template>
    <b-container fluid>
        <b-row>
            <b-col md="6">
                <b-form-group>
                    <b-input-group>
                        <b-form-input
                            v-model="filter"
                            placeholder="Поиск по вопросам"
                        />
                        <b-input-group-append>
                            <b-button
                                :disabled="!filter"
                                @click="filter = ''"
                            >
                                Очистить
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col md="4">
                <b-form-group>
                    <b-input-group>
                        <b-form-select
                            v-model="sortBy"
                            :options="sortOptions"
                        >
                            <option
                                slot="first"
                                :value="null"
                            >
                                -- none --
                            </option>
                        </b-form-select>

                        <b-form-select
                            slot="append"
                            v-model="sortDesc"
                            :disabled="!sortBy"
                        >
                          <option :value="false">Asc</option>
                          <option :value="true">Desc</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col md="2">
                <b-form-group>
                    <b-form-select
                        v-model="perPage"
                        :options="pageOptions"
                    />
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table
            show-empty
            stacked="md"
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
        >
            <template
                slot="answer"
                slot-scope="row"
            >
                <b-badge :variant="row.item.answer ? 'success' : 'danger'">
                    {{ row.item.answer ? 'Есть ответ' : 'Ждет ответа' }}
                </b-badge>
            </template>

            <template
                slot="actions"
                slot-scope="row"
            >
                <b-button
                    size="xs"
                    @click="row.toggleDetails"
                >
                    <i
                        class="fas fa-fw"
                        :class="row.detailsShowing ? 'fa-eye-slash ' : 'fa-eye'"
                    ></i>
                </b-button>

                <b-button
                    size="xs"
                    variant="warning"
                    v-b-modal.reply-feedback
                    @click="replyFeedback(row.item.id)"
                >
                    <i class="fas fa-fw fa-reply"></i>
                </b-button>

                <b-button
                    size="xs"
                    variant="danger"
                    :disabled="loading"
                    @click="deleteFeedback(row.item.id)"
                >
                    <i class="fas fa-fw fa-trash"></i>
                </b-button>
            </template>

            <!-- Row Details -->
            <template
                slot="row-details"
                slot-scope="row"
            >
                <b-card>
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-carousel
                                id="carousel-1"
                                v-model="slide"
                                :interval="8000"
                                controls
                                indicators
                                background="#ababab"
                                img-width="1024"
                                img-height="480"
                                style="text-shadow: 1px 1px 2px #333;"
                                @sliding-start="onSlideStart"
                                @sliding-end="onSlideEnd"
                            >
                                <b-carousel-slide
                                    v-for="(img, i) in row.item.images_all"
                                    :key="i"
                                    :img-src="img"
                                >
                                </b-carousel-slide>
                            </b-carousel>
                        </b-col>

                        <b-col md="6">
                            <b-card-body :title="row.item.title">
                                <b-card-sub-title>
                                    <small>Добавлено: {{ row.item.created_at }}</small>
                                </b-card-sub-title>

                                <b-card-text class="mt-2">
                                    {{ row.item.body }}
                                </b-card-text>

                                <b-card-body v-if="row.item.answer" class="bg-info text-light">
                                    <h5>Ответ:</h5>
                                    {{ row.item.answer }}
                                </b-card-body>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </template>
        </b-table>

        <b-row>
            <b-col
                md="12"
                class="my-1 text-center"
            >
                <b-pagination
                    v-if="(items / perPage) > 1"
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                />
            </b-col>
        </b-row>

        <!-- Modal Component Reply Feedback -->
        <b-modal id="reply-feedback" title="Reply" hide-footer>
            <b-card
                :title="`Title: ${feedback.title}`"
                :sub-title="feedback.created_at"
            >
                <b-card-text>{{ feedback.body }}</b-card-text>

                <h5>Ответ:</h5>

                <b-card-body v-if="feedback.answer" class="bg-info text-light">
                    {{ feedback.answer }}
                </b-card-body>

                <b-card-text v-else>
                    <b-form-group label-for="answer">
                        <b-form-textarea
                                id="answer"
                                v-model="answer"
                                :state="!errors.hasOwnProperty('answer')"
                                placeholder="Напишите ответ..."
                                :rows="3"
                                :max-rows="6"
                                required
                        />

                        <b-form-invalid-feedback>
                            <small
                                v-for="(e, i) in errors.answer"
                                :key="i"
                            >
                                {{ e }}
                            </small>
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group class="mt-2">
                        <b-button variant="primary" v-if="loading === true" disabled>
                            <b-spinner small></b-spinner>
                            <span class="sr-only">...</span>
                        </b-button>

                        <b-button
                            v-else
                            variant="primary"
                            @click.prevent="answerFeedback()"
                        >
                            <i class="fas fa-fw fa-paper-plane"></i> Ответить
                        </b-button>
                    </b-form-group>
                </b-card-text>
            </b-card>

        </b-modal>
    </b-container>
</template>

<script>
    export default {
        name: 'FeedbackList',
        props: {
            route: {
                type: String,
                default: '/'
            },
            routeDelete: {
                type: String,
                default: '/'
            },
            routeAnswer: {
                type: String,
                default: '/'
            }
        },
        data () {
            return {
                loading: false,
                errors: {},
                slide: 0,
                sliding: null,
                feedback: {},
                answer: '',
                items: [],
                fields: [
                    { key: 'image', label: '', class: 'text-center' },
                    { key: 'title', sortable: true, label: 'Тема' },
                    { key: 'user.name', sortable: true, label: 'Имя' },
                    { key: 'answer', sortable: true, label: 'Ответ' },
                    { key: 'created_at', sortable: true, label: 'Добавлено' },
                    { key: 'actions', label: '' }
                ],
                currentPage: 1,
                perPage: 10,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null
            }
        },
        computed: {
            sortOptions () {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return { text: f.label, value: f.key }
                    })
            },
            totalRows () {
                return this.items.length
            }
        },
        mounted () {
            this.getFeedbacks()
        },
        methods: {
            getFeedbacks () {
                this.axios
                    .get(this.route)
                    .then(response => {
                        this.items = response.data
                    })
            },
            replyFeedback (id) {
                this.feedback = this.items.find(feedback => feedback.id === id)
                this.$emit('bv::show::modal', 'reply-feedback')
            },
            answerFeedback () {
                this.loading = true

                let answer = {
                    'id': this.feedback.id,
                    'answer': this.answer
                }

                this.axios
                    .post(this.routeAnswer, answer)
                    .then(response => {
                        this.answer = ''
                        this.loading = false
                        this.getFeedbacks()
                        this.$root.$emit('bv::hide::modal', 'reply-feedback')
                    })
                    .catch(error => {
                        this.loading = false
                        this.errors = error.response.data.errors
                    })
            },
            deleteFeedback (id) {
                this.loading = true
                this.axios
                    .post(this.routeDelete, { 'id': id })
                    .then(response => {
                        this.loading = false
                        let index = this.items.findIndex(item => item.id === id)
                        this.items.splice(index, 1)
                    })
                    .catch(error => {
                        this.loading = false
                        this.errors = error.response.data.errors
                    })
            },
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            },
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>
