<template>
    <div>
        <h1>회원가입</h1>

        <form v-on:submit.prevent>
          <div>
            <label>이메일 : </label>
            <input type="text" v-model="newemail" placeholder="이메일을 입력해주세요." minlength="6"/><br>

            <label>비밀번호 : </label>
            <input type="text" v-model="newpw" placeholder="비밀번호를 입력해주세요." minlength="8" maxlength="12"/>
            <br>
            
            <label>비밀번호 재확인 : </label>
            <input type="text" v-model="rightpw" placeholder="비밀번호를 재확인해주세요." minlength="8" maxlength="12"/><br>

            <label>이름 : </label>
            <input type="text" v-model="newname" placeholder="이름을 입력해주세요."/><br>

            <label>나이 : </label>
            <input type="text" v-model="newage" placeholder="나이를 입력해주세요."/><br>

            <button @click="join">가입하기</button>

            <p style="border: 1px solid orange;">
              예시데이터 :<br>
              이메일 > join@join.com<br>
              비밀번호 > join!123<br>
              이름 > 박지유<br>
              나이 > 29
            </p>
          </div>
        </form>
    </div>
</template>


<script>
/* eslint-disable */ // 해당 파일 맨위쪽에 작성하면 eslint 경고가 무시된다.
// import joinResult from '../account/joinResult.vue';

export default {
  data() {
    return {
      newemail: '',
      newpw: '',
      rightpw: '',
      newname: '',
      newage: '',
    }
  },
  methods : {
    join(){
      const typeEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      const typePw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

      // 빈값일 경우.
      if(!this.newemail) {
        alert('이메일 입력을 하지 않았습니다.');
        return false;
      }
      if(!this.newpw) {
        alert('비밀번호 입력을 하지 않았습니다.');
        return false;
      }
      if(!this.rightpw) {
        alert('비밀번호 재확인을 하지 않았습니다.');
        return false;
      }
      if(!this.newname) {
        alert('이름 입력을 하지 않았습니다.');
        return false;
      }
      if(!this.newage) {
        alert('나이 입력을 하지 않았습니다.');
        return false;
      }

      // 이메일 값이 틀린 경우.
      if(typeEmail.test(this.newemail) == false) {
        alert('이메일을 올바르게 입력해주세요.');
        return false;
      }

      // 비밀번호 값이 틀린 경우.
      if(typePw.test(this.newpw) == false) {
        alert('비밀번호를 올바르게 입력해주세요.');
        return false;
      }

      //모든 값이 충족될 경우.
      
      if(this.newpw === this.rightpw){
        alert('환영합니다.');

        var params = {
        newname : this.newname, 
        newage : this.newage,
        }

        this.$router.push({name:'JoinMain', params : params})

      } else {
        
        alert('비밀번호를 다시 확인해주세요.');
        return false;
      
      }


    },  
  },

}
</script>

<style scoped>
div {
  width: 500px;
  /* border: 1px solid #ccc; */
  text-align: center;
  margin: 0 auto;
}
</style>
