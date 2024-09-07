<script setup>
import HeaderContainer from '@/components/HeaderContainer.vue';
import HomeContainer from '@/components/HomeContainer.vue';
import DescriptionContainer from '@/components/DescriptionContainer.vue';
import ExperienceContainer from '@/components/ExperienceContainer.vue';
import ProjectsContainer from '@/components/ProjectsContainer.vue';
import ContactsContainer from '@/components/ContactsContainer.vue';
import FooterContainer from '@/components/FooterContainer.vue';
</script>

<template>
  <div id="single_page_container">
    <HeaderContainer />
    <main>
      <HomeContainer />
      <DescriptionContainer />
      <ExperienceContainer />
      <ProjectsContainer />
      <ContactsContainer />
      <FooterContainer />
    </main>
  </div>
</template>

<style>
  #single_page_container {
    scroll-behavior: smooth;
  }
  main {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  main::-webkit-scrollbar {
    display: none;
  }
  main > * {
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
  }
</style>