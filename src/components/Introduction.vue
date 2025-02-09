<template>
    <section class="paddingblock">
        <div class="container">
            <div class="even-columns | intro ">
                <transition-group class="text | flow" style="--flow-spacer: 1em;"  appear tag="div"
                @before-enter="beforeEnter"
                @enter="Enter">
                    <p class="kent" key="1">I'm Kent</p>
                    <p class="dev" key="2">A Website Developer</p>
                    <p class="dev" key="3">Freelance Web & Mobile UI/UX Designer</p>
                    <div class="mybtn" key="4">
                        <button class="button">Hire Me</button>
                    </div>
                </transition-group>
                <div>
                    <img src="../assets/dawg.png" alt="myphoto" class="mydawg">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'

export default {
// eslint-disable-next-line vue/multi-word-component-names
    name: 'Introduction',
    setup(){
        const beforeEnter = (element) => {
            element.style.opacity = 0
            element.style.transform = 'scale(0.6)'
        }
        const Enter = (element) => {
            gsap.to(element, {
                opacity: 1,
                scale: 1,
                ease: 'power1'
            })
        }   


        return{
            beforeEnter,
            Enter
        }
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