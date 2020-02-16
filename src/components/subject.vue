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
          <router-link
            to="/"
            class="navbar-item is-inverted is-primary has-text-white"
            id="home"
          >Home</router-link>
          <router-link to="/mytrip" class="navbar-item has-text-white" id="trip">My Trip</router-link>
          <div class="navbar-item control">
            <input class="input" type="text" placeholder="Search" id="search" />
          </div>
          <span class="navbar-item">
            <router-link
              to="/subject"
              class="button is-primary is-inverted"
              id="subject"
            >Add subject</router-link>
          </span>
        </div>
      </div>
    </nav>
    <br />
    <br />

    <div class="container">
      <form>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input v-model="userName" class="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="email" placeholder="Email" />
          </div>
        </div>

        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" v-model="title" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select is-center">
              <select v-model="selectedSubject">
                <option>Event</option>
                <option>Place</option>
                <option>Accommondation</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Region</label>
          <div class="control">
            <div class="select">
              <select v-model="selectedRegion">
                <option>Central Croatia</option>
                <option>City of Zagreb</option>
                <option>Dubrovnik</option>
                <option>Split</option>
                <option>Zadar</option>
                <option>Šibenik</option>
                <option>Istria</option>
                <option>Kvarner</option>
                <option>Lika - Karlovac</option>
                <option>Slavonia</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Upload a picture</label>
          <div class="file has-name">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                id="file"
                ref="fileInput"
                @change="handleFileUpload()"
                multiple
              />
              <span class="file-cta">
                <span class="file-label">Choose a file…</span>
              </span>
              <span class="file-name">{{imageData}}</span>
            </label>
          </div>
        </div>

        <div class="field">
          <label class="label">Details</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea" v-model="details"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="cb" required />
              I agree to the
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" v-if="cb" v-on:click="addNewEvent()">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
      <br />
      <label class="label">Preview</label>
      <br />
      <p>By {{userName}}</p>
      <br />
      <p>Email: {{email}}</p>
      <br />
      <p>Title: {{title}}</p>
      <br />
      <p>Selected Region: {{selectedRegion}}</p>
      <br />
      <p>Selected Subject: {{selectedSubject}}</p>
      <br />Picture:
      <br />
      <img v-if="imageData" :src="imageData" width="200px" />
      <br />
      <p>Details: {{details}}</p>
      <br />
    </div>
  </section>
  <br />
  <br />
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
  },
  methods: {
    addNewEvent: function() {
      this.eventi.push({
        id: this.nextEventId++,
        user: this.userName,
        image: this.imageData,
        title: this.title,
        details: this.details,
        selectedRegion: this.selectedRegion,
        selectedSubject: this.selectedSubject
      });
      this.userName = "";
      this.imageData = "";
      this.title = "";
      this.details = "";
      this.selectedRegion = "";
      this.selectedSubject = "";
      this.email = "";
      console.log(this.eventi);
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },
    handleFileUpload() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1076px) {
  .container {
    text-align: center;
    width: 50%;
  }
  .navbar-item {
    margin: 0 auto;
    text-align: center;
  }
  .navbar-end {
    margin: 0 auto;
    width: 50%;
  }
  #subject {
    display: none;
  }

  input {
    text-align: center;
  }
  .control {
    margin: 0 auto;
    text-align: center;
  }
  .file-label {
    margin: 0 auto;
    text-align: center;
  }
}
</style>