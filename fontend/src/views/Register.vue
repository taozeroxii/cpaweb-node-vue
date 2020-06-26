<template>
  <div class="register">
    <Navbar/>
    <div class="card mt-5">
      <div class="card-header bg-primary text-light text-center"
      >สมัครใช้งาน Admin status : default user</div>
      <div class="card-body">
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <input
                  type="text"
                  name="fname"
                  v-validate="'required'"
                  v-model.trim="form.fname"
                  :class="{'is-invalid' :errors.has('fname') }"
                  class="form-control"
                  placeholder="ชื่อ"
                />
                <span class="invalid-feedback">{{errors.first('fname')}}</span>
              </div>
            </div>

            <div class="col-6">
              <div class="form-group">
                <input
                  type="text"
                  name="lname"
                  v-model.trim="form.lname"
                  v-validate="'required'"
                  :class="{'is-invalid' :errors.has('lname') }"
                  class="form-control"
                  placeholder="นามสกุล"
                />
                <span class="invalid-feedback">{{errors.first('lname')}}</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <input
              type="text"
              name="username"
              v-validate="{ required: true, regex:/^[A-Za-z0-9]{3,15}$/ }"
              v-model.trim="form.username"
              :class="{'is-invalid' :errors.has('username') }"
              class="form-control"
              placeholder="ชื่อเข้าใช้งาน (username)"
            />
            <span class="invalid-feedback">{{errors.first('username')}}</span>
          </div>

          <div class="form-group">
            <input
              type="password"
              name="password"
              v-validate="{ required: true, regex:/^[A-Za-z0-9]{4,15}$/ }"
              v-model.trim="form.password"
              :class="{'is-invalid' :errors.has('password') }"
              class="form-control"
              placeholder="รหัสผ่าน"
            />
            <span class="invalid-feedback">{{errors.first('password')}}</span>
          </div>

          <div class="form-group">
            <input
              type="password"
              name="confirmpassword"
              v-validate="'required|confirmed:password'"
              :class="{'is-invalid' :errors.has('confirmpassword') }"
              class="form-control"
              placeholder="ยืนยันรหัสผ่าน"
            />
            <span class="invalid-feedback">{{errors.first('confirmpassword')}}</span>
          </div>
          <div v-if="errorMessage" class="alert alert-danger text-center">{{errorMessage}}</div>
          <button type="submit" class="btn btn-primary">ยืนยัน</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar";
export default {
   components: {
    Navbar
  },
  data() {
    return {
      form: {
        fname: "",
        lname: "",
        username: "",
        password: ""
      },
      errorMessage: ""
    };
  },
  methods: {
    //บันทึกข้อมูลการลงทะเบียน
    onSubmit() {
      this.$validator.validateAll().then(valid => {
        //console.log(valid);//เช็คว่าค่าที่กรอกครบหรือไม่
        console.log(this.form);
        if (!valid) return;
        axios
          .post("api/account/register", this.form)
          .then(response => this.onReset())
          .catch(err => {
            this.errorMessage = err.response.data.message;
            //console.log(err.response.data.message);
          });
      });
    }, //resetform
    onReset() {
      this.errorMessage = null;
      this.$validator.reset();
      this.form = {
        fname: "",
        lname: "",
        username: "",
        password: "",
        confirmpassword: ""
      };
    }
  }
};
</script>

<style  scoped>
.card {
  margin: auto;
  width: 450px;
}
</style>