<template>
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
    <div class="select">
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
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</template>

<script>
export default {
    name: 'subject'
}
</script>