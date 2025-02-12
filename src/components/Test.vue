<template >
  <div  class="sd">
    
    <div class="box1"></div>

    <div class="box2">
        <div class="square"></div>
    </div>


  </div>
</template>


<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import { onMounted } from 'vue';


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test',
    setup() {

        onMounted(() =>{
            gsap.to('.square', {
                x: 700,
                duration: 2,
                scrollTrigger: {
                    trigger: '.square',
                    start: 'top 60%',
                    end: 'top 30%',
                    // markers: true,
                    toggleClass: 'red',
                    toggleActions: 'restart none none none',
                    scrub: 4
                    
                }
            })
        })
     
    }
}
</script>

<style scoped>
.sd{
    background-color: white;
    color: black;   
}
.box1, .box2{
    height: 100vh;
}
.box1{
    background-color: black;
}
.box2{
    background-color: rgb(126, 207, 240);
}
.square{
    height: 150px;  
    width: 150px;
    background-color: tomato;
}
.red{
    background-color: red;
}

</style>