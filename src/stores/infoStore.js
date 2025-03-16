//Pinia section for Website Info in footer, meets Small Assignment 2 req.
import { defineStore } from 'pinia';

export const useInfoStore = defineStore('info', {
  state: () => ({
    webInfo: "Francisco's Website (c) 2025" //what will be displayed
  }),
  persist: true //local storage support 
});
