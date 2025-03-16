<template>
<!-- Vue template section for my Home page-->
  <div class="home-container">
    <h1 v-if="showWelcome">Welcome to Francisco's Vue Website</h1>
    <!--Message button to show and hide required Welcome message toggled with v-if-->
    <n-button type="info" @click="toggleMessage">
      {{ showWelcome ? 'Hide Message' : 'Show Message' }}
    </n-button>

    <!-- Main inforrmation I want to include on my home page-->
    <div class="main-info">
      <p>
      <br><b>Welcome to My Website! </b>

      <br>Hello there, and welcome to my website! I’m Francisco Vazquez, a computer science major student at Georgia State University on a fun journey of growth and learning all about what it takes to be a computer scientist. I created this website to share my experiences, ideas, and skills. I navigate every day as I balance academic pursuits with personal interests. Thank you for reading!

      <br><b>About Me</b>
      <br>
      <br><b>My Background</b>
      <br>I come from a diverse background that has shaped the way I see the world. I am of Mexican heritage and growing up in Marietta, Georgia taught me the importance of hard work. Early on, I found myself drawn to technology, which sparked a lifelong interest in learning and personal development in this and any field attached to it. These experiences have helped me a lot in finding people who share similar hobbies with to simply how I solve problems in my day to day life.
      <br>
      <br><b>Academic Journey</b>
          Currently, I’m immersed in college life, pursuing a degree in Computer. My academic journey is not just about attending lectures or studying for exams—it’s about learning as much as I can and putting myself in the enviroment to do so. I love diving deep into subjects like design and efficency and participating in scenarios where I can put what ive learned on my journey to use. This combination helps keep me motivated and always wanting to learn more.
          <br>
      <br><b>Passions and Hobbies</b>
            <br>Outside the classroom, I have a wide range of interests that fuel my creativity and keep life exciting. Whether it’s exploring new technologies, photography, playing soccer, or hiking, I’m always seeking new things. These hobbies not only provide a fun escape but also help me learn more about all these hobbies and learn in general which is something I enjoy a lot. They remind me that learning happens in every part of life not just textbooks.
            <br>
      <br><b>Thank You for Stopping By!</b>
      <br>
        <br>I’m excited to share my journey with you and hope that my experiences, thoughts, and projects inspire you in some way. This website is a reflection of who I am—a blend of my academic pursuits, personal passions, and dreams for the future.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showWelcome = ref(true); // Initial state of welcome message set to showing

// Toggle function
const toggleMessage = () => {
  showWelcome.value = !showWelcome.value;
};
</script>

<style scoped>
/* Formatting*/
.home-container {
  text-align: center;
  padding: 2rem;
}
/*Welcome message text formatting/styling*/
h1 {
  color: #048A81;
  margin-bottom: 1rem;
}

 .n-button {
  background-color: #048A81;
 }
/*main info formatting*/
.main-info {
  background-color: #f0f0f0;
  border: 1px solid #dcdcdc;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
