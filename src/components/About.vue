<template>
    <section class="paddingblock" style="background-color: var(--clr-8);">
        <div class="container">
            <div class="even-columns | aboutme">
                <div class="abouttext">
                    <p class="about">About Me</p>
                    <hr class="line">
                </div>
                <div class="flow" style="--flow-spacer: 2em">
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.</p>
                    <div class="mybtns">
                        <button class="button | workbtn" type="btns">View Works</button>
                        <button class="button | btndiff" type="btns">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
.line{
    height: 0.3em;
    width: 12ch;
    background-color: var(--clr-4);
    border: none;
    
}
 .about{
    font-size: var(--fs-45px);
    font-family: var(--ff-primary);
    color: var(--clr-9);
    font-weight: var(--fw-bold);
 }
 .text{
    width: 60ch;
 }
 .btns{
    display: flex;
    gap: 2em;
 }
 button[type="btns"]{
    padding: 1em 2em 1em 2em;
    margin-right: 2em;
 }
 .aboutme{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10em;
 }
 .btndiff{
    background-color: var(--clr-1);
    color: var(--clr-4);
 }
 .btndiff:hover{
    background-color: var(--clr-4);
    color: var(--clr-3);
 }

 @media (max-width: 52.875em) {

.aboutme{
    flex-direction: column;
    gap: 2em;
    width: 100%;
 }
.abouttext{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.aboutme .text{
    text-align: center;
    width: 100%;
    margin-inline: auto;
}
.mybtns{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 0;
    margin-left: 1.9em;    
}


 }


</style>