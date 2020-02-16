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
          <h1 class="title is-1">Events</h1>

          <div id="svi-eventi">
            <div
              v-for="event in eventi"
              v-bind:key="event.id"
              v-bind:image="event.image"
              v-bind:title="event.title"
              v-bind:description="event.description"
            >{{event.value}}</div>

            <br />
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
import Vue from "vue";
import subject from "./subject.vue";
export default {
  name: "subject",
  props: {
    userName: String,
    title: String,
    selectedRegion: String,
    selectedSubject: String,
    email: String,
    details: String
  },
  data() {
    return {
      eventi: [{}],
      nextEventId: 1,
      cb: null,
      imageData: "",
      url: null
    };
  }
};
/**new Vue({
  el: "#svi-eventi",
  data() {
    return {
      newImage: "",
      newTitle: "",
      newDescription: "",
      eventi: [
        {
          id: 1,
          image: "infogamer.png",
          title: "REBOOT INFOGAMER 2019 POWERED BY A1",
          description: "12.-17.11.2019.  ZAGREB, UTO – NED 10.00 – 20.00"
        },
        {
          id: 2,
          image: "fatboyslim.jpg",
          title: "Fatboy Slim",
          description: "07.03.2020. u 21:00h Zagrebački velesajam"
        }
      ],
      nextEventId: 3
    };
  },
  methods: {
    addNewEvent: function() {
      this.eventi.push({
        id: this.nextEventId++,
        image: this.newImage,
        title: this.newTitle,
        description: this.newDescription
      });
      this.newImage = "";
      this.newTitle = "";
      this.newDescription = "";
    }
  }
});**/
/**
export default {
  name: "events",
  data() {
    return {
      newImage: "",
      newTitle: "",
      newDescription: "",
      eventi: [
        {
          id: 1,
          image: "infogamer.png",
          title: "REBOOT INFOGAMER 2019 POWERED BY A1",
          description: "12.-17.11.2019.  ZAGREB, UTO – NED 10.00 – 20.00"
        },
        {
          id: 2,
          image: "fatboyslim.jpg",
          title: "Fatboy Slim",
          description: "07.03.2020. u 21:00h Zagrebački velesajam"
        }
      ],
      nextEventId: 3
    };
  },
  methods: {
    addNewEvent: function() {
      this.eventi.push({
        id: this.nextEventId++,
        image: this.newImage,
        title: this.newTitle,
        description: this.newDescription
      });
      this.newImage = "";
      this.newTitle = "";
      this.newDescription = "";
    }
  }
};

**/
</script>


