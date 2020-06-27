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
          </ul>
         
          <div class="form-inline my-2 my-lg-0">
            <a v-if{{this.$store.state.user.fname}}  type="button" @click="ongoToRegister()" class="btn btn-warning">สมัครสมาชิก</a>
            <button   class="btn btn-outline-success my-2 my-sm-0" type="button"  data-toggle="modal" data-target="#exampleModal"><i class="fa fa-sign-in"></i> </button>
            <button @click="onLogout()" class="btn btn-outline-secondary my-2 my-sm-0" type="button" ><i class="fa fa-sign-out"></i> </button>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">เข้าสู่ระบบ</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <form  @submit="onSubmit()">
                  <div class="form-group">
                    <label for="exampleInputEmail1">ชื่อผู้ใช้งาน</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username"
                      v-validate="'required'"
                      name="loginusername"
                      v-model.trim="form.username"
                      :class="{'is-invalid':errors.has('loginusername')}"
                      aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">รหัสผ่าน</label>
                    <input type="password" class="form-control"  placeholder="loginpassword" 
                      name="loginpassword"
                      v-model.trim="form.password"
                      :class="{'is-invalid':errors.has('loginpassword')}" 
                      id="exampleInputPassword1">
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
            </div>
          </div>
        </div>
      </div>


    </nav>
</template>

<script>
import axios from 'axios';

export default {
  name:"navbar",
  data() {
    return {
      form: {
        loginusername: "",
        loginpassword: ""
      },
      errorMessage: ""
    };
  },
  methods:{
    onSubmit() {
      this.$validator.validateAll().then(valid => {
        if (!valid) return;
        axios
          .post("api/account/login", this.form)
          .then(response => {
             console.log(response.data); 
            // this.$router.push("/");
          }) 
          .catch(err => {
            this.errorMessage = err.response.data.message;
          });
      });
    },
    onLogout(){
      axios.post('api/account/logout')
      .then(response =>{ 
        console.log(response)
        })
        .catch(error => alert(error.response.data.message)
    )},
    ongoToRegister(){
       this.$router.push('/register')
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