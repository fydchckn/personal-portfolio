<template>
    <section class="paddingblock">
        <div class="container" >
            <div class="even-columns | intro ">
                <div class="text | flow" style="--flow-spacer: 1em">
                    <p class="kent">I'm Kent</p>
                    <p class="dev">A Website Developer</p>
                    <p class="dev">Freelance Web & Mobile UI/UX Designer</p>
                    <div class="mybtn">
                        <button class="button">Hire Me</button>
                    </div>
                </div>
                <div>
                    <img src="../assets/dawg.png" alt="myphoto" class="mydawg">
                </div>     
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Introduction',
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


</style>