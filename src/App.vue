<template>
  <div id="app">
    NASLOVNICA <br><br>
    <index/><br><br>
    OVO JE KAD SE IDE NA ADD SUBJECT
    <subject/>
  </div>
</template>

<script>
import index from './components/index.vue'
import subject from './components/subject.vue'
import events from './components/events.vue'
export default {
  name: 'app',
  components:{
    index,
    subject,
    events
  }
}
</script>

<style>

</style>
