<template>
  <button class="g-button">按钮</button>

</template>
<script>
export default {

}
</script>
<style lang="sass">
.g-button{
  height: var(--button-height);
  padding:0 1em;
  font:inherit;
  border-radius: var(--border-radius);
  background:var(--button-bg);
  font-size:var(--font-size);
  &:hover{
    border-color:var(--border-color-hover);
  }
  &:active{
    border-color:var(--button-active-bg);
  }
  &:focus{
    outline:none;
  }
}

</style>