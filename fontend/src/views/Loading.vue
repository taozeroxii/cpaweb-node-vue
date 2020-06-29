<script>
export default {
    created(){
    this.$router.app.$store.dispatch('get_user_login')//เรียกใช้เพื่อดึงค่าใน store 
    this.$router.push('/')
    }
}
</script>