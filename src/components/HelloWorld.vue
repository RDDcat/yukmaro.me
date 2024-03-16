<template>
  <div class="cards">
    <div class="card">
      <img class="card-image" src="@/assets/yiyi.jpg">
      <h3 class="card-text">브이이</h3>
    </div>
    <div class="card">
      <img class="card-image" src="@/assets/yiyi_fox.jpg">
      <h3 class="card-text">팍스이이</h3>
    </div>
    <div class="card">
      <img class="card-image" src="@/assets/yiyi_wink.jpg">
      <h3 class="card-text">윙키이</h3>
    </div>
    <div class="card">
      <img class="card-image" src="@/assets/yiyi_babo.jpg">
      <h3 class="card-text">바보 이이 ㅋㅋ</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards{
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}
.card{
  margin: 0.5rem;
  width: 18rem;
  height: 25rem;
  background-color: #cfe2fa;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card-image{
  margin-top: 0.5rem;
  width: 16rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
}
.card-text{

}
</style>
