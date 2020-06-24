<template>
  <div class="register">
    <div class="card ">
      <div class="card-header bg-primary text-light text-center">สมัครใช้งาน Admin status : default user</div>
      <div class="card-body">
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="col-6">

              <div class="form-group">
                <input type="text" name="fname" 
                v-validate="'required'" 
                v-model.trim="form.fname" 
                :class="{'is-invalid' :errors.has('fname') }"
                class="form-control" 
                placeholder="ชื่อ" />
               <span class="invalid-feedback">{{errors.first('fname')}}</span>
              </div>
            </div>

            <div class="col-6">
              <div class="form-group">
                <input type="text" name="lname" 
                v-model.trim="form.lname" 
                v-validate="'required'" 
                :class="{'is-invalid' :errors.has('lname') }"
                class="form-control" 
                placeholder="นามสกุล" />
                <span class="invalid-feedback">{{errors.first('lname')}}</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <input type="text" name="username" 
            v-validate="'required'" 
            v-model.trim="form.username"
            :class="{'is-invalid' :errors.has('username') }"
            class="form-control" placeholder="ชื่อเข้าใช้งาน (username)" />
            <span class="invalid-feedback">{{errors.first('username')}}</span>
          </div>

          <div class="form-group">
               <input type="password" name="password" 
                v-validate="'required'" 
                v-model.trim="form.password" 
                :class="{'is-invalid' :errors.has('password') }"
                class="form-control" placeholder="รหัสผ่าน" />
              <span class="invalid-feedback">{{errors.first('password')}}</span>
          </div>

          <div class="form-group">
               <input type="password" name="confirmpassword"
                 v-model.trim="form.confirmpassword" 
                 v-validate="'required|confirmed:password'"
                :class="{'is-invalid' :errors.has('confirmpassword') }"
                class="form-control" placeholder="ยืนยันรหัสผ่าน" />
             <span class="invalid-feedback">{{errors.first('confirmpassword')}}</span>
          </div>
          <button type="submit" class="btn btn-primary ">ยืนยัน</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
            fname:"",
            lname:"",
            username:"",
            password:""
            }
        }
    },
    methods:{
        //บันทึกข้อมูลการลงทะเบียน
        onSubmit(){
            console.log(this.form)
        }
    }
}
;
</script>

<style  scoped>
.card{
    margin: auto;
    width: 450px;
}
</style>