<template>
  <div id="app">
    <div align="center">
      <v-app id="inspire">

        <v-container grid-list-md  text-xs-center>
          <v-layout row wrap>
            <v-flex xs2>
              <v-card dark color="primary">
                <v-card-text class="px-0">
                  <h1>{{n1}}</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card>
                <v-card-text class="px-0">
                  <h1>{{sign}}</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card dark color="primary">
                <v-card-text class="px-0">
                  <h1>{{n2}}</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card>
                <v-card-text class="px-0">
                  <h1>=</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card dark color="primary">
                <v-card-text class="px-0">
                  <h1>{{n3}}</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              
                <v-card-text class="px-0">
                  <Countdown deadline="now"></Countdown>
                </v-card-text>
             
            </v-flex>
          </v-layout>
        </v-container>

        <h1 align="left">Choose any one them:</h1>
        <v-container grid-list-md text-xs-center class="margin">
          <v-layout row wrap>
            <v-flex xs2>
              <v-btn color="red" @click="startTest" :disabled="!disabledBtn">
                <h1>Start</h1>
              </v-btn>
            </v-flex>
            <v-flex xs2>
              <v-btn color="red" @click="add" :disabled="disabledBtn">
                <h1>+</h1>
              </v-btn>
            </v-flex>
            <v-flex xs2>

              <v-btn color="green" @click="sub" :disabled="disabledBtn">
                <h1>-</h1>
              </v-btn>

            </v-flex>
            <v-flex xs2>

              <v-btn color="yellow" @click="multi" :disabled="disabledBtn">
                <h1>*</h1>
              </v-btn>

            </v-flex>
            <v-flex xs2>

              <v-btn color="pink" @click="division" :disabled="disabledBtn">
                <h1>/</h1>
              </v-btn>

            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row justify-center v-if="valid">
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline">Test result:</v-card-title>
              <v-card-text>Your total marks : {{marksCount}}</v-card-text>
              <v-card-text>Accuracy : {{(marksCount/10)*100}}%</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click.native="closeWin">Submit</v-btn>
                <v-btn color="green darken-1" flat="flat" @click.native="closeWin">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-app>
    </div>
   
    
    
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'
export default {
  name: 'app',
  data() {
    return {
      now:((Date.now()*1000)/60)+120,
      valid: false,
      sign: "?",
      number1: [1, 22, 7, 4, 5, 6, 7, 8, 99, 1],
      number2: [1, 11, 3, 4, 5, 6, 7, 7, 9, 1],
      result: [2, 2, 4, 16, 25, 12, 49, 15, 90, 1],
      n1: 0,
      n2: 0,
      n3: 0,
      countNum: -1,
      disabledBtn: true,
      marksCount: 0,
      dialog: false,
      minutes: 0,
      seconds: 0

    }
  },
  methods: {
    countdown: function () {
        this.counting = true;
      },
    startTest() {

      this.getNumberAtIndex();
      this.disabledBtn = false;
      console.log(this.disabledBtn)
    },
    getNumberAtIndex() {
      this.countNum++;
      this.n1 = this.number1[this.countNum];
      this.n2 = this.number2[this.countNum];
      this.n3 = this.result[this.countNum]
    },
    add() {
      this.sign = "+";
      this.calculateResult();
      this.getNumberAtIndex();
      this.sign = "?"
    },
    sub() {
      this.sign = "-";
      this.calculateResult();
      this.getNumberAtIndex();
      this.sign = "?"
    },
    multi() {
      this.sign = "*";
      this.calculateResult();
      this.getNumberAtIndex();
      this.sign = "?"
    },
    division() {
      this.sign = "/";
      this.calculateResult();
      this.getNumberAtIndex();
      this.sign = "?"
    },
    calculateResult() {
      if (this.sign == '+') {
        if (this.n1 + this.n2 == this.n3) {
          this.marksCount++
          console.log("marks:" + this.marksCount)
        }
      } else if (this.sign === "-") {
        if (this.n1 - this.n2 === this.n3) {
          this.marksCount++
          console.log("marks:" + this.marksCount)
        }
      } else if (this.sign === "*") {
        if (this.n1 * this.n2 === this.n3) {
          this.marksCount++
          console.log("marks:" + this.marksCount)
        }
      } else if (this.sign === "/") {
        if (this.n1 / this.n2 === this.n3) {
          this.marksCount++
          console.log("marks:" + this.marksCount)
        }
      }
      if (this.countNum === 9) {
        this.n1 = 0;
        this.n2 = 0;
        this.n3 = 0;
        this.sign = "?"
        this.valid = true;
        this.dialog = true;

      }


    },
    closeWin() {
      window.close();
      this.dialog = false;
    }

  },
  created() {

  },
  components: {
    Countdown
  }
}
</script>

<style>
label {
  width: 200px;
  display: inline-block;
}

.margin {
  margin-top: 50px;
}
</style>
