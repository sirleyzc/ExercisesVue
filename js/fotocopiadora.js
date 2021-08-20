var app = new Vue({
    el: "#app",
    data: {
        num: null,
        rta: null
    },

    methods: {
        dcto(){
            if (this.num >= 50){
                this.rta = this.num * 30;
            } else {
                this.rta = this.num * 50;
            }
        }

    },
})