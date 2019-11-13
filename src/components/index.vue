<template>
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
            <i class="fas fa-paper-plane"></i>
            <h1 class="navbar-item title is-5 has-text-white">Hood Explorer </h1>
        </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              My trip
            </a>
            <div class="navbar-item control">
        <input class="input" type="text" placeholder="Search">
    </div>
            <span class="navbar-item">
              <a href="./subject.vue" class="button is-primary is-inverted">
                Add Subject
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Fulfill Your trip
      </h1>
      <h2 class="subtitle">
        
      </h2>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container tabs is-boxed">
        <ul>
          <li class="is-active"><a>Events</a></li>
          <li><a>Places</a></li>
          <li><a>Accommondations</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <footer class="footer">
  <div class="content has-text-centered has-text-black">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
</section>
</template>

<script>
import subject from './subject.vue'
export default {
    name: 'index',
    components:{
        subject
    }
}

</script>

<style lang="scss" scoped>
</style>
  


 