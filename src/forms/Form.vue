<template>
    <div class="form">
        <app-forms v-for="field in fields" :key=field.name
            :name = field.name
            :type = field.type
            :title = field.title
            :required = field.required
            :value = values[field.name]
            v-on:emitValueForms="procesExternalValues"
        >
        </app-forms>
        <div class="form-group">
           <button
               type="button"
               v-on:click="submit"
           >
               Ok
           </button>
        </div>
    </div>
</template>

<script>
import appForms from './Forms'

export default {
    components: {
        appForms
    },
    name: 'Form',
    data() {
        return {
            externalValues: this.values,
            externalValuesVaidation: {}
        }
    },
    props: {
        fields: Array,
        values: Object
    },
    methods: {
        submit() {
            if (!this.validateForms()) {
                alert('Validation error')
                return
            }
            this.$emit('submit', this.externalValues)
        },
        procesExternalValues(name, value, validateFunc) {
            this.externalValuesVaidation[name] = validateFunc
            this.externalValues[name] = value
        },
        validateForms() {
            let isValid = true
            for (const [name, func] of Object.entries(this.externalValuesVaidation)) {
                if (!func()) {
                    console.log(name)
                    isValid = false
                }
            }
            return isValid
        }
    }
}
</script>

<style scoped>
    .form {
        margin-left: 30%;
        width: 40%;
        padding: 12px;
        border: 1px solid powderblue;
    }
</style>
