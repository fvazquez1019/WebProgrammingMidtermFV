<template><!--Template Section -->
  <n-layout>
      <n-layout-header class="app-header">  <!--Header Section -->                                   
        <div class="website_name">Francisco's Website</div>
        <div class="nav-buttons">   <!--Buttons for navigation through sections-->
          <n-button quaternary @click="currentView = Home">Home</n-button>
          <n-button quaternary @click="currentView = ProjectSection">Projects</n-button>
          <n-button quaternary @click="currentView = Contact">Contact</n-button>
        </div>
  </n-layout-header>
      
      <n-layout-content class="content">  <!-- Content Section of Website-->
        <component :is="currentView"></component>
        <SMAssignment1 :message="parentMessage" @buttonClicked="handleButtonClick" /> <!--Handles "Surprise" messaged required for Small Assignment 1-->
      </n-layout-content>
  </n-layout>

  <n-layout-footer class="website_footer"> <!--Footer Section-->
      <p>{{ infoStore.webInfo }}</p>
      <div>
        <p>Button Clicks: {{ counterStore.count }}</p> <!--Button click counter on footer that remembers clicks and uses ref() and v-on via @click-->
        <n-button color="#048A81" @click="counterStore.increment()">Click Here!</n-button>
      </div>
  </n-layout-footer>
  
</template>

<script setup> //Start JS section
//Importing all required files in counters/stores
  import { ref } from 'vue';
  import { useCounterStore } from './stores/counterStore';
  import { useInfoStore } from './stores/infoStore';
  import Home from './components/Home.vue';
  import ProjectSection from './components/ProjectSection.vue';
  import Contact from './components/Contact.vue';
  import SMAssignment1 from './components/SMAssignment1.vue';
  //variables for counters,stores etc.
  const currentView = ref(Home);
  const counter = ref(0);
  const counterStore = useCounterStore();
  const infoStore = useInfoStore();
  //Small Assignment 1 req. button
  const parentMessage = ref("Click for surprise!");
  const handleButtonClick = () => {
  alert("SURPRISE!!!!");
  };
 
</script>

<style scoped> /* CSS section for styling */
/* header styling */
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    background-color: #2B303A;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
/* Website Name (top left corner)*/
  .website_name {
    font-size: 23px;
    font-weight: bold;
  }
/* Nav button styling */
  .nav-buttons {
    background-color: white;
    display: flex;
    gap: 15px;
  }

/* Main Content Formatting*/
  .content {
    display: flex;
    flex-direction: column;
    align-items:center; 
    justify-content: flex-start; 
    padding: 6rem 2rem 2rem;
    width: 100%;
  }

/* Footer Styling  */
  .website_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    background-color: #2B303A;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
  .content {
    padding-bottom: 5rem;
    
  }
</style>
