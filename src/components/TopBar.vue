<script>
import { navigateToUrl } from "single-spa";

function nav(url) {
  navigateToUrl(url);
}

export default {
  name: "TopBar",
  setup() {
    return { nav };
  },
};
</script>

<template>
  <div class="prop-tech-topbar">
    <div class="prop-tech-topbar-logo">
      <img src="@/assets/logo2.png" alt="PropTech logo" />
      <p>PropTech</p>
    </div>
    <div class="prop-tech-topbar-links">
      <p @click="nav('/')">About</p>
      <p>Services</p>
      <p>Blog</p>
      <p>Contact</p>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
  font-size: 16px;
}

.prop-tech-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  max-height: 3.75em;
  font-family: "Arial", sans-serif;
  max-width: 1440px;
  margin: auto;
  height: 3.75em;
}

.prop-tech-topbar-logo,
.prop-tech-topbar-links {
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  justify-content: flex-start;
  align-items: center;
}

.prop-tech-topbar-logo p {
  font-size: 26px;
  font-style: italic;
}

img {
  height: 2.5em;
  width: 5em;
}
</style>
