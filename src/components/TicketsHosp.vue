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
        <div id="list2">
        <ul>
            <li v-for="item in items" :key="item.id">
                <a href="">{{ item.list }}</a> 
                <div id="gold"></div>
            </li>
        </ul>
    </div>
        
    </div>
</div>
    
</template>

<script>

    export default {


        data() {
            return{
                Things:[
                    { id:1, list: 'Buy Tickets'},
                    { id:2, list: 'Stadium Tours & Museum'},
                    { id:3, list: 'Memberships'},
                    { id:4, list: 'Season Tickets'},
                    { id:5, list: 'Ticket Information'},
                    { id:5, list: 'My Tickets Account'}
                ],
                items :[
                    { id:1, list: 'Buy Hospitality Tickets'},
                    { id:2, list: 'Matchday VIP Packages'},
                    { id:3, list: 'Annual VIP Packages'},
                    { id:4, list: 'Westview'},
                    { id:5, list: 'Members Area'},
                    { id:5, list: 'Contact Hospitality'}
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
    width: 50%;
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
    width:50%;
    margin-left:4%;
    background: #000a69;
}
#list2{
    width:80%;
    line-height: 40px;
    margin-left:8% ;
    padding-top: 8%;
    padding-bottom:20%;
}

#gold{
    width: 4%;
    background: goldenrod;
    padding:.1%;
    animation-name: line;
    animation-duration: 0.2s;
    position: relative;
    right: 0px;
    display: none;
    animation-timing-function: ease-in-out;
}
li:hover #gold{
    display: block;
}






</style>