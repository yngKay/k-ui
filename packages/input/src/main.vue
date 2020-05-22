<template>
  <div>
    <input v-model="value" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "KInput",

  model: {
    prop: "init",
    event: "change"
  },
  props: {
    init: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    }
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    init: {
      handler: function(newVal) {
        this.value = newVal;
      },
      immediate: true
    },
    value: function(newVal) {
      this.$emit("change", newVal);
    }
  }
};
</script>