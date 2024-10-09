<template>
<div class="home-preview" :style='{"margin":"0px auto","flexWrap":"wrap","flexDirection":"row","background":"#fff","display":"flex","width":"100%","justifyContent":"center"}'>

	<!-- 搜索 -->
	<div id="search" class="search animate__animated" :style='{"padding":"6px 10px","margin":"20px auto 0","borderColor":"#eee","display":"none","clipPath":"polygon(99% 0, 100% 50%, 99% 100%, 1% 100%, 0 50%, 1% 0)","justifyContent":"center","flexWrap":"wrap","background":"#1d800110","borderWidth":"0px","width":"86%","borderStyle":"solid","height":"auto","zIndex":"1002"}'>
		<div :style='{"margin":"0 10px 0 0"}' class="select">
			<el-select v-model="queryIndex">
				<el-option
				  v-for="(item,index) in queryList"
				  :key="index"
				  :label="item.queryName"
				  :value="index"
				></el-option>
			</el-select>
		</div>
		<div :style='{"margin":"0 10px 0 0"}' class="input" v-if="queryIndex==0">
			<el-input v-model="caipinxinxicaipinmingcheng" placeholder="菜品名称"></el-input>
		</div>
		<div :style='{"margin":"0"}' class="btn" v-if="queryIndex==0">
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 8px 0 10px","margin":"0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"2px","background":"#1d8001","width":"auto","lineHeight":"32px","fontSize":"16px","height":"32px"}' type="primary" @click="search('caipinxinxi')">
				<span class="icon iconfont icon-chakan14" :style='{"color":"rgba(255, 255, 255, 1)","margin":"0 4px 0 0","fontSize":"20px"}'></span>
				
			</el-button>
		</div>
	</div>
	<!-- 搜索 -->



		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"0px 7% 40px","margin":"40px auto 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative","height":"auto","order":"1"}'>
		  <div :style='{"padding":"0px 0 0","margin":"160px auto 0","color":"#1e3c4f","textAlign":"left","background":"none","width":"auto","fontSize":"50px","position":"absolute","fontWeight":"600","height":"60px"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"right","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"alignItems":"flex-end","flexWrap":"wrap","display":"flex","width":"60%","justifyContent":"space-between","height":"660px","order":"2"}'>
		    <img :style='{"width":"53%","margin":"0 2% 0 0","objectFit":"contain","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"width":"43%","margin":"0","objectFit":"contain","display":"block","height":"80%"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"0px","margin":"260px 5% 40px 0","overflow":"hidden","color":"#333","background":"#fff","width":"35%","lineHeight":"24px","fontSize":"16px","fontWeight":"600","height":"144px","order":"1"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"transform":"rotate(180deg)","top":"0","background":"url(http://codegen.caihongy.cn/20230920/8a35b5134ee644b8a9a87ea99a0f1490.png) no-repeat","display":"none","width":"200px","position":"absolute","right":"52%","height":"100%"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0px solid #1d8001","cursor":"pointer","margin":"0","textAlign":"right","display":"flex","justifyContent":"center","top":"450px","background":"none","width":"auto","lineHeight":"40px","position":"absolute","order":"8","height":"40px"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"padding":"0 6px 0 0","margin":"0","color":"#000","background":"none","display":"inline-block","width":"auto","fontSize":"16px","lineHeight":"40px","textDecoration":"underline","height":"40px"}'>查看更多</span>
		    <span class="icon iconfont icon-jiantou09" :style='{"padding":"0px","margin":"0","color":"#1d8001","background":"none","display":"none","fontSize":"16px","lineHeight":"40px","height":"40px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"60px 0 40px","margin":"0 auto","background":"url(),#bbc1c4","flex":"1","width":"100%","position":"relative","order":"5"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"86%","margin":"0px auto","lineHeight":"60px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231010/84c0d484cc5144b0b970462a64801e94.png) no-repeat 520px center"}'>
			<span :style='{"color":"#fff","fontSize":"50px","fontWeight":"600"}'>公告资讯</span>
		</div>
		
			
			
			<!-- 样式二 -->
		<div class="list list2 index-pv1" :style='{"padding":"0 7%","margin":"40px 0 0","color":"#999","flexWrap":"wrap","background":"none","display":"flex","width":"100%","fontSize":"14px","justifyContent":"space-between","height":"auto"}' v-if="newsList.length">
			<div :style='{"cursor":"pointer","boxShadow":"1px 2px 9px #ccc","margin":"0 0 30px","background":"#fff","display":"flex","width":"49%","fontSize":"0","position":"relative","height":"auto"}' v-for="(item,index) in newsList" :key="index" class="list-item animation-box" @click="toDetail('newsDetail', item)">
				<img :style='{"width":"40%","padding":"10px","objectFit":"cover","display":"inline-block","height":"290px","order":"2"}' :src="baseUrl + item.picture" alt="" />
				<div :style='{"width":"60%","padding":"80px 20px","overflow":"hidden","display":"inline-block","height":"290px"}' class="item-info">
					<div class="name line1" :style='{"padding":"0 10px","margin":"0 0 20px","overflow":"hidden","color":"#333","width":"100%","lineHeight":"24px","fontSize":"16px","height":"72px"}'>{{item.title}}</div>
					<div :style='{"float":"right","padding":"0 10px","display":"inline-block"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
					  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.addtime}}</span>
					</div>
					<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/b44ce7a370a64423b7ab380eb3d07eeb.png) no-repeat left center / 16px","display":"inline-block"}'>
					  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
					  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.name}}</span>
					</div>
					<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/c5239fbbb59c47209c3360cd84d4f1eb.png) no-repeat left center / 14px","display":"inline-block"}'>
					  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
					  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.thumbsupnum}}</span>
					</div>
					<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/767abf0505494bcbb3b56e13a414ec1c.png) no-repeat left center / 14px","display":"inline-block"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
					  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.storeupnum}}</span>
					</div>
					<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/48c5f08eca0940cdb7840f1c364f57cc.png) no-repeat left center / 14px","display":"inline-block"}'>
					  <span class="icon iconfont icon-chakan2" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
					  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.clicknum}}</span>
					</div>
				</div>
			</div>
		</div>
			
			
			
			
			
			
			
			
		











		<div @click="moreBtn('news')" :style='{"border":"0px solid #1d8001","cursor":"pointer","margin":"20px auto","top":"60px","textAlign":"center","left":"calc(7% + 360px)","background":"none","display":"block","width":"130px","lineHeight":"36px","position":"absolute"}'>
			<span :style='{"color":"#fff","fontSize":"16px","textDecoration":"underline"}'>查看更多</span>
			<i :style='{"color":"#333","fontSize":"16px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendcaipinxinxi" class="recommend animate__animated" :style='{"padding":"60px 7% 20px","margin":"0 auto","borderColor":"#ddd","background":"url(http://codegen.caihongy.cn/20231010/dab28806e6084effb4866358e938b0b4.jpg) no-repeat center top / 100% 100%","borderWidth":"0px 0","width":"100%","position":"relative","borderStyle":"solid","order":"2"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"0px auto","lineHeight":"60px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231010/84c0d484cc5144b0b970462a64801e94.png) no-repeat 520px center"}'>
		<span :style='{"padding":"0","fontSize":"50px","color":"#fff","fontWeight":"600","display":"block"}'>菜品信息推荐</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div :style='{"width":"100%","padding":"10px 10px 0","margin":"60px 0","background":"#fff","height":"auto"}' class="swiper-container" id="recommendcaipinxinxi">
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","cursor":"pointer","padding":"0px 0px 20px","boxShadow":"1px 2px 4px #ccc,inset -8px 0px 6px 0px #e6e6e6","borderRadius":"0px","background":"#fff","position":"relative"}' v-for="(item,index) in caipinxinxiRecommend" :key="index" @click="toDetail('caipinxinxiDetail', item)">
					<img :name="item.id" :style='{"objectFit":"cover","width":"100%","height":"480px"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"objectFit":"cover","width":"100%","height":"480px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
					<div class="line1" :style='{"padding":"0 10px","margin":"6px 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","background":"none","width":"calc(100% - 104px)","fontSize":"14px","lineHeight":"32px","textOverflow":"ellipsis","fontWeight":"600","height":"32px"}'>{{item.caipinmingcheng}}</div>
					<div class="line1" :style='{"padding":"0 10px","margin":"6px 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","background":"none","width":"calc(100% - 104px)","fontSize":"14px","lineHeight":"32px","textOverflow":"ellipsis","fontWeight":"600","height":"32px"}'>{{item.caipinfenlei}}</div>
					<div :style='{"width":"auto","padding":"0px","position":"absolute","right":"10px","bottom":"20px"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"#999","display":"none"}'></span>
					  <span class="text" :style='{"color":"#999","lineHeight":"1.5","fontSize":"14px"}'>{{item.addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","display":"inline-block"}'>
					  <span class="icon iconfont icon-zan07" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"#999"}'></span>
					  <span class="text" :style='{"color":"#999","lineHeight":"1.5","fontSize":"14px"}'>{{item.thumbsupnum}}</span>
					</div>
					<div :style='{"padding":"0 10px","display":"inline-block"}'>
					  <span class="icon iconfont icon-shoucang12" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"#ffca61"}'></span>
					  <span class="text" :style='{"color":"#ffca61","lineHeight":"1.5","fontSize":"14px"}'>{{item.storeupnum}}</span>
					</div>
				</div>
			</div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	







	
	<div @click="moreBtn('caipinxinxi')" :style='{"border":"0px solid #fff","cursor":"pointer","margin":"12px auto","top":"60px","textAlign":"center","left":"calc(7% + 400px)","background":"none","display":"block","width":"auto","lineHeight":"36px","position":"absolute"}'>
		<span :style='{"color":"#fff","fontSize":"16px","textDecoration":"underline"}'>查看更多</span>
		<i :style='{"color":"#fff","fontSize":"16px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
	</div>
	
