<template>
<body>
<section>
<nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
            <i class="fas fa-paper-plane"></i>
            <router-link to="/"><h1 class="navbar-item title is-5 has-text-white">Hood Explorer</h1></router-link>
        </a>
        </div>
          <div class="navbar-end">
            <router-link to="/" class="navbar-item is-inverted is-primary has-text-white" id="home">
              Home
            </router-link>
            <router-link to="/mytrip" class="navbar-item has-text-white" id="trip">
              My Trip
            </router-link>
            <div class="navbar-item control">
        <input class="input" type="text" placeholder="Search" id="search">
    </div>
            <span class="navbar-item">
              <router-link to="/subject" class="button is-primary is-inverted" id="subject">
                Add subject
              </router-link>
            </span>
          </div>
        </div>
    </nav>
  <br><br>
<div class="container">
    <div class="field">
  <label class="label">Username</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>


<div class="field">
    <label class="label">Email</label>
  <div class="control">
  <input class="input" type="email" placeholder="Email">
</div>
</div>

<div class="field">
  <label class="label">Title</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select is-center">
      <select>
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
      <select>
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
    <input class="file-input" type="file" name="resume">
    <span class="file-cta">
      <span class="file-label">
        Choose a file…
      </span>
    </span>
    <span class="file-name">
      Screen Shot 2017-07-29 at 15.54.25.png
    </span>
  </label>
</div>
</div>

<div class="field">
  <label class="label">Details</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>


<div class="field is-grouped">
  <div class="control" >
    <button class="button is-link" >Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</section>
<br><br>
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
    name: 'subject'
}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 1076px) {
  .container{
    text-align:center;
    width:50%;
  }
  .navbar-item{
   margin: 0 auto;
    text-align: center;
  }
  .navbar-end{
    margin: 0 auto;
    width:50%;
  }
  #subject{
    display: none;
  }
  
  input{
    text-align: center;
  }
  .control{
    margin:0 auto;
    text-align:center;
  }
  .file-label{
    margin:0 auto;
    text-align: center;
  }
  
}
</style>