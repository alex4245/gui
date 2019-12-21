<template>
    <table>
        <tr
            v-for="field in fields"
            :key="field.key"
        >
            <th> {{ field.label }} </th>
            <td> {{ values[field.key] }} </td>
        </tr>
    </table>
</template>

<script>

export default {
    components: {
    },
    name: 'k-v-table',
    data() {
        return {
        }
    },
    props: {
        values: Object,
        fields: Array
    },
    methods: {
    }
}
</script>

<style scoped>
th, td {
    padding-right: 15px;
    padding-bottom: 5
}
</style>
