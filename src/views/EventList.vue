<template>
  <main class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventService from '../services/EventService'
import EventCard from '../components/EventCard.vue'

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventService.getEvents()
    .then((response) => this.events = response.data)
    .catch((error) => console.log('error: ', error))
  }
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
