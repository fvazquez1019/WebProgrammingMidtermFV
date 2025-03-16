<template>
  <!-- Header for Contact page-->
  <div class="contact-container">
    <h2>Contact Me Here!</h2>

    <!-- Dynamic Message -->
    <p class="status-message">{{ contactStatus }}</p>

    <!-- Contact Form -->
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
//import vue features we need
import { ref, computed, watch } from 'vue';
// variablesfor fields and button
const name = ref("");
const email = ref("");
const submitted = ref(false);

// We use computed() to use the data if theey user has entered information of not, message will update accordingly
const contactStatus = computed(() => {
  return submitted.value
    ? `Thank you, ${name.value}!`
    : "Please fill out the form to contact me!";
});

const submitForm = () => { 
  if (name.value && email.value) {
    submitted.value = true;
  }
};

// We are using watch() to track both the changes in each field and then any form submissions. All reported to console 
watch([name, email], ([newName, newEmail], [oldName, oldEmail]) => {
  if (newName !== oldName) {
    console.log(`Name changed/updated: ${oldName} -> ${newName}`);
  }
  if (newEmail !== oldEmail) {
    console.log(`Email updated/changed: ${oldEmail} -> ${newEmail}`);
  }
});

// Watch for form submission
watch(submitted, (newVal) => {
  if (newVal) {
    console.log(`New Contact Info: Name - ${name.value}, Email - ${email.value}`);
  }
});
</script>
 
<style scoped>
/*Contact form styling*/
.contact-container {
  text-align: center;
  padding: 2rem;
}

.status-message {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #048A81;
}

input {
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

input:focus {
  border-color:#048A81;
  outline: none;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  background: #048A81;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background: #03635D;
}
</style>
