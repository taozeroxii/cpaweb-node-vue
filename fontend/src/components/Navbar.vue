<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" >CPA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="'/'" class="nav-link">หน้าแรก</router-link>
            </li>
            <li class="nav-item">
               <router-link :to="'about'" class="nav-link">เกี่ยวกับ</router-link>
            </li>
            <li class="nav-item">
               <router-link :to="'/news'" class="nav-link">ประชาสัมพันธ์</router-link>
            </li>
            <li class="nav-item">
               <router-link :to="'/complain'" class="nav-link">แนะนำร้องเรียนชม</router-link>
            </li>

          </ul>
         
          <div class="form-inline my-2 my-lg-0">

            <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="onClickLogin()"><i class="fa fa-sign-in"></i> </button>
            <button @click="onLogout()" class="btn btn-outline-secondary my-2 my-sm-0" type="button" ><i class="fa fa-sign-out"></i> </button>
          </div>
          
        </div>
      </div>

    <Loginform :login="this.clickLogin"  @onClose="clickLogin = null"/>

    </nav>
</template>

<script>
import axios from 'axios';
import Loginform from "../components/form/Loginform";

export default {
  name:"navbar",
  components:{
    Loginform
  },
  data(){
    return{
       clickLogin:null
    }
  },   

  
  methods:{
    onLogout(){
      axios.post('/api/account/logout')
      .then(response =>{ 
        //console.log(response)
        this.$store.commit('set_user',null);
        this.alertify.warning('ออกจากระบบเรียบร้อยแล้ว')
        })
        .catch(error => this.alertify.error(error.response.data.message)
    )},
    onClickLogin(){
      this.clickLogin ='click'
      //console.log( this.clickLogin)
    }
  }
}
</script>


<style  scoped>
  .navbar{
    border: 1px solid;
    padding: 10px;
    box-shadow: 0px 5px #888888;
  }
  .nav-link.router-link-exact-active.router-link-active{
    color: black;
    font-size: 16px;
    font:bold;
  }
</style>