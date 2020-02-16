<template>
<body>
  <section>
    <nav class="navbar is-primary">
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
          <router-link to="/" class="navbar-item has-text-white" id="home">Home</router-link>
          <router-link to="/mytrip" id="trip" class="navbar-item is-active">My Trip</router-link>
          <div class="navbar-item control">
            <input class="input" type="text" placeholder="Search" />
          </div>
          <span class="navbar-item">
            <router-link to="/subject">
              <a class="button is-primary is-inverted">Add subject</a>
            </router-link>
          </span>
        </div>
      </div>
    </nav>
    <div class="section">
      <div class="container">
        <div class="is-widescreen">
          <h1 class="title is-1">My trip</h1>
          <div class="tabs">
            <ul>
              <li v-bind:class="[isActive1 ? 'is-active' : '']" @click="toggleClass1()">
                <a>Going</a>
              </li>
              <li v-bind:class="[isActive2 ? 'is-active' : '']" @click="toggleClass2()">
                <a>Wishlist</a>
              </li>
              <li v-bind:class="[isActive3 ? 'is-active' : '']" @click="toggleClass3()">
                <a>Collection</a>
              </li>
              <li v-bind:class="[isActive4 ? 'is-active' : '']" @click="toggleClass4()">
                <a>My Subjects</a>
              </li>
            </ul>
          </div>
          <div class="columns">
            <img class="column" src="../slike/infogamer.png" />

            <div class="column is-11">
              <br />
              <br />
              <br />
              <h2 class="title is-4 has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
              <h2 class="subtitle is-4">12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h2>
            </div>
          </div>
          <div class="columns">
            <img class="column" src="../slike/infogamer.png" />
            <div class="column is-11">
              <br />
              <br />
              <br />
              <h2 class="title is-4 has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
              <h2 class="subtitle is-4">12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h2>
            </div>
          </div>
          <div class="columns">
            <img class="column" src="../slike/infogamer.png" />
            <div class="column is-11">
              <br />
              <br />
              <br />
              <h2 class="title is-4 has-text-weight-bold">REBOOT INFOGAMER 2019 POWERED BY A1</h2>
              <h2 class="subtitle is-4">12.-17.11.2019. ZAGREB, UTO – NED 10.00 – 20.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  name: "mytrip",
  data() {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false
    };
  },
  methods: {
    toggleClass1: function() {
      (this.isActive1 = true),
        (this.isActive2 = false),
        (this.isActive3 = false),
        (this.isActive4 = false);
    },
    toggleClass2: function() {
      (this.isActive2 = true),
        (this.isActive1 = false),
        (this.isActive3 = false),
        (this.isActive4 = false);
    },
    toggleClass3: function() {
      (this.isActive3 = true),
        (this.isActive1 = false),
        (this.isActive2 = false),
        (this.isActive4 = false);
    },
    toggleClass4: function() {
      (this.isActive4 = true),
        (this.isActive1 = false),
        (this.isActive2 = false),
        (this.isActive3 = false);
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1076px) {
  .navbar-end {
    margin: 0 auto;
    width: 50%;
  }
  .navbar-item {
    margin: 0 auto;
    text-align: center;
  }
  #trip {
    display: none;
  }
  input {
    text-align: center;
  }
}
</style>