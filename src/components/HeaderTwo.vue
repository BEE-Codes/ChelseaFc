<template>
    <div>
            <BlueCover v-if="showBlueCover" />
        <hr>
        <div id="cont">
            <div id="Chelog">
                <img src="../assets/images/Main_Website_Badge_-_Colour.webp" alt="" id="chelsea">
            </div>
            <div id="list">
                <ul>
                    <li v-for="item in listItems" :key="item.id">
                        <a href="">{{ item.list }}</a> 
                    </li>
                </ul>
            </div>
            <div id="searchI">
                <img src="../assets/images/search.png" alt="" class="icon">
            </div>

            <div id="blue">
                <img src="../assets/images/menu.png" alt="" class="icon" @click="toggleBlueCover">
            
                <p id="more">More</p>
            </div>

        
        </div>
    </div>
</template>

<script>
import BlueCover from './BlueCover.vue'
    export default {
        components:{
            BlueCover
        },
        name:'HeaderTwo',
    
        data () {
            return{
            listItems: [
            { id: 1, list: 'LATEST'},
            { id: 2, list: 'WATCH' },
            { id: 3, list: "MEN'S TEAM"},
            { id: 4, list: "WOMEN'S TEAM"},
            { id: 5, list: 'TICKET & HOSPITALITY'},
            { id: 6, list: 'SHOP'},
        ],
        showBlueCover:false
            }  
        },
        methods:{
            toggleBlueCover(){
                this.showBlueCover = !this.showBlueCover
            }
        }
    }
</script>

<style scoped>
hr{
    margin: 0px;
}
#cont{
    width: 100%;
    display:flex;
    justify-content: space-between;
}
#Chelog{
    width:9%;
    
}
#chelsea{
    width: 130px;
}
#list{
    width:70%;
    display:flex;
    align-items: center;  
}
ul {
    list-style: none;
    display: flex;
    gap:52px;
    font-weight:600;
}

a{
    text-decoration: none;
    color: #001489;
}
#searchI{
    width:2%;
    display:flex;
    display:flex;
    align-items: center;
}
#blue{
    width:10%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:3px;
    color: white;
    background-color: #001489;
}
#more{
    font-size:0.9rem;
}
.icon{
    width:25px;
    height:25px;
}

</style>