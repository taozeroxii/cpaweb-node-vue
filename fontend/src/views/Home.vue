<template>
  <div class="home">
      <Navbar />

      <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://picsum.photos/1024/480/?image=55" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://picsum.photos/1024/480/?image=58" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://picsum.photos/1024/480/?image=54" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>


    <div class="container"></div>

  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>



<style  scoped>

</style>


