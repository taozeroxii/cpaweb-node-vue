<template>
  <div class="modal fade" tabindex="-1" role="dialog" id="loginform">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">เข้าสู่ระบบ</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit()">
            <div class="form-group">
              <label for="exampleInputEmail1">ชื่อผู้ใช้งาน</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Username"
                v-validate="'required'"
                name="loginusername"
                v-model.trim="form.username"
                :class="{'is-invalid':errors.has('loginusername')}"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">รหัสผ่าน</label>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                name="loginpassword"
                v-validate="'required'"
                v-model.trim="form.password"
                :class="{'is-invalid':errors.has('loginpassword')}"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">ยืนยัน</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
        </div>
      </div>
    </div>
  </div>
</template>
  


<script>
import axios from "axios";

export default {
  props: {
    login: {
      required: true
    }
  },
   watch: {//เช็คว่ามีการกดปุ่ม login ไหมโดยดูจากค่าที่ส่งมาหากเปลี่ยนให้แสดง
    login(value) {
      if(!value){ return }
      this.jquery("#loginform").modal();
      //console.log(value);
    }
  },
  mounted() {
    //ตรวจจับ event การปิดหน้า modal dialog 
    this.jquery("#loginform").on('hidden.bs.modal',(e) => {
       this.$emit('onClose',event);//ส่งค่าโดยใช้ emit ไปหาคอมโพเนนท์หลักใน inclose 
       });
  },

  data() {
    return {
      form: {
        loginusername: "",
        loginpassword: ""
      },
      errorMessage: ""
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(valid => {
        if (!valid) return;
        axios
          .post("api/account/login", this.form)
          .then(response => {
            //console.log(response.data);
            this.alertify.success("เข้าสู่ระบบสำเร็จ")
            this.$router.push('/admin')
            this.jquery("#loginform").modal("hide");
          })
          .catch(err => {
            this.errorMessage = err.response.data.message;
          });
      });
    }
  }
};
</script>

<style scoped>

</style>