var app = new Vue({
    el: "#app",
    data: {
        option: "0",
        pPear: 600,
        pPineapple: 1800,
        amount: null,
        total: 0,
        cont: 0,
        isPay: 0,
        tCash: 0,
        tPay: 0
    },

    methods: {
        calculatePrice(){
            if (this.option == "0"){
                this.total = this.amount * 0;
            } else if (this.option == "1") {
                this.total = this.amount * this.pPear;
            } else {
                this.total = this.amount * this.pPineapple;
            }
            this.tPay += this.total;
            this.cont += 1;
        },

        totalPay(){
            this.isPay = 1;
        },

        cash(){
            var cambio = 0;
            if (this.tCash < this.tPay){
                cambio = this.tPay - this.tCash;
                alert("Le falta plata... son: " + cambio + " pesos");
            } else {
                cambio = this.tCash - this.tPay;
                alert("Su cambio es de : " + cambio + " pesos");
                this.isPay = 0;
            }
        }
    }
});