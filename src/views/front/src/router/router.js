import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import caipinfenleiList from '../pages/caipinfenlei/list'
import caipinfenleiDetail from '../pages/caipinfenlei/detail'
import caipinfenleiAdd from '../pages/caipinfenlei/add'
import caipinxinxiList from '../pages/caipinxinxi/list'
import caipinxinxiDetail from '../pages/caipinxinxi/detail'
import caipinxinxiAdd from '../pages/caipinxinxi/add'
import shitangxinxiList from '../pages/shitangxinxi/list'
import shitangxinxiDetail from '../pages/shitangxinxi/detail'
import shitangxinxiAdd from '../pages/shitangxinxi/add'
import caipinzixunList from '../pages/caipinzixun/list'
import caipinzixunDetail from '../pages/caipinzixun/detail'
import caipinzixunAdd from '../pages/caipinzixun/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusscaipinxinxiList from '../pages/discusscaipinxinxi/list'
import discusscaipinxinxiDetail from '../pages/discusscaipinxinxi/detail'
import discusscaipinxinxiAdd from '../pages/discusscaipinxinxi/add'
import discussshitangxinxiList from '../pages/discussshitangxinxi/list'
import discussshitangxinxiDetail from '../pages/discussshitangxinxi/detail'
import discussshitangxinxiAdd from '../pages/discussshitangxinxi/add'
import discusscaipinzixunList from '../pages/discusscaipinzixun/list'
import discusscaipinzixunDetail from '../pages/discusscaipinzixun/detail'
import discusscaipinzixunAdd from '../pages/discusscaipinzixun/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'caipinfenlei',
					component: caipinfenleiList
				},
				{
					path: 'caipinfenleiDetail',
					component: caipinfenleiDetail
				},
				{
					path: 'caipinfenleiAdd',
					component: caipinfenleiAdd
				},
				{
					path: 'caipinxinxi',
					component: caipinxinxiList
				},
				{
					path: 'caipinxinxiDetail',
					component: caipinxinxiDetail
				},
				{
					path: 'caipinxinxiAdd',
					component: caipinxinxiAdd
				},
				{
					path: 'shitangxinxi',
					component: shitangxinxiList
				},
				{
					path: 'shitangxinxiDetail',
					component: shitangxinxiDetail
				},
				{
					path: 'shitangxinxiAdd',
					component: shitangxinxiAdd
				},
				{
					path: 'caipinzixun',
					component: caipinzixunList
				},
				{
					path: 'caipinzixunDetail',
					component: caipinzixunDetail
				},
				{
					path: 'caipinzixunAdd',
					component: caipinzixunAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusscaipinxinxi',
					component: discusscaipinxinxiList
				},
				{
					path: 'discusscaipinxinxiDetail',
					component: discusscaipinxinxiDetail
				},
				{
					path: 'discusscaipinxinxiAdd',
					component: discusscaipinxinxiAdd
				},
				{
					path: 'discussshitangxinxi',
					component: discussshitangxinxiList
				},
				{
					path: 'discussshitangxinxiDetail',
					component: discussshitangxinxiDetail
				},
				{
					path: 'discussshitangxinxiAdd',
					component: discussshitangxinxiAdd
				},
				{
					path: 'discusscaipinzixun',
					component: discusscaipinzixunList
				},
				{
					path: 'discusscaipinzixunDetail',
					component: discusscaipinzixunDetail
				},
				{
					path: 'discusscaipinzixunAdd',
					component: discusscaipinzixunAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
