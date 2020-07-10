<template>
    <iframe :src="pdfLink" frameborder="0"></iframe>
</template>

<script>
export default {
  data () {
      return {
        pdfLink : '@/public/tel.pdf'
      }
     }
}
</script>