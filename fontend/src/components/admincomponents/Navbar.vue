<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" >Admin/cpa</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="'/admin/'" class="nav-link">หน้าแรก</router-link>
            </li>
            <li class="nav-item">
               <router-link :to="'/admin/editpage'" class="nav-link">แก้ไขหน้าเพจ</router-link>
            </li>
            <li class="nav-item">
               <router-link :to="'/admin/editnews'" class="nav-link">เพิ่ม/แก้ไขประกาศ</router-link>
            </li>
             <li class="nav-item">
               <router-link :to="'/admin/register'" class="nav-link">เพิ่มผู้ใช้งาน</router-link>
            </li>
          </ul>
         
          <div class="form-inline my-2 my-lg-0">
            <button @click="onLogout()" class="btn btn-outline-secondary my-2 my-sm-0" type="button" ><i class="fa fa-sign-out"></i> </button>
          </div>
        </div>
      </div>



    </nav>
</template>

<script>
import axios from 'axios';


export default {
  name:"navbar",
  data(){
    return{
       clickLogin:null
    }
  },   

  
  methods:{
    onLogout(){
      axios.post('api/account/logout')
      .then(response =>{ 
        //console.log(response)
        this.$store.commit('set_user',null);
        this.$router.push('/')
        })
        .catch(error => this.alertify.error(error.response.data.message)
    )}
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