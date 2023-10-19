<template>
<div id="main"> 
    <div id="list">
        <ul>
            <li v-for="item in Things" :key="item.id">
                <a href="">{{ item.list }}</a> 
                <div id="yellow"></div>
            </li>
        </ul>
    </div>

    <div id="fulham">
        <h4 id="next">NEXT MATCH</h4>
        <img src="../assets/images/fulham.webp" alt="" id="fulhamLogo">
        <div id="texts">

            <h5 id="ful">Fulham</h5>
            <p id="cottage"> at <span>Carven Cottage</span></p>
            <p id="date">Mon 02 Oct 2023. KO - 20:00  </p>
            <!-- <p>Mon 02 Oct 2023. KO - 20:00 {{   getLocalDateTime() }} </p> -->
            <p id="league">PREMIER LEAGUE</p>

            <div id="match">
                <a href="#">MATCH CENTER </a>
            <img src="../assets/arrow-right.svg" alt="" id="arrow">

            </div>
        </div>
    </div>
</div>
    
</template>

<script>

    export default {

        data() {
            return{
                Things:[
                    { id:1, list: 'Fixtures & Results'},
                    { id:2, list: 'Players & Staff'},
                    { id:3, list: 'League Tables'},
                    { id:4, list: 'News'},
                    { id:5, list: 'Academy'}
                ],
            }
        },
        // methods: {
        //     getLocalDateTime() {
        //     const currentDate = new Date();
        //     return currentDate.toLocaleString();
        //     },
        // },
    }
</script>

<style scoped>
#main{
    width: 100%;
    background:#001489;
    display: flex;
    justify-content: space-between;
    /*padding-left:5%;
    padding-top: 2%;
    padding-bottom: 2%;*/
    box-sizing: border-box;
}
#list{
    width: 40%;
    line-height: 40px;
    background:#001489;
    margin-left:8% ;
    padding-top: 4%;
}
ul{
    list-style: none;
    font-weight:600;
    
}
li{
    margin-top: 2%;
    font-size: 1.5rem;
}
a{
    text-decoration:none;
    color:white;
}
@keyframes line{
    0%{
        right: 20px;
    }
    100%{
        right: 0px;
    }
}

#yellow{
    width: 1.7%;
    background: yellow;
    padding:.1%;
    animation-name: line;
    animation-duration: 0.2s;
    position: relative;
    right: 0px;
    display: none;
    animation-timing-function: ease-in-out;
}
li:hover #yellow{
    display: block;
}
#next{
    margin-left:10%;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 2px;
    color: white;
    padding-top: 10%;
}
#fulham{
    width: 35%;
    margin-left:4%;
    background: #000a69;
}
#fulhamLogo{
    width: 60px;
    height: 60px;
    margin-left:10%;
}
#texts{
    width: 55%;
    margin-left:28%;
    margin-top:-20%;
    color: white;
}
#ful{
    font-size:1.3rem;
}
#cottage{
    font-size: 0.9rem;
    margin-top:-10%;
}
span{
    font-weight: 700;

}
#date{
    margin-top:20%;
    font-size: 0.8rem;
    font-weight: 100;
}
#league{
    font-size: 0.7rem;
    font-weight: 600;
}
#arrow{
    width: 20px;
    height: 20px;
}
#match{
    margin-top:30%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom:30%;
    font-size: 0.9rem;
    font-weight: 700;
}

</style>