import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import CaipinfenleiController from './Caipinfenlei'
import CaipinxinxiController from './Caipinxinxi'
import ShitangxinxiController from './Shitangxinxi'
import CaipinzixunController from './Caipinzixun'
import ChatController from './Chat'
import CartController from './Cart'
import OrdersController from './Orders'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import SystemintroController from './Systemintro'
import MessagesController from './Messages'
import DiscusscaipinxinxiController from './Discusscaipinxinxi'
import DiscussshitangxinxiController from './Discussshitangxinxi'
import DiscusscaipinzixunController from './Discusscaipinzixun'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/caipinfenlei', CaipinfenleiController({ config, db }))

	api.use('/caipinxinxi', CaipinxinxiController({ config, db }))

	api.use('/shitangxinxi', ShitangxinxiController({ config, db }))

	api.use('/caipinzixun', CaipinzixunController({ config, db }))

	api.use('/chat', ChatController({ config, db }))

	api.use('/cart', CartController({ config, db }))

	api.use('/orders', OrdersController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	api.use('/messages', MessagesController({ config, db }))

	api.use('/discusscaipinxinxi', DiscusscaipinxinxiController({ config, db }))

	api.use('/discussshitangxinxi', DiscussshitangxinxiController({ config, db }))

	api.use('/discusscaipinzixun', DiscusscaipinzixunController({ config, db }))

	return api
}
