<!--Adds button that meets Small Assignmennt 1 req.-->
<script setup>
import { defineProps, defineEmits } from 'vue';
/*define the message the click will output and the action for when button is clicked */
const props = defineProps(['message']);
const emit = defineEmits(['buttonClicked']);
//variable for handling click action
const handleClick = () => {
  emit('buttonClicked');
};
</script>
<!-- Template section that contains the button with the click message inside and the neccesary messages-->
<template>
  <div class="child-container">
    <p>{{ message }}</p>
    <button @click="handleClick">click...</button>
    </div>
  
</template>

<style scoped>
.child-container {
  text-align: center;
  padding: 20px;
}
/*Button styling */
button {
  padding: 10px 20px;
  background-color: #048A81;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover{
  background-color: #03635D;
}
</style>

