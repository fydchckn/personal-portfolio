<template>
  <section class="paddingblock">
    <div class="container">
        <div class="even-columns| services | flow">
        <div class="lineservice">
            <p class="service">Services</p>
            <hr class="line">
        </div>
        <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur</p>
        <div class="box-container">
            <div class="box | flow" style="--flow-spacer: 1em" id="box1">
            <img src="../assets/phone_icon-1.png" alt="phone">
            <p class="title">UX Research</p>
            <p class="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
        </div>
        <div class="box | flow" style="--flow-spacer: 1em" id="box2">
            <img src="../assets/phone_icon-1.png" alt="phone">
            <p class="title">Web Development</p>
            <p class="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
        </div>
        <div class="box | flow" style="--flow-spacer: 1em" id="box3">
            <img src="../assets/phone_icon-1.png" alt="phone">
            <p class="title">App Design</p>
            <p class="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
        </div>
        <div class="box | flow" style="--flow-spacer: 1em" id="box4">
            <img src="../assets/phone_icon-1.png" alt="phone">
            <p class="title">Web Design</p>
            <p class="text2">Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat</p>
        </div>
        </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Services'
}
</script>

<style scoped>

.text{
    width: 76ch;
    text-align: center;
}
.service{
    font-size: var(--fs-45px);
    font-weight: var(--fw-bold);
}
.line{
    height: 0.3em;
    width: 12ch;
    background-color: var(--clr-4);
    border: none;
    margin-top: 0.1em;
}
.lineservice{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.services{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.box-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
}
.title{
    font-size: var(--fs-32px);
    font-weight: var(--fw-semi-bold);
}
.box{
    width: 570px;
    height: 316.39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 3em;
    border-radius: 1em;
     
}
.box:hover{
    background-color: var(--clr-3);
}
img{
    max-width: 39px;
    max-height: 58px;
}
.box p{
    color: var(--clr-3);
    opacity: 1;
}
.text2{
    width: 40ch;
}
#box1{
    background-color: var(--clr-5);
    margin-top: 1em;
    transition: 0.4s;  
}
#box2{
    background-color: var(--clr-4);
    transition: 0.4s; 
}
#box3{
    background-color: var(--clr-6);
    transition: 0.4s; 
}
#box4{
    background-color: var(--clr-7);
    transition: 0.4s; 
}
#box1:hover{
    background-color: hsl(204, 80%, 68%);
}
#box2:hover{
    background-color: hsl(39, 95%, 70%);
}
#box3:hover{
    background-color: hsl(298, 60%, 58%);
}
#box4:hover{
    background-color: hsl(136, 63%, 55%);
}

@media(max-width:  52.875em){
.services{
    justify-content: center;
}
.services p {
    width: 100%;
}
.box-container{
    grid-template-columns: repeat(1, 1fr);
    gap: 2em;
    
}
.box{
    width: 100%;
    align-items: center;
    text-align: center;
}






}




</style>