<template>
    <hr class="line">
    <footer class="paddingblock">
        <div class="container">
            <div class="even-columns | footer | flow " style="--flow-spacer: 2em">
                <div>
                    <svg class="icon">
                        <use xlink:href="../assets/all-icons.svg#mysite"></use>
                    </svg>
                    <p class="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                    <ul class="myicons">
                        <li class="insta">
                            <svg class="icons">
                                <use xlink:href="../assets/all-icons.svg#instagram2"></use>
                            </svg>
                        </li>
                        <li>
                            <svg class="icons">
                                <use xlink:href="../assets/all-icons.svg#github"></use>
                            </svg>
                        </li>
                        <li>
                            <svg class="icons">
                                <use xlink:href="../assets/all-icons.svg#facebook2"></use>
                            </svg>
                        </li>
                        <li>
                            <svg class="icons">
                                <use xlink:href="../assets/all-icons.svg#email"></use>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.line{
    opacity: 0.5;
}
.text{
   color: var(--clr-10);
}
.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}
.icon {
    fill: var(--clr-4);
    width: 104px;
    height: 70px;
}

.icons {
    fill: var(--clr-3);
    width: 16.72px;
    height: 18px;
}
.myicons li{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--clr-8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
}
.myicons li:hover{
    background-color: var(--clr-4);
}
.myicons{
    display: flex;
    gap: 1em;
}

ul {
    list-style: none;
}
.text{
    width: 60ch;
}
.insta{
    margin-top: 2em;
}
.myicons{
    display: flex;
    justify-content: center;
    align-items: center;
}


@media(max-width: 57.688em){

    .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-inline: auto;
    
}
.footer > *{
    max-width: 100%;
}
.myicons{
    display: flex;
    justify-content: center;
    align-items: center;
}
.text{
    max-width: 100%;
}
}


</style>