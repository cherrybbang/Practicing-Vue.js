<template>
    <div>
      <h1>{{ newname }}님 가입을 환영합니다.</h1>
      <p>{{ newname }}님의 나이는 {{ newage }}살 이군요.</p>
      
      <h2 v-bind:class="{hide : inActive}">{{ number }} 가 5가 되면 가려주세요.</h2>
      <button @click="inCrease">증가</button>
      <button @click="deCrease">감소</button>

      <ul>
        <li v-for="(user, index) in userList" :key="index">
            이름: {{ user.name }}<br>
            나이: {{ user.age }}
        </li>
      </ul>

      <div>
        이름 : <input type="text" v-model="name" />
        나이 : <input type="text" maxlength="2" oninput="this.value = this.value.replace(/[^0-9.]/g, '')"  v-model="age"/>
      </div>
      <button @click="addList" style="margin-top: 20px;">리스트 추가하기</button>

      <div style="margin-top: 20px;">
        이름 : <input type="text" v-model="findname" />
      </div>
      <h3>{{findname}}의 나이는 {{ whatage }} 입니다.</h3>
      <button @click="findAge">나이 찾기</button>

      <button @click="backToMain">메인페이지로</button>
    </div>
</template>


<script>
export default {
  data() {
    return {
      newname: '',
      newage: '',
      number: 0,
      inActive: false,
      userList: [
        {
          name: "홍길동",
          age: 30
        },
        {
          name: "신짱구",
          age: 14
        },
        {
          name: "김선녀",
          age: 25
        },
        {
          name: "나무꾼",
          age: 28
        },
        {
          name: '박지유',
          age: 29
        }
      ],
      name: '',
      age: '',
      findname: '',
      whatage:'',
    }
  },
  created() {
    // console.log('아이디 확인', this.$route.params)
  },
  mounted() {
    this.newname = this.$route.params.newname;
    this.newage = this.$route.params.newage;

  },
  methods : {
    inCrease(){
      this.number++

      if(this.number === 5) {
        this.inActive = true;
      } else {
        this.inActive = false;
      }
    },
    deCrease(){
      this.number--;

      if(this.number === 5) {
        this.inActive = true;
      } else {
        this.inActive = false;
      }
    },
    addList() {
      if(this.name && this.age){
        this.userList.push({
          name : this.name,
          age : this.age
        })
      } else {
        if(!this.name && !this.age){
          alert('이름과 나이를 모두 입력해주세요!')
          return false;
        }
        if(!this.name){
          alert('이름을 입력해주세요!')
          return false;
        }
        if(!this.age){
          alert('나이를 입력해주세요!')
          return false;
        }
      }
    },
    findAge() {      
      for (let i=0; i<this.userList.length; i++){
        const getname = this.userList[i];

        // console.log(getname.name);

        if(this.findname === getname.name) {
          // alert('같은 이름이 있습니다.');
          // console.log(getname.age)
          this.whatage = getname.age;
          return false;
        }
      }
    },
    backToMain(){
      this.$router.push('/')
      
    //   var params = {
    //     id : this.newname, 
    //     age : this.newage,
    //   }
    //   this.$router.push({name:'mainpage', params : params})
    }
  },

}
</script>

<style scoped>
.hide {
  display: none;
}

button:last-child {
    display: block;
    margin-top: 20px;
}
</style>