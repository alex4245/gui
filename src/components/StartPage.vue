<template>
    <portlet>
        <div class="panel panel-default col-md-4">
            <div class="panel-heading">Main information</div>
            <div class="panel-body">
                <k-v-table
                    :values="accountInformation"
                    :fields="fields"
                >
                </k-v-table>
            </div>
        </div>
    </portlet>
</template>

<script>
import { getStartPage, getAccountOptions } from '../api/application'
import Portlet from '../basic_components/Portlet'
import KVTable from '../forms/KVTable'

export default {
    name: 'StartPage',
    components: {
        KVTable,
        Portlet
    },
    data() {
        return {
            start: undefined,
            accountInformation: {}
        }
    },
    mounted() {
        this.getData()
    },
    computed: {
        fields() {
            return [
                {
                    label: 'Name',
                    key: 'full_name'
                },
                {
                    label: 'Status',
                    key: 'status'
                }
            ]
        }
    },
    methods: {
        getData() {
            getStartPage().then((response) => {
                this.start = response.data.start
            }).catch((error) => {
                alert(error)
            })
            getAccountOptions().then((data) => {
                this.accountInformation = data.data
            })
        }
    }
}
</script>

<style scoped>
</style>
