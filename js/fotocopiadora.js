var app = new Vue({
    el: "#app",
    data: {
        price1: 50,
        price2: 30,
        total: 0,
        amount: 0
    },

    methods: {
        calculateTotal(){
            if (this.amount > 50) {
                this.total = this.price2 * this.amount;
            } else {
                this.total = this.price1 * this.amount;
            }
        }

    }
});