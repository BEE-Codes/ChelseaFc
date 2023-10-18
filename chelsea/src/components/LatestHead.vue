<template>
<div id="list">
    <ul>
        <li v-for="item in Things" :key="item.id">
            <a href="">{{ item.list }}</a> 
            <div id="yellow"></div>
        </li>
    </ul>
</div>
    
</template>

<script>

    export default {
        name:'LatestHead',

        data() {
            return{
                Things:[
                    { id:1, list: 'News'},
                    { id:2, list: 'Interviews & Features'}
                ]
            }
        }
    }
</script>

<style scoped>
#list{
    width: 100%;
    background:#001489;
    padding: 5% 8%;
    box-sizing: border-box;
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

</style>