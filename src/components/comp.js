import Vue from 'vue'

Vue.component('comp', {
	template: `<div>{{name}}</div>`,
	data: function(){
		return {
			name: 'last comp'
		}
	}
})

export default new Vue({el: '#comp'})