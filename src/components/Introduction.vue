<template>
    <section class="paddingblock">
        <div class="container">
            <div class="even-columns | intro ">
                <div class="text | flow | introtext" style="--flow-spacer: 1em;" tag="div">
                    <p class="kent" key="1">I'm Kent</p>
                    <p class="dev" key="2">A Website Developer</p>
                    <p class="dev" key="3">Freelance Web & Mobile UI/UX Designer</p>
                    <div class="mybtn" key="4">
                        <button class="button">Hire Me</button>
                    </div>
                </div>
                    <div class="dawgs">
                        <img src="../assets/dawg.png" alt="myphoto" class="mydawg">
                    </div>
            </div>
        </div>
    </section>
</template>
<script>
import gsap from 'gsap'
import { onMounted } from 'vue';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default {
// eslint-disable-next-line vue/multi-word-component-names
    name: 'Introduction',
    setup(){
        onMounted(() => {
            gsap.set('.introtext', { x: -700, });
            gsap.set('.dawgs', { x: 800, });

            gsap.to('.introtext', {
                x: 0,
                scrollTrigger: '.introtext',
                duration: 1,
            });
            gsap.to('.dawgs', {
                x: 0,
                scrollTrigger: '.dawgs',
                duration: 1,
            });
                 
        })
    }
}
</script>

<style scoped>
@media(max-width:  52.875em){
    .intro{
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
        .text {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }
    .mybtn{
        
        justify-self: center;
    }
}

.intro{
    display: flex;
    justify-content: space-between;
}
.mydawg{
    width: 600px;
    height: 500px;
    border-radius: 20%;
}
.kent{
    font-style: var(--ff-primary);
    font-size: var(--fs-70px);
    color: var(--color-9);
    font-weight: var(--fw-bold);
}
.dev{
    font-style: var(--ff-primary);
    font-size: var(--fs-23px);
    font-weight: var(--fw-regular);
    width: 30ch;

}

.text{
    margin-top: 3em;
}

.box{
    height: 200px;
    width: 200px;
    background-color: blue;
}

/* transition */

/* .scale-enter-from{
    transform: scale(0.6);
}
.scale-leave-to{
    transform: scale(0);
}

.scale-enter-active, .scale-leave-active{
    transition: all 0.5s ease;
} */






</style>