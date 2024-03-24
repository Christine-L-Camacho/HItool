// store.js
import { reactive } from 'vue'

export const store = reactive({
  questions: {},
  scores: {
          // '1': {'1': '2', '2': '1', '3': '0', '4': '2'},
          '1': {},
          // '2': {'1': '1', '2': '1', '3': '0', '4': '2', '5': '', '6': '', '7': ''},
          '2': {},
          '3': {},
          '4': {},
        },
})