<template>
  <div>
      <form>
          <input type="text" v-model="username">
      <input type="text" v-model="password">
      <input type="button" value="登录" @click="sub">
      </form>
  </div>
</template>

<script>
export default {
    data (){
        return {
            username:"前端学院",
            password:"123456"
        }
    },
    methods:{
        sub (){
            this.$axios.post("http://bxg.huoqishi.net/signin",{
                username:this.username,
                password:this.password
            }).then(
                res=>{
                    console.log(res.data);
                    if(res.data.errcode!==0){
                        return alert(res.data.errmsg)
                    }
                    this.$router.push({name:"home"})
                }
            )
        }
    }
  
}
</script>

<style>

</style>
