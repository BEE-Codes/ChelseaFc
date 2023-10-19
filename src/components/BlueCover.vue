<template>
    <div id="mrImg">
        <div id="bluebox">
            <p id="close">x</p>
        </div>

        <!-- This section contains a list that pops anothet list on hover -->
        <div id="parent">
            <div class="twoElements">
                <div class="yellow"></div>
                <div class="head1">
                    <a href="#" target="blank" class="head"> About the club </a>
                </div>
                <div class="list">
                    <ul>
                        <li><a href="#" target="blank">About Chelsea</a></li>
                        <li><a href="#" target="blank">General Information</a></li>
                        <li><a href="#" target="blank">Club Partners</a></li>
                        <li><a href="#" target="blank">Safeguarding</a></li>
                        <li><a href="#" target="blank">Careers</a></li>
                        <li><a href="#" target="blank">Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div class="twoElements">
                <div class="yellow"></div>
                <div class="head1">
                    <a href="#" target="blank" class="head"> Our History</a>
                </div>
                <div class="list">
                    <ul>
                        <li><a href="#" target="blank">About Chelsea</a></li>
                        <li><a href="#" target="blank">General Information</a></li>
                        <li><a href="#" target="blank">Club Partners</a></li>
                        <li><a href="#" target="blank">Safeguarding</a></li>
                        <li><a href="#" target="blank">Careers</a></li>
                        <li><a href="#" target="blank">Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div class="twoElements">
                <div class="yellow"></div>
                <div class="head1">
                    <a href="#" target="blank" class="head"> Stamford Bridge </a>
                </div>
                <div class="list">
                    <ul>
                        <li><a href="#" target="blank">About Chelsea</a></li>
                        <li><a href="#" target="blank">General Information</a></li>
                        <li><a href="#" target="blank">Club Partners</a></li>
                        <li><a href="#" target="blank">Safeguarding</a></li>
                        <li><a href="#" target="blank">Careers</a></li>
                        <li><a href="#" target="blank">Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div class="twoElements">
                <div class="yellow"></div>
                <div class="head1">
                    <a href="#" target="blank" class="head"> Community </a>
                </div>
                <div class="list">
                    <ul>
                        <li><a href="#" target="blank">About Chelsea</a></li>
                        <li><a href="#" target="blank">General Information</a></li>
                        <li><a href="#" target="blank">Club Partners</a></li>
                        <li><a href="#" target="blank">Safeguarding</a></li>
                        <li><a href="#" target="blank">Careers</a></li>
                        <li><a href="#" target="blank">Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div class="twoElements">
                <div class="yellow"></div>
                <div class="head1">
                    <a href="#" target="blank" class="head"> Fans </a>
                </div>
                <div class="list">
                    <ul>
                        <li><a href="#" target="blank">About Chelsea</a></li>
                        <li><a href="#" target="blank">General Information</a></li>
                        <li><a href="#" target="blank">Club Partners</a></li>
                        <li><a href="#" target="blank">Safeguarding</a></li>
                        <li><a href="#" target="blank">Careers</a></li>
                        <li><a href="#" target="blank">Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div class="twoElements">
                <div class="yellow"></div>
                <div class="head1">
                    <a href="#" target="blank" class="head">Our Venues </a>
                </div>
                <div class="list">
                    <ul>
                        <li><a href="#" target="blank">About Chelsea</a></li>
                        <li><a href="#" target="blank">General Information</a></li>
                        <li><a href="#" target="blank">Club Partners</a></li>
                        <li><a href="#" target="blank">Safeguarding</a></li>
                        <li><a href="#" target="blank">Careers</a></li>
                        <li><a href="#" target="blank">Contact Us </a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="link"> 
            <h5 id="use">Useful Links</h5>
            <ul>
                <li v-for="item in Links" :key="item.id">
                    <a href="">{{ item.link }}</a> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
        name:'LatestHead',

        data() {
            return{
                Links:[
                    { id:1, link: 'FAQs'},
                    { id:2, link: 'Contact Us'},
                    { id:3, link: 'Official Chelsea App'}
                ]
            }
        }
    }
</script>

<style scoped>
#mrImg {
    width: 100%;
    height: 800px;
    padding-bottom: 20px;
    box-sizing: border-box;
    background-image: url(../assets/images/bluebg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

#bluebox {
    width: 6%;
    position: relative;
    left: 94%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2560f8;
}

#close {
    font-size: 3rem;
    color: #ffff;
    font-weight: 100;
}

#parent {
    width: 50%;
    margin-top: 50px;
}

.twoElements {
    width:100%;
    padding-left: 90px;
    display: flex;
    gap:15px;
    box-sizing: border-box;
    
}

a {
    text-decoration: none;
    color: #ffff;
}

li {
    font-size: 1rem;
    line-height: 50px;
    list-style-type: none;
    
}

.list {
    width: 50%; 
    border-left: 1px solid grey;
    display: none ;
    
}

.head1 {
    width:40%;
    padding-top: 20px;
}

.head{
    font-size: 1.2rem;
    font-weight: 800;
}

.yellow {
    width: 20px;
    height:2px;
    margin-top:35px;
    background: yellow;
    animation-name: line;
    animation-duration: 0.2s;
    position: absolute;
    left: 50px;
    display: none;
    animation-timing-function: ease-in-out;
}

@keyframes line {
    0% {
        right: 20px;
    }

    100% {
        right: 0px;
    }
}
.twoElements:hover > .yellow {
    display: block;   
}
.twoElements:hover > .list{
    display: block;    
}

#link{
    width:fit-content;
    margin-top:220px;
    padding-left: 50px;
}
#use{
    color: #ffff;
    font-size: 0.8rem;
    margin-left:16%;
}
#link,li{
    font-size: 1rem;
    line-height: 40px;
}
</style>