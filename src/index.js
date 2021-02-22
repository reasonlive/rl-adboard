import 'regenerator-runtime/runtime'
import {createApp} from 'vue';
import {createWebHistory,createRouter} from 'vue-router'

import App from './App.vue'

/////////components
import NotFound from './components/NotFound.vue'
import FormAccount from  './components/Forms/FormAccount.vue'
import FormAdvert from  './components/Forms/FormAdvert.vue'
import FormAdvertSearch from  './components/Forms/FormAdvertSearch.vue'
import FormEntry from  './components/Forms/FormEntry.vue'

import AdBlock from  './components/AdBlock.vue'
import Ad from  './components/Ad.vue'




//any ad route must be fetched from db before redirect to it
//fetch in this file probably
const routes = [

	{
		path: '/:catchAll(.*)',
		component: NotFound
	},
	{
		path: '/',
		component: AdBlock
		//props: {data: {photo: './src/img/ads/some/ad/berkly.jpg'} }
	},
	{
		path: '/login',
		name: 'login',
		component: FormEntry,
	},
	{
		path: '/register',
		name: 'register',
		props:{registered: true},
		component: FormEntry
	},
	{
		path: "/add",
		name: 'add',
		component: FormAdvert,

	},
	{
		path: '/account',
		name: 'account',
		component: FormAccount
	},
	{
		path: '/ad/:id',
		component: Ad,
		name: 'ad',
		props: {data: 
			{photos: ['/src/img/ads/some/ad/berkly.jpg',],
			title: 'first'}
		}
	},

	{
		path: '/search',
		component: FormAdvertSearch
	},
	

];

const router = createRouter({
	routes,
	history: createWebHistory()
})


createApp(App).use(router).mount("#app")
