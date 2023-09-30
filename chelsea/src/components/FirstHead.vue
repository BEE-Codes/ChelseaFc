<template>
    <div id="droot">
      <div class="text">
        <a href="">CHELSEA FOUNDATION </a>
        <a href="">NO TO HATE </a>
      </div>

        
      <div id="imt">
            <!-- <font-awesome-icon icon="user-secret" />
            <font-awesome-icon icon="magnifying-glass" /> -->

            <div class="text2">
                <a href="">LOGIN</a>
                <a href="">REGISTER </a>

            </div>

            <div id="images">
                <img src="../assets/images/Nike_Swoosh_Black.webp" width="100px" alt="">
                <img src="../assets/images/Trivago_Coloured.webp"  width="100px" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    export default {
        name: 'FirtstHead',
        // components:{
        //     FontAwesomeIcon
        // }
    }
</script>

<style scoped>
#droot{
    font-size:14px;
    width: 100%;
    padding:5px 0px;
    display:flex;
    align-items:center;
    justify-content: space-between;
}
#imt{
    width:30%;
    display:flex;
    align-items:center;
    justify-content: space-between;
}
.text{
    width:20%;
    margin-left:13px;
    display:flex;
    justify-content: space-between;
}
.text2{
    width:36%;
    margin-left:13px;
    display:flex;
    justify-content: space-between;
    border-right:1px solid grey;
    padding-inline-end:20px;
}

a{
    text-decoration: none;
}
</style>