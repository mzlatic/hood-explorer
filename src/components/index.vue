<template>
<body>
  <section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <i class="fas fa-paper-plane"></i>
              <router-link to="/">
                <h1 class="navbar-item title is-5 has-text-white">Hood Explorer</h1>
              </router-link>
            </a>
          </div>
          <div class="navbar-end">
            <router-link to="/" class="navbar-item is-active has-text-white" id="home">Home</router-link>
            <router-link to="/mytrip" class="navbar-item has-text-white" id="trip">My Trip</router-link>
            <div class="navbar-item control" id="search">
              <input class="input" type="text" placeholder="Search" />
            </div>
            <span class="navbar-item" id="add">
              <router-link to="/subject">
                <a class="button is-primary is-inverted">Add subject</a>
              </router-link>
            </span>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Fulfill Your trip</h1>
        <h2 class="subtitle"></h2>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container tabs is-boxed">
          <ul>
            <li v-bind:class="[isActive1 ? 'is-active' : '']" @click="toggleClass1()">
              <a>Events</a>
            </li>
            <li v-bind:class="[isActive2 ? 'is-active' : '']" @click="toggleClass2()">
              <a>Places</a>
            </li>
            <li v-bind:class="[isActive3 ? 'is-active' : '']" @click="toggleClass3()">
              <a>Accommondations</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  <div class="section">
    <div class="container is-widescreen">
      <div class="columns has-text-centered">
        <div class="column">
          <router-link to="/events">
            <img src="../slike/infogamer.png" />
          </router-link>
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
        <div class="column">
          <img src="../slike/infogamer.png" alt />
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
        <div class="column">
          <img src="../slike/infogamer.png" alt />
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
        <div class="column">
          <img src="../slike/infogamer.png" alt />
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
      </div>
      <div class="columns has-text-centered">
        <div class="column">
          <img src="../slike/infogamer.png" alt />
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
        <div class="column">
          <img src="../slike/infogamer.png" alt />
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
        <div class="column">
          <img src="../slike/infogamer.png" alt />
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
        <div class="column">
          <img src="../slike/infogamer.png" alt />
          <h2 class="has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
          <h3>12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h3>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="content has-text-centered has-text-black">
      <p>
        <strong>Bulma</strong> by
        <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed
        <a
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >CC BY NC SA 4.0</a>.
      </p>
    </div>
  </footer>
</body>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false
    };
  },
  methods: {
    toggleClass1: function() {
      (this.isActive1 = true),
        (this.isActive2 = false),
        (this.isActive3 = false);
    },
    toggleClass2: function() {
      (this.isActive2 = true),
        (this.isActive1 = false),
        (this.isActive3 = false);
    },
    toggleClass3: function() {
      (this.isActive3 = true),
        (this.isActive1 = false),
        (this.isActive2 = false);
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1080px) {
  .navbar-end {
    margin: 0 auto;
    width: 50%;
  }
  .navbar-item {
    margin: 0 auto;
    text-align: center;
  }
  #home {
    display: none;
  }
  input {
    text-align: center;
  }
  li {
    margin: 0 auto;
    width: 33%;
  }
}
</style>
  