</div>
<!-- 商品推荐 -->


<!-- 特价商品 -->
<div id="animate_listcaipinxinxi" class="lists animate__animated" :style='{"width":"100%","padding":"20px 0 0","margin":"40px auto 20px","position":"relative","background":"#fff","order":"5"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"86%","margin":"0px auto","lineHeight":"60px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231006/53e70b77fda2495f9e803a7eca8d56c1.png) no-repeat 520px center"}'>
	  <span :style='{"padding":"0","fontSize":"50px","color":"#1e3c4f","fontWeight":"600","display":"block","font":"\"宋体\""}'>菜品信息展示</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"padding":"0 7%","margin":"40px 0 0","color":"#999","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","fontSize":"14px","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"cursor":"pointer","boxShadow":"1px 2px 9px #ccc","padding":"10px","margin":"0 0 30px","background":"none","display":"flex","width":"49%","fontSize":"0","position":"relative","height":"auto"}' v-for="(item,index) in caipinxinxiList" class="list-item animation-box" :key="index" @click="toDetail('caipinxinxiDetail', item)">
			<img :style='{"width":"40%","objectFit":"cover","display":"inline-block","height":"400px"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :style='{"width":"40%","objectFit":"cover","display":"inline-block","height":"400px"}' v-else :src="baseUrl +  (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div :style='{"width":"60%","padding":"100px 60px","overflow":"hidden","background":"none","display":"inline-block","height":"400px"}' class="item-info">
				<div class="name line1" :style='{"padding":"0 0px","margin":"0 0 20px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.caipinmingcheng}}</div>
				<div class="name line1" :style='{"padding":"0 0px","margin":"0 0 20px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.caipinfenlei}}</div>
				<div :style='{"float":"right","padding":"0 10px","display":"inline-block"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit","display":"none"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/c5239fbbb59c47209c3360cd84d4f1eb.png) no-repeat left center / 14px","display":"inline-block"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/767abf0505494bcbb3b56e13a414ec1c.png) no-repeat left center / 14px","display":"inline-block"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.storeupnum}}</span>
				</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	






	
	
	<div @click="moreBtn('caipinxinxi')" :style='{"border":"0px solid #1d8001","cursor":"pointer","margin":"32px auto","top":"0","textAlign":"center","left":"calc(7% + 400px)","background":"#fff","display":"block","width":"auto","lineHeight":"36px","textDecoration":"underline","position":"absolute"}'>
		<span :style='{"color":"#333","fontSize":"16px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"16px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listcaipinzixun" class="lists animate__animated" :style='{"width":"100%","padding":"20px 0 0","margin":"40px auto 20px","position":"relative","background":"#fff","order":"5"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"86%","margin":"0px auto","lineHeight":"60px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231006/53e70b77fda2495f9e803a7eca8d56c1.png) no-repeat 520px center"}'>
	  <span :style='{"padding":"0","fontSize":"50px","color":"#1e3c4f","fontWeight":"600","display":"block","font":"\"宋体\""}'>菜品资讯展示</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"padding":"0 7%","margin":"40px 0 0","color":"#999","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","fontSize":"14px","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"cursor":"pointer","boxShadow":"1px 2px 9px #ccc","padding":"10px","margin":"0 0 30px","background":"none","display":"flex","width":"49%","fontSize":"0","position":"relative","height":"auto"}' v-for="(item,index) in caipinzixunList" class="list-item animation-box" :key="index" @click="toDetail('caipinzixunDetail', item)">
			<img :style='{"width":"40%","objectFit":"cover","display":"inline-block","height":"400px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
			<img :style='{"width":"40%","objectFit":"cover","display":"inline-block","height":"400px"}' v-else :src="baseUrl +  (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div :style='{"width":"60%","padding":"100px 60px","overflow":"hidden","background":"none","display":"inline-block","height":"400px"}' class="item-info">
				<div class="name line1" :style='{"padding":"0 0px","margin":"0 0 20px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.biaoti}}</div>
				<div class="name line1" :style='{"padding":"0 0px","margin":"0 0 20px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis"}'>{{item.caipinfenlei}}</div>
				<div :style='{"float":"right","padding":"0 10px","display":"inline-block"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit","display":"none"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/c5239fbbb59c47209c3360cd84d4f1eb.png) no-repeat left center / 14px","display":"inline-block"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0 0 0 22px","margin":"0 10px 0 0","background":"url(http://codegen.caihongy.cn/20231007/767abf0505494bcbb3b56e13a414ec1c.png) no-repeat left center / 14px","display":"inline-block"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"14px","color":"inherit","display":"none"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"14px"}'>{{item.storeupnum}}</span>
				</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	






	
	
	<div @click="moreBtn('caipinzixun')" :style='{"border":"0px solid #1d8001","cursor":"pointer","margin":"32px auto","top":"0","textAlign":"center","left":"calc(7% + 400px)","background":"#fff","display":"block","width":"auto","lineHeight":"36px","textDecoration":"underline","position":"absolute"}'>
		<span :style='{"color":"#333","fontSize":"16px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"16px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        systemIntroductionDetail: {},
        queryList:[
          {
              queryName:"菜品名称",
          },
        ],
        queryIndex: 0,
        caipinxinxicaipinmingcheng: '',
        newsList: [],
        caipinxinxiRecommend: [],

        caipinxinxiList: [],
        caipinzixunList: [],




      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getSystemIntroduction();
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__'},
				{id:'about',css:'animate__'},
				{id:'system',css:'animate__'},
				{id:'animate_recommendcaipinxinxi',css:'animate__'},
				{id:'animate_listcaipinxinxi',css:'animate__'},
				{id:'animate_listcaipinzixun',css:'animate__'},
				{id:'animate_newsnews',css:'animate__'},
				{id:'msgs',css:'animate__'},
				{id:'friendly',css:'animate__'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
      search(tablename) {
        if (this.queryIndex == 0 && this.caipinxinxicaipinmingcheng) {
          this.$router.push({path: '/index/' + tablename, query: {indexQueryCondition: this.caipinxinxicaipinmingcheng}});
        }
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 4,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "caipinxinxi/autoSort";
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.caipinxinxiRecommend = res.data.data.list;
					
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":false,"slidesPerView":5,"speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper('#recommendcaipinxinxi', options)
					})
					
					// 商品列表样式五
					
				}
			});
			
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('caipinxinxi/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.caipinxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('caipinzixun/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.caipinzixunList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 2px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 32px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 2px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 280px;
			font-size: 14px;
			height: 32px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: #0c5f62;
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: #0c5f62;
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
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
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(0.96) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
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
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(0.96) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	










</style>
