<template>
    <section class="paddingblock">
        <div class="container">
            <div class="linecontact">
                <p class="contact">Contact Me</p>
                <hr class="line">
            </div>

            <div class="even-columns | contactcolumn ">
                <div class="contactinfo ">
                    <p class="infocon">Contact info</p>
                    <div class="iconstext">
                        <svg class="icon">
                            <use xlink:href="../assets/all-icons.svg#location"></use>
                        </svg>
                        <p>DroitThemes, Mirpur DOHS, Dhaka</p>
                    </div>
                    <div class="iconstext">
                        <svg class="icon">
                            <use xlink:href="../assets/all-icons.svg#email"></use>
                        </svg>
                        <p>inova.theme@gmail.com</p>
                    </div>
                    <div class="iconstext">
                        <svg class="icon">
                            <use xlink:href="../assets/all-icons.svg#phone"></use>
                        </svg>
                        <div class="numbers">
                            <p>+92548616475</p>
                            <p>+92548616475</p>
                        </div>

                    </div>

                    <div class="iconstext">
                        <svg class="icon">
                            <use xlink:href="../assets/all-icons.svg#globe"></use>
                        </svg>
                        <p>www.droitthemes.com</p>
                    </div>

                    <p class="follow">Follow Me</p>
                    <div class="social-media-icons">
                        <ul>
                            <li>
                                <svg class="icon">
                                    <use xlink:href="../assets/all-icons.svg#mysite"></use>
                                </svg>
                            </li>
                            <li>
                                <svg class="icon">
                                    <use xlink:href="../assets/all-icons.svg#instagram2"></use>
                                </svg>
                            </li>
                            <li>
                                <svg class="icon">
                                    <use xlink:href="../assets/all-icons.svg#github"></use>
                                </svg>
                            </li>
                            <li>
                                <svg class="icon">
                                    <use xlink:href="../assets/all-icons.svg#facebook2"></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="forms">
                    <form @submit.prevent="handleData()">
                        <div class="myforms | flow" style="--flow-spacer: 0.5em ">   
                            <label for="Name">Name</label>
                            <input type="text" class="name" required placeholder="Type your name" v-model="name">
                            <transition name="fade">
                                <div class="error" v-if="nameerror">{{ nameerror }}</div>
                            </transition>
                            <div class="numberandemail">
                                <div class="pnumber">
                                    <label for="" class="Number2">Phone Number</label>
                                    <input type="text" required placeholder="Type your phone number" v-model="number">
                                    <transition name="fade">
                                        <div class="error" v-if="numbererror" >{{ numbererror }}</div>
                                    </transition>
                                </div>
                                <div>
                                    <label for="">Email</label>
                                    <input type="text" required placeholder="Type your email" v-model="email">
                                </div>
                            </div>
                            <div class="textarea">
                                <label for="">Your Message</label>
                                <textarea class="msg" placeholder="Type your message" v-model="message"></textarea>
                            </div>
                        </div>
                        <div class="btn">
                            <button class="button">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            number: '',
            email: '',
            message: '',
            nameerror: null,
            numbererror: null,
        }
    },
    methods: {
        handleData() {
            this.nameerror = /^[a-zA-Z\s]+$/.test(this.name)  ? "" : "invalid name"
            this.numbererror =  !isNaN(this.number) && String(this.number).length === 11  ? "" : "invalid number"
        }
    }
}
</script>

<style scoped>
.error{
    color: hsl(0, 75%, 34%);
    margin-top: -1em;
}
.numbers{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 3px;
}
.iconstext{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
    gap: 10px;
    
}
.social-media-icons ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1.3em;
    margin-top: 1em;
}
.social-media-icons li{
    list-style: none; 
}
.icon{
    width: 20px;
    height: 20px;
    transition: 0.2s;
    fill: var(--clr-9);
}
.icon:hover{
    fill: var(--clr-4);
}
.icons:hover{
    background-color: var(--clr-4);
}
.contactcolumn{
    display: flex;
    align-items: flex-start;
    flex-direction: row;
}
.contactinfo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 370px;
    height: 414px;
}
.contactinfo p{
    font-size: var(--fs-16px);
}
.contactinfo .infocon{
    font-size: var(--fs-20px);
    opacity: 1;
}
.contactinfo .follow{
    font-size: var(--fs-18px);
    opacity: 1;
}
.follow{
    margin-top: 1em;
}

.linecontact{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4em;
}
.line{
    height: 0.3em;
    width: 12ch;
    background-color: var(--clr-4);
    border: none;
    margin-top: 0.1em;
}
.contact{
    font-size: var(--fs-45px);
    font-weight: var(--fw-bold);
}

/* forms */
.forms {
    width: 770px;
    height: 620px; 
    display: flex;
    flex-direction: column;
    padding: 1em; 
    box-sizing: border-box;
    margin-top: -17px;
    }

.forms label {
    font-size: var(--fs-15px);
    color: var(--clr-10);
}

.forms input {
    width: 100%; 
    box-sizing: border-box; 
    margin-bottom: 1em; 
}

.numberandemail {
    display: flex;
    gap: 1em; 
}

.numberandemail > div {
    flex: 1; 
}

.numberandemail input {
    width: 100%; 
    box-sizing: border-box;
    padding-block: 1em;
    border-radius: 4px; 
}

.btn {
    margin-top: auto;
    width: 100%; 
    text-align: center;
}

.button {
    display: flex;
    justify-content: start;
}
.btn button{
    padding: 1em 2em 1em 2em;
    border-radius: 3px;
    margin-top: 1em;
    
}
.btn button:hover{
    color: var(--clr-2);
    background-color: var(--clr-3);
}
.myforms input, .myforms .numberandemail input{
    background-color: var(--clr-8);
    outline: none;
    border: none;
    color: var(--clr-10);
    padding-left: 1.5em;
}
.name{
    padding-block: 1em;
    border-radius: 4px; 
}
.pnumber{
    margin-top: 0.5em;
}
.textarea{
    display: flex;
    flex-direction: column;
}
.textarea textarea{
    background-color: var(--clr-8);
    border-radius: 5px;
    outline: none;
    border: none;
    padding-bottom: 11.5em;
    padding-inline: 1em;
    padding-top: 1em;
    color: var(--clr-10);
}







@media(max-width: 57.688em) {
    .contactcolumn {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5em;
    }

    .contactinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 100%;
    }

    .forms {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn button {
        padding: 1em 1em 1em 1em;
        border-radius: 3px;
        margin-top: 1em;

    }
    .numberandemail {
    display: flex;
    flex-direction: column;
    gap: 1em; 
}

}

/* transition */

.fade-enter-active{
   animation: wobble 0.5s ease;
}

@keyframes wobble{
    0% {transform: translateX(-2px);}
    10% {transform: translateX(2px);}
    20% {transform: translateX(-2px);}
    30% {transform: translateX(2px);}
    40% {transform: translateX(-2px);}
    50% {transform: translateX(2px);}
    60% {transform: translateX(-2px);}
    70% {transform: translateX(2px);}
    80% {transform: translateX(-2px);}
    90% {transform: translateX(2px);}
    100% {transform: translateX(-2px);}
}

</style>