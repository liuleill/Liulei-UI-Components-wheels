import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

console.log(Button);
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-grounp', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})
