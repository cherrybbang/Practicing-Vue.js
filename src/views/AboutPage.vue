<template>
  <HeaderGnb/>
  <h1>About</h1>

  <h2>바인딩 연습</h2>

  <p v-for="(data, index) in info" :key="index">
    {{ index }} : {{ data }}
  </p>
</template>

<script>
import HeaderGnb from '../components/HeaderGnb.vue';

export default {
  components: {
    HeaderGnb,
  },
  data(){
    return {
      info : {
        "이름": "박지유",
        "생년월일": "1994-10-18",
        "연락처": "010-5094-3857",
        "네이버 이메일": "etvxqj@naver.com",
        "구글 이메일": "eunjun1018@gmail.com",
        "사이트명": "GitHub",
        "사이트 주소": "https://github.com/cherrybbang?tab=repositories",
      }
    }
  }
}
</script>