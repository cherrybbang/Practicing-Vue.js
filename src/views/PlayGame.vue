<template>
    <HeaderGnb/>
    <h1>Game</h1>

    <h2>가위바위보 게임</h2>
    <p>
        1. 왼쪽 박스에서 Rock,Paper,Scissors 중 하나를 선택한 후 '선택완료'를 누른다.<br>
        2. 가운데 숫자 카운트다운이 끝나면, 오른쪽 박스에서 랜덤으로 Rock,Paper,Scissors 중 하나를 골라준다.<br>
        3. 3승 내기이다.
    </p>

    <div class="body">
        <div class="container">
            <div class="box">
                <img v-bind:src="myturnImage" />

                <div>
                    {{mywin}}승 {{mylose}}패
                </div>
                <br />
                <div>
                    <input type="radio" value="rock" id="rock" name="first" v-model="myturn" @change="changeImage()"/>
                    <label for="rock">Rock</label>
                    <input type="radio" value="paper" id="paper" name="first" v-model="myturn" @change="changeImage()"/>
                    <label for="paper">Paper</label>
                    <input type="radio" value="scissors" id="scissors" v-model="myturn" name="first" @change="changeImage()"/>
                    <label for="scissors">Scissors</label>
                </div>
                <div>
                    <button @click="countNumber()">선택 완료</button>
                </div>
            </div>
            <div class="counting" style="font-size: 70px;">
                {{ counting }}
            </div>
            <div class="box">
                <img v-bind:src="yourturnImage" />
                <div>
                    {{yourwin}}승 {{yourlose}}패
                </div>
                <br />
                <div>
                    <input type="radio" value="rock" name="second" v-model="yourturn"/>
                    <label>Rock</label>
                    <input type="radio" value="paper" name="second" v-model="yourturn"/>
                    <label>Paper</label>
                    <input type="radio" value="scissors" name="second" v-model="yourturn"/>
                    <label>Scissors</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderGnb from '../components/HeaderGnb.vue';
// import { resolveTransitionHooks } from 'vue';
import rockImage from '../assets/rock.png'
import paperImage from '../assets/paper.png'
import scissorsImage from '../assets/scissors.png'

export default {
  components: {
    HeaderGnb,
  },
  data() {
    return {
        myturnImage: rockImage,
        yourturnImage: rockImage,
        counting: 3,
        timer: false,
        myturn: "rock",
        yourturn: 'rock',
        yourturnList: [rockImage, paperImage, scissorsImage],
        mywin: 0,
        mylose: 0,
        yourwin: 0,
        yourlose: 0,
    }
  },
  mounted() {
    // console.log(this.img);
    // setInterval(this.countNumber, 1000)
  },
  watch : {

    timer(value) {
        if(value) {
            setTimeout(() => {
                this.counting--;
            },1000);
        }
    },

    counting : {
        handler(value) {
            if (value>0 && this.timer) {
                setTimeout(() => {
                    this.counting--;
                },1000);
            }

            if(value === 0) {
                // console.log('0이 되었습니다.');
                // console.log(this.yourturnImage);
              let randomImage = Math.floor(Math.random()*this.yourturnList.length);
              this.yourturnImage = this.yourturnList[randomImage];
                // console.log(randomImage)
                if(randomImage === 0) {
                    this.yourturn = 'rock'
                }
                if(randomImage === 1) {
                    this.yourturn = 'paper'
                }
                if(randomImage === 2) {
                    this.yourturn = 'scissors'
                }
                
                if(this.myturn === 'rock'){
                    if(this.yourturn === 'paper') {
                    this.mylose ++;
                    this.yourwin ++;
                    }
                    if(this.yourturn === 'scissors') {
                        this.mywin ++;
                        this.yourlose ++;
                    }
                } 

                if(this.myturn === 'paper'){
                    if(this.yourturn === 'rock') {
                        this.mywin ++;
                        this.yourlose ++;
                    }
                    if(this.yourturn === 'scissors') {
                        this.mylose ++;
                        this.yourwin ++;
                    }
                } 

                if(this.myturn === 'scissors'){
                    if(this.yourturn === 'rock') {
                        this.mylose ++;
                        this.yourwin ++;
                    }
                    if(this.yourturn === 'paper') {
                        this.mywin ++;
                        this.yourlose ++;
                    }
                }

                if((this.mywin + this.mylose) === 3) {
                    if(this.mywin > this.yourwin) {
                        let tryAgain = confirm('승리하셨습니다. 게임을 계속하시겠습니까?');
                        if(tryAgain == true) {
                            this.mywin = 0;
                            this.mylose = 0;
                            this.yourwin = 0;
                            this.yourlose = 0;
                        }
                    } else {
                        let tryAgain = confirm('패배하셨습니다. 게임을 계속하시겠습니까?');
                        if(tryAgain == true) {
                            this.mywin = 0;
                            this.mylose = 0;
                            this.yourwin = 0;
                            this.yourlose = 0;
                        }
                    }
                }

              this.counting = 3;
              this.timer = false;

            }
        },
        // immediate: true
    },
  },
  methods : {
    changeImage(){
        if(this.myturn == 'rock') {
            this.myturnImage = rockImage;
        }
        if(this.myturn == 'paper') {
            this.myturnImage = paperImage;
        }
        if(this.myturn == 'scissors') {
            this.myturnImage = scissorsImage;
        }
    },
    countNumber() {
        this.timer = true;
    },
  },
}
</script>

<style scoped>
.body {
    text-align:center;
}
.container {
    margin:0 auto;
    display:flex;
    justify-content: center;
}
.counting {
    width:200px;
}
.box {
    border: 1px solid #ccc;
    width: 500px; height: 500px;
}
.box > img {
    display: block;
    width: 200px; height: 200px;
    margin: 20px auto;
}
</style>