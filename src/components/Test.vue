<template>
  <div class="mycontainer">

    <h1>Kent pogi</h1>


    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ad culpa eligendi sit consequatur saepe
      similique modi. <span>Tempora voluptatum esse ullam, velit fugit,</span> placeat veniam ducimus, odio repellat sed facilis.</p>
    <p>Lorem ipsum, dolor sit <span>amet consectetur adipisicing elit.</span> Error, ad culpa eligendi sit consequatur saepe
      similique modi. Tempora voluptatum esse ullam, velit fugit, placeat veniam ducimus, odio repellat sed facilis.</p>
    <p>Lorem ipsum, dolor sit amet <span>consectetur</span> adipisicing elit. Error, ad culpa eligendi sit consequatur saepe
      similique modi. Tempora voluptatum esse ullam, velit fugit, placeat veniam ducimus, odio repellat sed facilis.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ad culpa eligendi sit consequatur saepe
      similique modi. Tempora voluptatum  <span>esse ullam, velit fugit, placeat veniam ducimus,</span>odio repellat sed facilis.</p>

  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Test',
  setup() {
    onMounted(() => {
      
       gsap.utils.toArray('span').forEach((elements) =>{
         ScrollTrigger.create({
           trigger: elements,
           start:  'top center',
           markers: true,
           toggleClass: 'active',
           scrub: true
         })
       })

      // ScrollTrigger.create({
      //   trigger: 'h1',
      //   markers: true,
      //   start: 'top center',
      //   end: 'center 30%',
      //   toggleClass: 'myh1'
      // })



    });
  },
};
</script>

<style scoped>
.mycontainer p{
    width: 100%;
}

.myh1{
  background-color: aqua;
}

span{
  background-image: linear-gradient(yellow, yellow);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in;
}
.active { 
  /* replace span:hover */
  background-size: 100% 100%;
}
.mycontainer{
  background-color: white;
  color: black;
  height: 120vh;
  max-width: 500px;
  margin-inline: auto;
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
}

</style>