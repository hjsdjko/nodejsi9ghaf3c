<template>
	<div class="main-content" :style='{"minHeight":"calc(100vh - 200px)","padding":"0px 5%","margin":"0 auto","color":"#666","background":"none","width":"calc(100% - 0px)","fontSize":"14px","height":"100%"}'>
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"padding":"20px 20px 0","boxShadow":"0 2px 3px 0px rgba(100,100,100,.05)","margin":"0 0 0px","borderColor":"#f6f6f6","display":"flex","justifyContent":"center","minHeight":"100px","overflow":"hidden","borderRadius":"4px 4px 0 0","flexWrap":"wrap","background":"#fff","borderWidth":"2px 2px 0","fontSize":"inherit","borderStyle":"solid"}' :inline="true" :model="searchForm">
				<el-row :style='{"padding":"0px","boxShadow":"0 0px 0px 0px rgba(115,108,203,.23)","margin":"0 0px 0px 0","borderRadius":"0px","alignItems":"center","background":"none","display":"flex","width":"auto","fontSize":"inherit","justifyContent":"flex-end","order":"2"}' >
					<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","display":"inline-block"}'>
						<label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"34px","fontSize":"inherit","fontWeight":"500","height":"34px"}' class="item-label">用户名</label>
						<el-input v-model="searchForm.username" placeholder="用户名" @keydown.enter.native="search()" clearable></el-input>
					</div>
					<el-button class="search" type="success" @click="search()">
						<span class="icon iconfont icon-chakan18" :style='{"margin":"0 2px","fontSize":"18px","color":"#00acc1","display":"inline-block","height":"auto"}'></span>
						查询
					</el-button>
				</el-row>

				<el-row class="actions" :style='{"boxShadow":"0 0px 0px 0px rgba(115,108,203,.23)","padding":"0 20px 0 0","margin":"0px 0 0px","color":"#333","alignItems":"center","textAlign":"left","display":"flex","borderRadius":"0px","flexWrap":"wrap","background":"none","flex":"1","width":"auto","fontSize":"inherit","order":"1"}'>
					<el-button class="add" v-if="isAuth('users','新增')" type="success" @click="addOrUpdateHandler()">
						<span class="icon iconfont icon-tianjia14" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span>
						新增
					</el-button>
					<el-button class="del" v-if="isAuth('users','删除')" :disabled="dataListSelections.length?false:true" type="danger" @click="deleteHandler()">
						<span class="icon iconfont icon-shanchu9" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span>
						删除
					</el-button>



				</el-row>
			</el-form>
			<div :style='{"padding":"20px","borderColor":"#f6f6f6","margin":"0 0 0px","borderRadius":"0 0 4px 4px","background":"rgba(255,255,255,1)","borderWidth":"0 2px 2px","width":"100%","borderStyle":"solid"}'>
				<el-table class="tables"
					:stripe='false'
					:style='{"padding":"0","borderColor":"#eee","color":"inherit","borderRadius":"0px","borderWidth":"0px 0px 0 0px","background":"none","width":"100%","fontSize":"inherit","borderStyle":"solid"}' 
					:border='true'
					v-if="isAuth('users','查看')"
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='true' label="序号" type="index" width="50" />
					<el-table-column :resizable='true' :sortable='true'  
						prop="username"
						label="用户名">
						<template slot-scope="scope">
							{{scope.row.username}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="role"
						label="角色">
						<template slot-scope="scope">
							{{scope.row.role}}
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button class="view" v-if=" isAuth('users','查看')" type="success" @click="addOrUpdateHandler(scope.row.id,'info')">
								<span class="icon iconfont icon-chakan8" :style='{"margin":"0 0 0 4px","fontSize":"inherit","color":"inherit","display":"none","height":"auto"}'></span>
								详情
							</el-button>
							<el-button class="edit" v-if=" isAuth('users','修改') " type="success" @click="addOrUpdateHandler(scope.row.id)">
								<span class="icon iconfont icon-xiugai19" :style='{"margin":"0 0 0 4px","fontSize":"inherit","color":"inherit","display":"none","height":"auto"}'></span>
								更改
							</el-button>

							<el-button class="view" v-if="isAuth('users','查看评论')" type="success" @click="disscussListHandler(scope.row.id)">
								<span class="icon iconfont icon-chakan8" :style='{"margin":"0 0 0 4px","fontSize":"inherit","color":"inherit","display":"none","height":"auto"}'></span>
								查看评论
							</el-button>



							<el-button class="del" v-if="isAuth('users','删除') " type="primary" @click="deleteHandler(scope.row.id )">
								<span class="icon iconfont icon-shanchu16" :style='{"margin":"0 0 0 4px","fontSize":"inherit","color":"inherit","display":"none","height":"auto"}'></span>
								移除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<el-pagination
				@size-change="sizeChangeHandle"
				@current-change="currentChangeHandle"
				:current-page="pageIndex"
				background
				:page-sizes="[10, 50, 100, 200]"
				:page-size="pageSize"
				:layout="layouts.join()"
				:total="totalPage"
				prev-text="上一页 "
				next-text="下一页 "
				:hide-on-single-page="false"
				:style='{"border":"0px solid #dee2e6","padding":"10px 0","margin":"10px 0 0","whiteSpace":"nowrap","color":"inherit","textAlign":"center","background":"none","width":"100%","fontSize":"inherit","fontWeight":"500"}'
			></el-pagination>
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>





	</div>
</template>

<script>
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
	export default {
		data() {
			return {
				searchForm: {
					key: ""
				},
				form:{},
				dataList: [],
				pageIndex: 1,
				pageSize: 10,
				totalPage: 0,
				dataListLoading: false,
				dataListSelections: [],
				showFlag: true,
				sfshVisiable: false,
				shForm: {},
				chartVisiable: false,
				chartVisiable1: false,
				chartVisiable2: false,
				chartVisiable3: false,
				chartVisiable4: false,
				chartVisiable5: false,
				addOrUpdateFlag:false,
				layouts: ["prev","pager","next"],
			};
		},
		created() {
			this.init();
			this.getDataList();
			this.contentStyleChange()
		},
		mounted() {
		},
		filters: {
			htmlfilter: function (val) {
				return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
			}
		},
		computed: {
			tablename(){
				return this.$storage.get('sessionTable')
			},
		},
		components: {
			AddOrUpdate,
		},
		methods: {
			contentStyleChange() {
				this.contentPageStyleChange()
			},
			// 分页
			contentPageStyleChange(){
				let arr = []

				// if(this.contents.pageTotal) arr.push('total')
				// if(this.contents.pageSizes) arr.push('sizes')
				// if(this.contents.pagePrevNext){
				//   arr.push('prev')
				//   if(this.contents.pagePager) arr.push('pager')
				//   arr.push('next')
				// }
				// if(this.contents.pageJumper) arr.push('jumper')
				// this.layouts = arr.join()
				// this.contents.pageEachNum = 10
			},






    init () {
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
      }
           if(this.searchForm.username!='' && this.searchForm.username!=undefined){
            params['username'] = '%' + this.searchForm.username + '%'
          }
			let user = JSON.parse(this.$storage.getObj('userForm'))
			console.log(user)
			this.$http({
				url: "users/page",
				method: "get",
				params: params
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.dataList = data.data.list;
					this.totalPage = data.data.total;
				} else {
					this.dataList = [];
					this.totalPage = 0;
				}
				this.dataListLoading = false;
			});
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 查看评论
    disscussListHandler(id,type) {
	this.$router.push({path:'/discussusers',query:{refid:id}});
    },
    // 下载
    download(file){
      let arr = file.replace(new RegExp('upload/', "g"), "")
      axios.get(this.$base.url + 'file/download?fileName=' + arr, {
      	headers: {
      		token: this.$storage.get('Token')
      	},
      	responseType: "blob"
      }).then(({
      	data
      }) => {
      	const binaryData = [];
      	binaryData.push(data);
      	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
      		type: 'application/pdf;chartset=UTF-8'
      	}))
      	const a = document.createElement('a')
      	a.href = objectUrl
      	a.download = arr
      	// a.click()
      	// 下面这个写法兼容火狐
      	a.dispatchEvent(new MouseEvent('click', {
      		bubbles: true,
      		cancelable: true,
      		view: window
      	}))
      	window.URL.revokeObjectURL(data)
      },err=>{
		  axios.get((location.href.split(this.$base.name).length>1 ? location.href.split(this.$base.name)[0] :'') + this.$base.name + '/file/download?fileName=' + arr, {
		  	headers: {
		  		token: this.$storage.get('Token')
		  	},
		  	responseType: "blob"
		  }).then(({
		  	data
		  }) => {
		  	const binaryData = [];
		  	binaryData.push(data);
		  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
		  		type: 'application/pdf;chartset=UTF-8'
		  	}))
		  	const a = document.createElement('a')
		  	a.href = objectUrl
		  	a.download = arr
		  	// a.click()
		  	// 下面这个写法兼容火狐
		  	a.dispatchEvent(new MouseEvent('click', {
		  		bubbles: true,
		  		cancelable: true,
		  		view: window
		  	}))
		  	window.URL.revokeObjectURL(data)
		  })
	  })
    },
	// 预览
	preClick(file){
		if(!file){
			return false
		}
		window.open((location.href.split(this.$base.name).length>1 ? location.href.split(this.$base.name)[0] + this.$base.name + '/' + file :this.$base.url + file))
	},
	usersstatusChange(e,row){
		if(row.status==0){
			row.passwordwrongnum = 0
		}
		this.$http({
			url:'users/update',
			method:'post',
			data:row
		}).then(res=>{
			if(row.status==1){
				this.$message.error('该用户已锁定')
			}else{
				this.$message.success('该用户已解除锁定')
			}
		})
	},
    // 删除
    async deleteHandler(id ) {
		var ids = id? [Number(id)]: this.dataListSelections.map(item => {
			return Number(item.id);
		});
		await this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
			confirmButtonText: "确定",
			cancelButtonText: "取消",
			type: "warning"
		}).then(async () => {
			await this.$http({
				url: "users/delete",
				method: "post",
				data: ids
			}).then(async ({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.search();
						}
					});
            
				} else {
					this.$message.error(data.msg);
				}
			});
		});
    },


  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 2px solid #f6f6f6;
				border-radius: 4px;
				padding: 0 12px;
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: 16px;
				height: 34px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 2px solid #f6f6f6;
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: 16px;
				height: 34px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 2px solid #f6f6f6;
				border-radius: 4px;
				padding: 0 10px 0 30px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: 16px;
				height: 34px;
			}
	
	.center-form-pv .search {
				border: 2px solid #00acc120;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px 0 4px;
				outline: none;
				color: #00acc1;
				background: none;
				width: auto;
				font-size: 16px;
				line-height: 30px;
				height: auto;
			}
	
	.center-form-pv .search:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .add {
				border: 0px solid #eee;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 4px 2px 2px;
				outline: none;
				color: #fff;
				background: #00acc1;
				width: auto;
				font-size: inherit;
				min-width: 66px;
				height: 36px;
			}
	
	.center-form-pv .actions .add:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .del {
				border: 0px solid rgba(244,100,130,.3);
				cursor: pointer;
				padding: 0 10px;
				margin: 4px 2px 2px;
				color: #fff;
				font-size: inherit;
				border-radius: 3px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #00acc1;
				width: auto;
				min-width: 66px;
				height: 36px;
			}
	
	.center-form-pv .actions .del:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .statis {
				border: 0px solid rgba(244,100,130,.3);
				cursor: pointer;
				padding: 0 10px;
				margin: 4px 2px 2px;
				color: #fff;
				font-size: inherit;
				border-radius: 3px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #00acc1;
				width: auto;
				min-width: 66px;
				height: 36px;
			}
	
	.center-form-pv .actions .statis:hover {
				opacity: 0.8;
			}
	
	.center-form-pv .actions .btn18 {
				border: 0px solid rgba(244,100,130,.3);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 10px;
				margin: 4px 2px 2px;
				outline: none;
				color: #fff;
				background: #00acc1;
				width: auto;
				font-size: inherit;
				min-width: 66px;
				height: 36px;
			}
	
	.center-form-pv .actions .btn18:hover {
				opacity: 0.8;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: inherit;
				background: rgba(254,169,34,0);
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 6px 0;
				background: none;
				border-color: #dee2e6;
				border-width: 1px 0px 2px 0;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				color: #8e99a2;
				white-space: normal;
				font-weight: 600;
				display: inline-block;
				vertical-align: middle;
				font-size: 14px;
				line-height: 24px;
				text-overflow: ellipsis;
				word-break: break-all;
				width: 100%;
				position: relative;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				padding: 0;
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 4px 0 0;
				color: #8e99a2;
				background: #fff;
				font-size: inherit;
				border-color: #dee2e6;
				border-width: 0 0px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 4px 0 0;
				color: #8e99a2;
				background: #fff;
				border-color: #dee2e6;
				border-width: 0 0px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 4px 0 0;
				color: #8e99a2;
				background: #fff;
				font-size: inherit;
				border-color: #dee2e6;
				border-width: 0 0px 1px 0px;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				color: inherit;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view {
				cursor: pointer;
				padding: 0px 10px;
				margin: 0 2px 5px 0;
				color: #fff;
				font-size: inherit;
				border-color: #fff;
				line-height: 26px;
				border-radius: 4px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #00acc1;
				width: auto;
				border-width: 0px;
				border-style: solid;
				min-width: 55px;
				height: auto;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view:hover {
				border-color: #23b7e5;
				border-width: 0px;
				opacity: 0.8;
				border-style: solid;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .add {
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .add:hover {
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit {
				cursor: pointer;
				padding: 0 10px;
				margin: 0 2px 5px 0;
				color: #fff;
				font-size: inherit;
				border-color: #fff;
				line-height: 26px;
				border-radius: 4px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #00acc1;
				width: auto;
				border-width: 0px;
				border-style: solid;
				min-width: 55px;
				height: auto;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit:hover {
				border-color: #45B6B0;
				border-width: 0px;
				opacity: 0.8;
				border-style: solid;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del {
				cursor: pointer;
				padding: 0 10px;
				margin: 0 2px 5px 0;
				color: #fff;
				font-size: inherit;
				border-color: #fff;
				line-height: 26px;
				border-radius: 4px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #4b88e4;
				width: auto;
				border-width: 0px;
				border-style: solid;
				min-width: 55px;
				height: auto;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del:hover {
				border-color: #d9534f;
				border-width: 0px;
				opacity: 0.8;
				border-style: solid;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .btn8 {
				cursor: pointer;
				padding: 0 10px;
				margin: 0 2px 5px 0;
				color: #fff;
				font-size: inherit;
				border-color: #fff;
				line-height: 26px;
				border-radius: 4px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: #4b88e4;
				width: auto;
				border-width: 0px;
				border-style: solid;
				min-width: 55px;
				height: auto;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .btn8:hover {
				border-color: #666;
				border-width: 0px;
				opacity: 0.8;
				border-style: solid;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: inherit;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: 1px solid #dee2e6;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 2px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: 18px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: 1px solid #dee2e6;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 2px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: 18px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: 1px solid #dee2e6;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 2px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: 18px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: 1px solid #dee2e6;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 2px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: 18px;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				border: 1px solid #dee2e6;
				padding: 0 4px;
				margin: 0 2px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				border-radius: 4px;
				padding: 0 4px;
				margin: 0 5px;
				color: #333;
				background: #e9ecef;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				border: 1px solid #dee2e6;
				padding: 0 4px;
				margin: 0 2px;
				color: #333;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				border-radius: 4px;
				background: #e9ecef;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				color: inherit;
				width: 100px;
				font-size: inherit;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 0px solid #ddd;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: none;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				color: inherit;
				display: inline-block;
				width: 50px;
				font-size: inherit;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 0 0px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 24px;
				border-radius: 3px;
				outline: 0;
				background: #fff;
				width: auto;
				text-align: center;
				height: 24px;
			}
	
	// list one
	.one .list1-view {
				cursor: pointer;
				padding: 0 8px 0 0px;
				margin: 0px 5px 5px 0;
				color: #23b7e5;
				font-size: inherit;
				border-color: #fff;
				line-height: 24px;
				border-radius: 20px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: none;
				width: auto;
				border-width: 1px;
				border-style: double;
				min-width: 40px;
				height: 24px;
			}
	
	.one .list1-view:hover {
				border-color: #23b7e5;
				border-width: 1px;
				opacity: 0.8;
				border-style: solid;
			}
	
	.one .list1-edit {
				cursor: pointer;
				padding: 0 8px 0 0px;
				margin: 0px 5px 5px 0;
				color: #45B6B0;
				font-size: inherit;
				border-color: #fff;
				line-height: 24px;
				border-radius: 20px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: none;
				width: auto;
				border-width: 1px;
				border-style: double;
				min-width: 40px;
				height: 24px;
			}
	
	.one .list1-edit:hover {
				border-color: #45B6B0;
				border-width: 1px;
				opacity: 0.8;
				border-style: solid;
			}
	
	.one .list1-del {
				cursor: pointer;
				padding: 0 8px 0 0px;
				margin: 0px 5px 5px 0;
				color: #d9534f;
				font-size: inherit;
				border-color: #fff;
				line-height: 24px;
				border-radius: 20px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: none;
				width: auto;
				border-width: 1px;
				border-style: solid;
				min-width: 40px;
				height: 24px;
			}
	
	.one .list1-del:hover {
				border-color: #d9534f;
				border-width: 1px;
				opacity: 0.8;
				border-style: solid;
			}
	
	.one .list1-btn8 {
				cursor: pointer;
				padding: 0 8px 0 0px;
				margin: 0px 5px 5px 0;
				color: #333;
				font-size: inherit;
				border-color: #fff;
				line-height: 24px;
				border-radius: 20px;
				box-shadow: inset 0px 0px 0px 0px rgba(244,100,130,.3);
				outline: none;
				background: none;
				width: auto;
				border-width: 1px;
				border-style: solid;
				min-width: 40px;
				height: 24px;
			}
	
	.one .list1-btn8:hover {
				border-color: #333;
				border-width: 1px;
				opacity: 0.8;
				border-style: solid;
			}
	
	.main-content .el-table .el-switch {
				display: inline-flex;
				vertical-align: middle;
				line-height: 30px;
				position: relative;
				align-items: center;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__label--left {
				cursor: pointer;
				margin: 0 10px 0 0;
				color: #333;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				font-size: 16px;
				transition: .2s;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__label--right {
				cursor: pointer;
				margin: 0 0 0 10px;
				color: #333;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				font-size: 16px;
				transition: .2s;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__core {
				border: 1px solid #ceddee;
				cursor: pointer;
				border-radius: 15px;
				margin: 0;
				outline: 0;
				background: #ceddee;
				display: inline-block;
				width: 50px;
				box-sizing: border-box;
				transition: border-color .3s,background-color .3s;
				height: 24px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__core::after {
				border-radius: 100%;
				top: 1px;
				left: 1px;
				background: #fff;
				width: 20px;
				position: absolute;
				transition: all .3s;
				height: 20px;
			}
	.main-content .el-table .el-switch.is-checked /deep/ .el-switch__core::after {
				margin: 0 0 0 -27px;
				left: 100%;
			}
	
	.main-content .el-table .el-rate /deep/ .el-rate__item {
				cursor: pointer;
				display: inline-block;
				vertical-align: middle;
				font-size: 0;
				position: relative;
			}
	.main-content .el-table .el-rate /deep/ .el-rate__item .el-rate__icon {
				margin: 0 3px;
				color: #c0c4cc;
				display: inline-block;
				font-size: 18px;
				position: relative;
				transition: .3s;
			}
</style>
