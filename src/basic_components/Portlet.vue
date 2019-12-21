<template>
    <div class="content">
        <div class="container">
            <div class="portlet">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.portlet {
    height: 600px;
    width: 100%;
    background: #fff;
    padding: 5px;
}
.content {
    height: 1000px;
    padding: 5px;
    background: #f1f3fa;
}
</style>
