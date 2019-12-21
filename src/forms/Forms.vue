<template>
    <form>
        <label> {{ title }} </label> <br>
        <input v-if="type === 'smallTextForm'"
            type="text"
            v-model="externalValue"
            :name="name"
            :required=required
        >
    </form>
</template>

<script>

export default {
    name: 'Forms',
    data() {
        return {
            externalValue: this.value
        }
    },
    props: {
        title: String,
        type: String,
        name: String,
        required: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: undefined
        }
    },
    mounted() {
        this.emitValue(this.value)
    },
    watch: {
        externalValue(val) {
            this.emitValue(val)
        },
        deep: true
    },
    methods: {
        emitValue(val) {
            this.$emit('emitValueForms', this.name, val, this.validate)
        },
        valIsMissing() {
            if (!this.externalValue) {
                return true
            }
            return false
        },
        validate() {
            if (this.required && this.valIsMissing()) {
                return false
            }
            return true
        }
    }
}
</script>

<style>
</style>
