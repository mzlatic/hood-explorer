<template>
<body>
    <section>
  <!-- Hero head: will stick at the top -->
    <nav class="navbar is-primary">
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
    <div class="section">
        <div class="container">
    <div class="is-widescreen">
    <h1 class="title is-1">My trip</h1>
    <div class="tabs ">
        <ul>
            <li class="is-active"><a>Going</a></li>
            <li><a>Wishlist</a></li>
            <li><a>Collection</a></li>
            <li><a>My Subjects</a></li>
        </ul>
      </div>
      <div class="columns">
      
         <img class="column" src="../slike/infogamer.png" >

      <div class="column is-10">
          <br><br><br>
      <h2 class="title is-4 has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
      <h2 class="subtitle is-4">12.-17.11.2019.  ZAGREB, UTO – NED 10.00 – 20.00</h2>
      </div>
    </div>
    <div class="columns">
         <img class="column" src="../slike/infogamer.png" >
      <div class="column is-10">
          <br><br><br>
      <h2 class="title is-4 has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
      <h2 class="subtitle is-4">12.-17.11.2019.  ZAGREB, UTO – NED 10.00 – 20.00</h2>
      </div>
    </div>
    <div class="columns">
         <img class="column" src="../slike/infogamer.png" >
      <div class="column is-10">
          <br><br><br>
      <h2 class="title is-4 has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
      <h2 class="subtitle is-4">12.-17.11.2019.  ZAGREB, UTO – NED 10.00 – 20.00</h2>
      </div>
    </div>
    </div>
    </div>
    </div>
  </section>
  <footer class="footer">
  <div class="content has-text-centered has-text-black">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
</body>
</template>

<script>
export default {
    name: 'mytrip'
}
</script>