<template>
    <portlet>
        <div v-if="!loading">
            <app-form
                :fields="fields"
                :values="valuesForm"
                v-on:submit="writeData"
            >
            </app-form>
        </div>
        <div
            v-else
            class="spinner-border"
        >
            <span>Loading...</span>
        </div>
    </portlet>
</template>

<script>
import appForm from '../forms/Form'
import Portlet from '../basic_components/Portlet'
import { postAccountOptions, getAccountOptions } from '../api/application'

export default {
    components: {
        appForm,
        Portlet
    },
    name: 'AccountOptions',
    created() {
        this.getData()
    },
    computed: {
        valuesForm() {
            return this.values
        }
    },
    data() {
        return {
            fields: [
                {
                    name: 'full_name',
                    type: 'smallTextForm',
                    title: 'Full name',
                    required: true
                },
                {
                    name: 'status',
                    type: 'smallTextForm',
                    title: 'Status',
                    required: true
                }
            ],
            values: {},
            loading: false
        }
    },
    methods: {
        writeData(data) {
            console.log(data)
            postAccountOptions(data).then(() => {
                this.getData()
            })
        },
        getData() {
            this.loading = true
            getAccountOptions().then((data) => {
                this.values = data.data
                this.loading = false
            }).catch((error) => {
                console.log(error)
                this.loading = false
            })
        }
    }
}
</script>

<style scoped>
</style>
