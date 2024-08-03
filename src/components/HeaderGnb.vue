<template>
  <ul class="gnb">
    <li><router-link to="/home" class="link">Home</router-link></li>
    <li><router-link to="/books" class="link">Books</router-link></li>
    <li><router-link to="/about" class="link">About</router-link></li>
    <li><router-link to="/game" class="link">Game</router-link></li>
  </ul>
  <HomePage/>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0; padding: 0;
  box-sizing: border-box;
}

.gnb {
  display: flex;
  justify-content: space-between;

  width: 100%; height: 70px;
  border: 1px solid #ccc;
}

.gnb > li {
  width: 33%; height: inherit;
  list-style: none;
  text-align: center; line-height: 70px;
  font-size: 20px;
  border: 1px solid turquoise;
}

.link {
  display: block;
  width: 100%; height: 100%;
  color: #000;
  text-decoration: none;
}

.link:hover {
  color: orange;
}
</style>
