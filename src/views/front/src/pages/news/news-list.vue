<template>
<div>
	<div :style='{"padding":"16px 20px","margin":"16px auto","borderColor":"#eee","borderRadius":"30px","background":"#ffffff","borderWidth":"0px","width":"86%","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'>'" :style='{"fontSize":"16px","lineHeight":"1","justifyContent":"flex-start","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="news-preview-pv" :style='{"minHeight":"100vh","padding":"0 7%","margin":"0px auto","overflow":"hidden","background":"none","width":"100%","position":"relative"}'>
		<el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"0","alignItems":"center","top":"20px","borderRadius":"30px","flexWrap":"wrap","background":"#fff","display":"flex","width":"250px","position":"absolute","right":"7%","justifyContent":"center","height":"auto"}'>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
				<el-input v-model="title" placeholder="标题"></el-input>
			</el-form-item>
			<el-button type="primary" @click="getNewsList(1)" :style='{"cursor":"pointer","border":"0","padding":"0px 20px","margin":"0 0px 0 0","outline":"none","color":"#fff","borderRadius":"30px","background":"#1e3c4f","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>
				<span class="icon iconfont icon-chakan14" :style='{"color":"#fff","margin":"0 0px 0 0","fontSize":"14px"}'></span>
				搜索
			</el-button>
		</el-form>
		
		<!-- category -->
		<div class="category" :style='{"padding":"16px 10px 4px 16px","margin":"80px 0 0","borderColor":"#ddd","display":"flex","float":"right","justifyContent":"flex-start","borderRadius":"12px","flexWrap":"wrap","background":"#fff","borderWidth":"0px 0","width":"250px","borderStyle":"solid","height":"auto"}'>
		  <div class="item" @click="categoryClick(0)" :class="categoryIndex == 0 ? 'active' : ''">全部</div>
		  <div v-for="(item,index) in categoryList" @click="categoryClick(index+1)" :key="index" class="item" :class="categoryIndex == index+1 ? 'active' : ''">{{item.typename}}</div>
		</div>
	
				
				
				<!-- 样式三 -->
		<div class="list3 index-pv1" :style='{"minHeight":"800px","padding":"0","margin":"20px 0 0 0","color":"#999","width":"calc(100% - 310px)","fontSize":"14px","float":"left","height":"auto"}'>
			<div :style='{"cursor":"pointer","padding":"20px","margin":"0 0 20px","background":"#fff","width":"100%","position":"relative","height":"auto"}' v-for="item in newsList" :key="item.id" @click="toNewsDetail(item)" class="list-item animation-box">
				<div :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"40px","fontSize":"18px","textOverflow":"ellipsis","fontWeight":"600"}' class="title ">{{item.title}}</div>
				<div :style='{"border":"0px solid #eee","padding":"20px","margin":"0 0 10px","overflow":"hidden","color":"#666","background":"#fafafa","lineHeight":"24px","fontSize":"14px","height":"72px"}' class="introduction ">{{item.introduction}}</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","float":"right","display":"inline-block"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
				  <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
				  <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"inherit","fontSize":"12px","color":"inherit"}'></span>
				  <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
				  <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0","margin":"0 10px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-chakan2" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"16px","color":"inherit"}'></span>
				  <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 10px","margin":"10px 0 0","color":"#fff","textAlign":"center","background":"#333","display":"none","width":"80px","fontSize":"14px","lineHeight":"32px","float":"right"}' class="tags ">新闻动态</div>
			</div>
		</div>
				
				
				
				
				
				
				
		<el-pagination
		  background
		  id="pagination" class="pagination"
		  :pager-count="7"
		  :page-size="pageSize"
		  :page-sizes="pageSizes"
		  prev-text="上一页"
		  next-text="下一页"
		  :hide-on-single-page="false"
		  :layout='["prev","pager","next"].join()'
		  :total="total"
		  :style='{"padding":"5px 0","margin":"20px auto","color":"#333","textAlign":"left","width":"100%","clear":"both","lineHeight":"40px","fontWeight":"500","height":"40px"}'
		  @current-change="curChange"
		  @prev-click="prevClick"
		  @next-click="nextClick"
		></el-pagination>

		<!-- 热门信息 -->
		<div class="hot" :style='{"padding":"10px 4px","margin":"20px 0","borderRadius":"12px","background":"#fff","width":"100%","clear":"both","height":"auto"}'>
		  <div :style='{"padding":"10px","borderColor":"#ddd","color":"#00172e","borderRadius":"0px","textAlign":"left","background":"none","borderWidth":"0px","width":"100%","lineHeight":"40px","fontSize":"32px","borderStyle":"solid","fontWeight":"600"}'>推荐信息</div>
		  <div :style='{"padding":"0 10px","margin":"20px 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="item in hotList" :key="item.id" :style='{"cursor":"pointer","padding":"0","margin":"0 0 20px","overflow":"hidden","background":"#fff","width":"23%","height":"120px"}' @click="toNewsDetail(item)">
		      <img :style='{"width":"48%","objectFit":"cover","float":"left","display":"block","height":"100%"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"0 10px","borderColor":"#eee","whiteSpace":"nowrap","color":"#666","textAlign":"left","float":"right","overflow":"hidden","borderWidth":"0px","width":"48%","lineHeight":"30px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 10px","color":"#999","textAlign":"left","width":"48%","lineHeight":"30px","fontSize":"14px","float":"right"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				baseUrl: this.$config.baseUrl,
				breadcrumbItem: [
				  {
					name: '公告资讯'
				  }
				],
				newsList: [],
				total: 1,
				pageSize: 10,
				pageSizes: [10,20,30,50],
				totalPage: 1,
				layouts: '',
				title: '',
				categoryIndex: 0,
				categoryList: [],
				hotList: [],
			}
		},
		created() {
			this.getCategoryList()
			this.getNewsList(1);
			this.getHotList()
		},
		//方法集合
		methods: {
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data.list
					}
				});
			},
			categoryClick(index) {
				this.categoryIndex = index
				this.getNewsList()
			},
			getNewsList(page) {
				let params = {page, limit: this.pageSize,sort:'addtime',order:'desc'};
				let searchWhere = {};
				if(this.title != '') searchWhere.title = '%' + this.title + '%';
				if(this.categoryIndex!=0){
					searchWhere.typename = this.categoryList[this.categoryIndex - 1].typename
				}
				this.$http.get('news/list', {params: Object.assign(params, searchWhere)}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = Number(res.data.data.pageSize);
						this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
						this.totalPage = res.data.data.totalPage;
					}
				});
			},
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
			curChange(page) {
				this.getNewsList(page);
			},
			prevClick(page) {
				this.getNewsList(page);
			},
			nextClick(page) {
				this.getNewsList(page);
			},
			toNewsDetail(item) {
				this.$router.push({path: '/index/newsDetail', query: {id: item.id}});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	.news-wrap {
	  width: 1000px;
	  margin: 0 auto;
	}
	.news-item {
	  height: 200px;
	  width: auto;
	  margin-bottom: 30px;
	  cursor: pointer;
	}
	.news-item-text {
	  width: calc(100% - 215px);
	  display: inline-block;
	  vertical-align: top;
	  margin-left: 15px;
	}
	.news-item-text-title {
	  font-size: 16px;
	  margin-bottom: 15px;
	}
	.news-item-text-intro {
	  font-size: 14px;
	  color: #666;
	}
	
	.hide1 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide2 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide3 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	
	.index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(10px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
	}
	
	.index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		
	#pagination.el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #666;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0 6px;
				margin: 0 5px;
				color: #666;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0 6px;
				margin: 0 5px;
				color: #666;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 6px;
				margin: 0 5px;
				color: #C0C4CC;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 6px;
				margin: 0 5px;
				color: #C0C4CC;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #666;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #fff;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #8e9da6;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #FFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #8e9da6;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #606266;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #606266;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #606266;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.news-preview-pv .el-input /deep/ .el-input__inner {
				border: 0px solid #ddd;
				border-radius: 30px 0 0 30px;
				padding: 0 10px;
				margin: 0;
				outline: none;
				color: #333;
				width: 150px;
				font-size: 14px;
				line-height: 40px;
				height: 40px;
			}
	
	.news-preview-pv .category .item {
				cursor: pointer;
				border: 0px solid #ddd;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0 4% 12px 0;
				color: #333;
				background: #ededed;
				width: auto;
				font-size: 14px;
				line-height: 40px;
				text-align: center;
				min-width: 28%;
			}
	
	.news-preview-pv .category .item:hover {
				border: 0px solid #28890b;
				color: #fff;
				background: #1e3c4f;
			}
	
	.news-preview-pv .category .item.active {
				border: 0px solid #28890b;
				color: #fff;
				background: #1e3c4f;
			}
	
	.news-preview-pv .list9 .item .image {
				clip-path: polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%);
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .image {
				transform: scale(1);
			}
	
	.news-preview-pv .list9 .item .info {
				padding: 10px;
				clip-path: polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%);
				color: #fff;
				left: 0;
				bottom: -100%;
				background: rgba(26,188,158,.90);
				width: 100%;
				font-size: 14px;
				position: absolute;
				transition: 0.3s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .info {
				bottom: 0;
			}
</style>
