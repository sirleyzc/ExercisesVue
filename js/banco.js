var app = new Vue({

    el: "#app",
    data: {
        value: 0,
        num: 0,
        freeInvest: 0.025,
        order: 0.029,
        dcto: 0,
        opt: 0,
        interest: 0,
        valueInterest: 0,
        fee: 0,
        credit: 0,
        totalCredit: 0

    },

    methods: {
        creditLine(){
            if (this.opt == "0") {
                this.interest = this.value * 0;
            } else if (this.opt == "1") {
                this.interest = this.value * this.freeInvest;
            } else {
                this.interest = this.value * this.order;
            }
            this.valueInterest = this.interest * this.num;
            this.credit = this.value + this.valueInterest;
        },

        calculateFee(){
            if (this.num > 6 && this.num < 12) {
                this.dcto = this.interest * 0.2;
            } else if (this.num >12 && this.num < 24) {
                this.dcto = this.interest * 0.4;
            } else if (this.num > 24) {
                this.dcto = this.interest * 0.7;
            } else {
                this.dcto = this.interest * 0;
            }
            this.valueDto = this.interest - this.dcto;
            this.totalCredit = (this.valueDto * this.num) + this.value;
            this.fee = this.totalCredit / this.num;

        }       
    }
});