<template>
<div class="hello">hello</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      isGreen:true,
      isyellow:true,
      isPurple:true,

    }
  },
}
</script>
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
