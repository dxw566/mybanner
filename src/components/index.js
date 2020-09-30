import Vue from "vue";
import Banner from "./Banner"

const Components = {
    Banner
}

Object.keys(Components).forEach(name=>{
    Vue.component(name, Components[name])

})

export default Components;