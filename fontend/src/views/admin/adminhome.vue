<template>
  <div class="indexadmin">
      <Navbar />

      <div class="container">
      
      </div>


    <div class="container"></div>

  </div>
</template>

<script>
import Navbar from "../../components/admincomponents/Navbar";
export default {
  name: "adminhome",
  components: {
    Navbar
  },
  created(){
    console.log(this.$store.state.user)
  }
};
</script>



<style  scoped>

</style>


