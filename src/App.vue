<template>
  <div id="app">
    <br>
    NASLOVNICA <br><br>
    <index/><br><br>
    OVO JE KAD SE IDE NA ADD SUBJECT
    <br><br>
    <subject/><br><br>
    OVO JE MYTRIP
    <br><br>
    <mytrip/>
  </div>
</template>

<script>
import index from './components/index.vue'
import subject from './components/subject.vue'
import events from './components/events.vue'
import mytrip from './components/mytrip.vue'
export default {
  name: 'app',
  components:{
    index,
    subject,
    events,
    mytrip
  }
}
</script>

<style>

</style>

