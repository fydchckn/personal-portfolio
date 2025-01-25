<template>
    <section class="paddingblock">
        <div class="container">
            <div class="even-columns | workcolumn | flow">
                <div class="linework">
                    <p class="work">Work Experiences</p>
                    <hr class="line">
                </div>
                <p class="text2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus</p>
                <ul class="slider | box-container">
                    <li class="box | flow" style="--flow-spacer: 1em" id="box1">

                        <p>June 2012 - 2016</p>
                        <p class="skills">UI/UX Designer</p>
                        <p>Adobe Inc.</p>
                        <p class="text">Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do eiusmod
                            temp
                            incididunt ut labore.</p>
                    </li>
                    <li class="box | flow" style="--flow-spacer: 1em">

                        <p>June 2012 - 2016</p>
                        <p class="skills">Product Designer</p>
                        <p>Adobe Inc.</p>
                        <p class="text">Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do eiusmod
                            temp
                            incididunt ut labore.</p>
                    </li>
                    <li class="box | flow" style="--flow-spacer: 1em">
                        <p>June 2012 - 2016</p>
                        <p class="skills">Graphic Designer</p>
                        <p>Adobe Inc.</p>
                        <p class="text">Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do eiusmod
                            temp
                            incididunt ut labore.</p>
                    </li>
                </ul>

            </div>
        </div>
    </section>
</template>

<script>
import A11YSlider from 'a11y-slider';

export default {
  name: 'Work',
  mounted() {
     new A11YSlider(document.querySelector('.slider'), {
       adaptiveHeight: true,
       dots: true,
     });
  },
};
</script>

<style scoped>
.workcolumn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.work{
    font-size: var(--fs-45px);
    font-weight: var(--fw-bold);
}
.skills{
    font-size: var(--fs-22px);
    color: var(--clr-3);
    font-weight: var(--fw-semi-bold);
}
p{
    font-size: var(--fs-15px);
}
.text{
    font-size: var(--fs-16px);
    opacity: 0.5;
}
.box-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.box{
    outline: 1px solid var(--clr-10);
    width: 389px;
    height: 346.39px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2em;
    background-color: var(--clr-8);
    transition: 0.3s;
}
.box:hover{
    background-color: var(--clr-4);
    color: var(--clr-2);
}
.box:hover p{
    color: var(--clr-2);
}

.work{
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
.linework{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.text2{
    text-align: center;
    width: 76ch;
    opacity: 0.5;
    font-size: var(--fs-16px);
}
#box1{
    margin-top: 1em;
}



@media(max-width: 57.688em){
    .workcolumn p{
        width: 100%;
        text-align: center;
    }
    .work{
        text-align: center;
    }

    .slider {
    display: flex;
    
  }

  .slider > * {
    width: 100%;
    flex: 0 0 auto;
    text-align: center;
  }

   .box{
    align-items: center;
    padding-inline: 1em;
    }
    .box p{
    width: 100%;
    }
.box-container{
    width: 100%;
    }
   
    
    
}





</style>