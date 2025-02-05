  <template>

  <Navigation :togglemnav="togglemnav"  @toggle-mobile="mobilenav"/>
  <transition name="mymobilenav">
    <Mobilenav  :togglemnav="togglemnav"  v-if="togglemnav"/>
  </transition>
  <Introduction/>
  <About/>
  <Services/>
  <Work/>
  <Contact/>
  <theFooter/>
  
</template>

<script>
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import theFooter from './components/Footer.vue';
import Mobilenav from './components/Mobilenav.vue';



export default {
  name: 'App',
  components:{
    Navigation,
    Introduction,
    About,
    Services,
    Work,
    Contact,
    theFooter,
    Mobilenav
  },
  data(){
    return{
      togglemnav: false,
    }
  },
  methods: {
    mobilenav(){
      this.togglemnav = !this.togglemnav
    },
  }
}
</script>


<style>
:root {

  /* colors */

  --clr-1: hsl(180, 1%, 17%);
  --clr-2: hsl(0, 0%, 0%);
  --clr-3: hsl(0, 0%, 100%);
  --clr-4: hsl(39, 95%, 60%);
  --clr-5: hsl(204, 80%, 58%);
  --clr-6: hsl(298, 60%, 48%);
  --clr-7: hsl(136, 63%, 45%);
  --clr-8: hsl(0, 1%, 21%);
  --clr-9: hsl(0, 0%, 80%);
  --clr-10: hsl(0, 0%, 40%);  
  --clr-11: hsl(0, 4%, 21%);

  /* font style */

  --ff-primary:  'Poppins', sans-serif;

  /* font weight */
  
  --fw-regular: 300;
  --fw-semi-bold: 700;
  --fw-bold: 900;

  /* font size */

  --fs-32px: 2em;
  --fs-45px: 2.813em;
  --fs-16px: 1em;
  --fs-23px: 1.438em;
  --fs-70px: 4.375em;
  --fs-25px: 1.563em;
  --fs-14px: 0.875em;
  --fs-22px: 1.375em;
  --fs-15px: 0.938em;
  --fs-20px: 1.25em;
  --fs-18px: 1.125em;



  --size-100: 0.25rem;
  --size-200: 0.5rem;
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.5rem;
  --size-600: 2rem;
  --size-700: 3rem;
  --size-800: 4rem;
  --size-900: 5rem;

}

body, #app {
  
  font-family: var(--ff-primary);
  font-size: var(--fs-16px);
  background-color: var(--clr-1);
  color: var(--clr-9);
  
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
*{
  margin: 0;
  padding: 0;
  font: inherit;  
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
html, body, #app{
  min-height: 100%;
  overflow-x: hidden;
}
/* Set core body defaults */
body, #app {
  
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
p:not([class]){
  opacity: 0.5;
  max-width: 32ch;
}
p[width="wide"]{
  max-width: 42ch;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}



/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


.container{
  --max-width: 1180px;
  --container-padding: 1rem;

  width: min(var(--max-width), 100% - (var(--container-padding) * 2));
  margin-inline: auto;
}

.even-columns{
  display: grid;
  gap: 1rem;
}
@media (min-width: 50em){
  .even-columns{
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}
}

.button{
    padding: 1em 5em 1em 5em;
    color: var(--clr-3);
    background-color: var(--clr-4);
    border-radius: 0.5em;
    cursor: pointer;
    font-family: var(--ff-primary);
    font-weight: var( --fw-semi-bold);
    transition: 0.5s;
    border-color: var(--clr-4);
}
.button:hover{
    background-color: var(--clr-1);
    border-color: var(--clr-4);
    color: var(--clr-4);
}

.paddingblock{
  padding-block: 5em;
}

:where(.flow :not(:first-child)){     /*   alternative: flow *+*   */
  margin-top: var(--flow-spacer, 3em);
}

/* slider */

.a11y-slider-container > *{
  z-index: 1;
}


.a11y-slider-prev, .a11y-slider-next{
  display: none;
}

.a11y-slider-dots{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto ;
  max-width: 100%;
}
.a11y-slider-dots li{
  list-style: none;
  margin: 0;
}
.a11y-slider-dots li button{
  width: 15px; 
  height: 15px; 
  border-radius: 50%; 
  display: inline-block;
  margin: 0 5px; 
  text-indent: -9999px;
  transition: background-color 0.3s ease; 
}
.a11y-slider-dots li button.active{
  background-color: var(--clr-4) !important;
}

/* transitions mobile navigation */

    .mymobilenav-enter-from{
      opacity: 0;
      transform: translateY(-60px);
    }
    .mymobilenav-enter-to{
      opacity: 1;
      transform: translateY(0);
    }

    .mymobilenav-leave-from{
      opacity: 1;
      transform: translateY(0);
    }
    .mymobilenav-leave-to{
      opacity: 0;
      transform: translateY(-60px);
    }

    .mymobilenav-enter-active, .mymobilenav-leave-active{
      transition: all 0.1s ease;
    }


</style>
