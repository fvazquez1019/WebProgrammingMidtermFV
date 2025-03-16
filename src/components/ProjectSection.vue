<template>
  <h2>Projects</h2>
  <!--No projects available message-->
  <p v-if="projects.length === 0">No projects available currently.</p>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <div class="project-header">
        <span>{{ project.name }}</span>
        <button @click="project.showDescription = !project.showDescription" class="toggle-button">
          <!-- Rotating arrow on dropdown -->
          <span :class="{ rotated: project.showDescription }">▼</span>
        </button>
      </div>
      <!--Vue transition for decription-->
      <transition name="slide-fade" mode="out-in">
        <div v-show="project.showDescription" class="project-description">
          {{ project.description }}
        </div>
      </transition>
    </li>
  </ul>
</template>



<script setup>
import { ref } from 'vue';
//Section to enter projects that allow us to initially hide all the details of a project 
const projects = ref([
  { id: 1, name: 'Midterm Website Project', description: 'Embarking on the creation of a Vue project proved to be an engaging and enriching learning experience that extended far beyond traditional assignment requirements. As I navigated through the intricate architecture of Vue, I discovered not only the flexibility and scalability of the framework but also the complex interplay between components, state management, and reactive programming. This deep dive into modern web development was both challenging and immensely satisfying, as it pushed me to explore advanced programming concepts and refine my problem-solving skills. The process illuminated the sophisticated nature of front-end development, transforming theoretical knowledge into practical expertise.This project served as a catalyst for my continued passion for learning, inspiring me to pursue knowledge beyond the classroom syllabus. Recognizing that real-world applications often involve a blend of creativity, technical proficiency, and critical thinking, I embraced the opportunity to experiment and innovate. The experience underscored the importance of continual growth and adaptability in an ever-evolving technological landscape, encouraging me to seek out new challenges and expand my skill set further. Ultimately, this journey with Vue has not only enriched my understanding of web development but also solidified my commitment to lifelong learning in the field of technology.', showDescription: false },
  { id: 2, name: 'Local Event Finder Website', description: 'Developing a local event finder website for my software engineering class was an invaluable experience that deepened my technical skills and broadened my understanding of collaborative project work. This project allowed me to dive into the complexities of integrating APIs and establishing robust database connections with a user-friendly website interface. I had the opportunity to explore real-time data retrieval, learning how different event sources can be efficiently aggregated and presented to users in an engaging manner. Alongside honing my technical abilities, I was exposed to the critical importance of data consistency and security, which are essential in developing any modern web application.Working on this project also reinforced the significance of teamwork in a professional environment. Collaborating with peers enabled us to combine our diverse strengths and perspectives, resulting in creative problem-solving and a more polished final product. Through regular team meetings and iterative development, I gained practical insights into effective communication, version control, and agile methodologies. This project not only expanded my proficiency with APIs and databases but also underscored the value of collaborative effort and continuous learning in tackling real-world software challenges..', showDescription: false },
]);
</script>

<style scoped>
/* Projects formatting*/
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  width: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-button span {
  display: inline-block;
  transition: transform 0.3s;
}

.toggle-button span.rotated {
  transform: rotate(180deg);
}

/* Transitions for dropdown of project desc (extra credit). */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
