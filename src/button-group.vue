Skip to content
Search or jump to…
Pulls
Issues
Marketplace
Explore
 
@liuleill 
FrankFang
/
frank-test-1
Public
Code
Issues
Pull requests
9
Actions
Projects
Wiki
Security
Insights
frank-test-1/src/button-group.vue
@FrankFang
FrankFang 第一个元素不需要 margin left -1px
Latest commit c010744 on 24 Jun 2018
 History
 1 contributor
41 lines (41 sloc)  965 Bytes
   
<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss">
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>