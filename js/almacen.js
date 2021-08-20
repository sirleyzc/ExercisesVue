var app = new Vue({
    el:'#app',
    data: {
        value: null,
        result: null,
        valuedcto: null,
        percent: null
    },
    methods: {
        dcto(){
            if (this.value >= 1000000){
                this.valuedcto = this.value * this.percent / 100;
                this.result = this.value - this.valuedcto;
            } else {
                this.result = this.value;
            } 
        }    
    },

});