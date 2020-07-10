<template>
  <div class="about">
    <Navbar/>
    <div class="container-fulid">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 text-center ">
            <img src="../assets/ceo63.jpg" alt="" style="border-radius:30px">
            <h4 >{{ceoName}}</h4>
            <h4 class="mb-5">{{position}}</h4>

            <center><h2>เกี่ยวกับเรา</h2></center> 
          </div>
        </div>
        <div class="row text-center " >
          <div class="col-lg-6 col-12">
            วิสัยทัศน์ <hr>
            โรงพยาบาลที่มีบริการการแพทย์ด้วยมาตรฐาน <br>
            เป็นที่พึ่ง ของประชาชน<br>
            การแพทย์แผนไทยและสมุนไพรระดับนานาชาติ<br>
            </div>
          <div class="col-lg-6 col-12 ">
              พันธกิจ <hr>
              <p class="text-left">
              1. บริการการแพทย์ที่มีมาตรฐาน<br>
              2. เป็นศูนย์การเรียนรู้ด้านการแพทย์และสมุนไพร<br>
              3. เป็นศูนย์แพทย์ศาสตร์ศึกษาที่ผลิตบุคลากรการแพทย์<br>
              </p>
          </div>
        </div>

        <hr>
        <div class="row">
          <div class="col-lg-4 col-12">
            <h2 >ติดต่อ</h2>
            โรงพยาบาลเจ้าพระยาอภัยภูเบศร <br/>
            เลขที่ 32/7 หมู่ 12 ถนนปราจีนอนุสรณ์<br/>
            ตำบลท่างาม จังหวัดปราจีนบุรี 25000<br/>
            โทรศัพท์ : 037 211 088<br/>
            แฟกซ์ : 037 211 243<br/>
            เบอร์ติดต่อภายใน    <a href="./tel.pdf" target="_blank">PDF Click</a>

           <br/> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
    components: {
    Navbar
  },
  data(){
    return{
      ceoName:"แพทย์หญิงโศรยา ธรรมรักษ์",
      position:"ผู้อำนวยการโรงพยาบาลเจ้าพระยาอภัยภูเบศร"
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>