var app = new Vue({
    el: '#app',
    data: {
        num1: null,
        num2: null,
        rta: null
        },
        
    methods: {
      add(){
          this.rta = this.num1 + this.num2;
      },
      substract(){
        this.rta = this.num1 - this.num2;
      },
      multiply(){
        this.rta = this.num1 * this.num2;
      },
      divide(){
          if (this.num2 == 0) {
              this.rta = "Error, no se puede dividir por cero"
          } else {
              this.rta = this.num1 / this.num2;
          }
      }
    },
  });