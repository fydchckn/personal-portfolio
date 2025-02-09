<template>
    <div class="container | navcon">
        <div class="mynav">
            <p class="kent"><svg class="icon">
                    <use xlink:href="../assets/all-icons.svg#mysite"></use>
                </svg></p>
            <nav class="my-nav">
                <ul class="nav-list">
                    <li>Home</li>
                    <li>About me</li>
                    <li>Services</li>
                    <li>Experiences</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>
            </nav>
            <div class="mybutton">
                <button class="btn" @click="btntoggle">
                    <span v-if="!togglemnav">
                        <svg class="icon_burger">
                            <use xlink:href="../assets/all-icons.svg#hamburger-svgrepo-com"></use>
                        </svg>
                    </span>
                    <span v-if="togglemnav">
                        <svg class="icon-close">
                            <use xlink:href="../assets/all-icons.svg#close-bold-svgrepo-com"></use>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navigation',
    props: ['togglemnav'],
    methods: {
        btntoggle(){
            this.$emit('toggle-mobile')
        },
    }
}

</script>

<style scoped>

@media(max-width: 52.875em){
    .mybutton{
        display: block;
        position: fixed;
        left: 80%;
        z-index: 99999;
    }
    .my-nav{
        display: none;
    }
}
@media(min-width: 52.875em){
    .mybutton{
        display: none;
    }
}
.btn{
    background-color: transparent;
    outline: none;
     border: none;  
    padding-block: 1em;
    
}
.icon_burger, .icon-close{
    width: 70px;
    height:30px;
}   
.navcon{
    padding-block: 1em;
}

.kent{
  font-family: var(--ff-primary);
  font-size: var(--fs-25px);
  color: var(--clr-2);
  font-weight: var(--fw-semi-bold);
}
.nav-list{
    display: flex;
    align-items: center;
    gap: 3em;
}
.nav-list li{
    list-style-type: none;
    font-size: var(--fs-14px);
    font-family: var(--ff-primary);
    font-weight: var(--fw-semi-bold);
    color: var(--clr-3);
}
.mynav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.icon {
    fill: var(--clr-4);
    width: 104px;
    height: 70px;
}

</style>