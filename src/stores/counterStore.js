//counter store for the button click tracker
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0); // ref() counter

  const increment = () => { // increments count
    count.value++;
  };

  return { count, increment }; // output count
}, {
  persist: true //local storage support
});
