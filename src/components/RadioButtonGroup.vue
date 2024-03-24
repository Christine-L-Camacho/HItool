<template>
  <div>
    <div class="radio-buttons">
    <label>
      <input type="radio" id="_yes" :name="sect + '.' + q_num" value="2" :checked="modelValue==='2'" @click="$emit('update:modelValue', '2')">
      Yes
    </label>
    </div>
    <div class="radio-buttons">
    <label>
      <input type="radio" id="_no" :name="sect + '.' + q_num" value="0" :checked="modelValue==='0'" @click="$emit('update:modelValue', '0')">
      No
    </label>
    </div>
    <div class="radio-buttons">
    <label v-if="showPartial">
      <input type="radio" id="_partial" :name="sect + '.' + q_num" value="1" :checked="modelValue==='1'" @click="$emit('update:modelValue', '1')">
      Partial
    </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButtonGroup',
  props: ['sect', 'q_num', 'modelValue', 'showPartial'],
  emits: ['update:modelValue'],
  data() {
    return {
        choice: null,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radio-buttons {
    /* width: 25%; */
    display: flex;
    flex-direction: column;
    /* Set the direction to column to stack items vertically */
    align-items: flex-start;
    /* Align items to the right within the column */
    white-space: nowrap;
    /* Prevent label from wrapping to the next line */
}

input[type="radio"] {
    margin-right: 10px;
}

label {
  font-size: 1.3125rem;
  padding-bottom: 0px;
}
</style>
