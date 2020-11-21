<template>
  <button :disabled="isDisabled" :class="color" class="app-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'plain'
    }
  }
}
</script>
<style lang="scss" scoped>
.app-button {
    padding: 8px 16px;
    border-radius: 4px;
    border-width: 0;

    &:hover {
        opacity: 0.8;
    }
}

.plain {
    color: black;
    background-color: gray;
}

.primary {
    color: white;
    background-color: #037BFE;
}
</style>