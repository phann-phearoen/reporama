export default{
data() {
    return {
        screenWidth: 0, 
    }
},
methods: {
    handleResize() {
    this.screenWidth = window.innerWidth;
    },
},
watch: {
    screenWidth(val) {
        if (val > 1600) {

        } else if (val > 1400) {
        
        } else if(val > 1200){ 

        } else if(val > 1000) {

        } else if(val > 500){

        } else {

        }
    },
},

created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
},
unmounted() {
    window.removeEventListener("resize", this.handleResize);
},
}