<template>
  <HeaderGnb/>
  <h1>Books</h1>

  <h2>책 제목 클릭해서 읽음여부 바꿔주기</h2>

  <table border="1" cellspacing="0" width="500">
    <tr>
      <th>No.</th>
      <th>책 제목</th>
      <th>읽음 (Y/N)</th>
    </tr>

    <tr v-for="(book, index) in books" :key="index" class="table">
      <td>{{ book.id }}</td>
      <td><a href="#" @click="clickToRead(book)" class="title">{{ book.title }}</a></td>
      <td>{{ book.isread ? 'Y' : 'N' }}</td>
    </tr>
  </table>


</template>

<script>
import HeaderGnb from '../components/HeaderGnb.vue';
import books from "@/views/BooksList.vue"; 

export default {
  components: {
    HeaderGnb,
  },
  data() {
    return {
      books : [],
    }
  },
  mounted() {
    this.books = books;
  },
  methods: {
    clickToRead(book) {
      alert(`${book.description}`);
      book.isread = true;
    }
  }
}

</script>

<style scoped>
.table {
  text-align: center;
}

.title {
  display: block;
  width: 100%;
  text-decoration: none;
  color: #000;
}
</style>