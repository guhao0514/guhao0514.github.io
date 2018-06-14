/*接口管理文档*/

/*var address="http://192.168.86.116:8388/";*/
/*var address="http://scrm.zimeitang.cn/";*/
/*var address="http://scrm.zimeitang.cn/";*/
/*192.168.86.244:8080 力普明*/
var address1 = address = addressJr = addressD = addressC = addressCJ = addressCy = addressSrc = addressLpm = addressWzh = addressYH = "http://192.168.86.116:8388/";
var meetaoMALL = 'http://yxboss.meetao.com/'; //商城
var zmtSolr = 'http://solr.meetao.com/zmt-solr/'; //振铭
/*var address = 'http://192.168.86.236:8080/'; //本地服务*/

var SERVICE = {

    //newcrm
    /*资产管理-最新*/
    "saveFortuneWechatInfo": "api/fortuneWechatController/saveFortuneWechatInfo", //添加微信号信息
    "queryWechatInfo": "api/fortuneWechatController/queryWechatInfo", //查询微信号信息--厉
    "updateFortuneWechatInfo": "api/fortuneWechatController/updateFortuneWechatInfo", //编辑微信号信息--厉
    "updateFortuneWechatDelStatus": "api/fortuneWechatController/updateFortuneWechatDelStatus", //删除微信号信息--厉
    "queryWechatChangeLog": "api/fortuneWechatController/queryWechatChangeLog", //查询微信号变更日志--厉
    "queryUserName": "api/fortuneWechatController/queryUserName", //查询使用者信息--厉
    "updateUserOfWechatInfo": "api/fortuneWechatController/updateUserOfWechatInfo", //修改使用者--厉
    "takeBackWechat": "api/fortuneWechatController/takeBackWechat", //收回微信号--厉
    "updateFortuneWechatPwd": "api/fortuneWechatController/updateFortuneWechatPwd", //修改微信号的登录密码--厉
    "updateFortuneWechatHKPhone": "api/fortuneWechatController/updateFortuneWechatHKPhone", //修改微信号的绑定手机--厉
    "queryPhoneByIMEI": "api/fortuneWechatController/queryPhoneByIMEI", //通过IMEI号查询手机信息--厉
    "updateFortuneWechatByPhone": "api/fortuneWechatController/updateFortuneWechatByPhone", //换登手机--厉
    "changePhoneSimcard": "api/assetsPhone/changePhoneSimcard", //绑定手机和卡（然）
    "getCardNoForBand": "api/assetsPhone/getCardNoForBand", //通过卡号查询卡号（然）
    "queryPhoneLocation": "api/assetsPhone/queryPhoneLocation", //查询空余机房位置（然）
    "addNewPhone": "api/assetsPhone/addNewPhone", //查询空余机房位置（然）
    "queryPhone": "api/assetsPhone/queryPhone", //手机设备查询（然）
    "deletePhone": "api/assetsPhone/deletePhone", //删除手机（然）
    "queryPhoneLog": "api/assetsPhone/queryPhoneLog", //查询手机操作历史（然）
    "querySaleNumber": "api/assetsPhone/querySaleNumber", //模糊查询微信号（然）
    "rechangeWechatPhone": "api/assetsPhone/rechangeWechatPhone", //微信换登手机（然）
    "getOrgInfo": "api/assetsPhone/getOrgInfo", //获取使用者信息（然）
    "updateOrgInfo": "api/assetsPhone/updateOrgInfo", //修改使用者（然）
    "queryWechatAllOrg": "api/fortuneWechatController/queryWechatAllOrg", //查询微信号综合管理--厉
    "exportWechatAllOrgData": "api/fortuneWechatController/exportWechatAllOrgData", //导出微信号综合管理---厉
    "queryPhoneTable": "api/assetsPhone/queryPhoneTable", //查询手机列表（然）
    "exportPhoneTable": "api/assetsPhone/exportPhoneTable", //导出手机列表（然）
    "querySimCardTable": "api/assetsPhone/querySimCardTable", //查询手机卡（然）
    "exportSimCardTable": "api/assetsPhone/exportSimCardTable", //导出流量卡（然）
    "importSimCards": "api/assetsPhone/importSimCards", //流量卡导入功能（然）
    "importRecharge": "api/assetsPhone/importRecharge", //批量充值（然）
    "downloadSimcardTemplate": "api/assetsPhone/downloadSimcardTemplate", //下载流量卡模板（然）
    "queryFortunePhoneLocation": "api/fortuneWechatController/queryFortunePhoneLocation", //查询方位--厉
    "saveFortunePhoneLocationInfo": "api/fortuneWechatController/saveFortunePhoneLocationInfo", //添加方位号--厉
    "delFortunePhoneLocation": "api/fortuneWechatController/delFortunePhoneLocation", //删除不使用的方位号--厉
    "queryRentBrowLogTable": "api/assetsPhone/queryRentBrowLogTable", //查询租借记录（然）
    "exportRentTable": "api/assetsPhone/exportRentTable", //导出租借记录报表（然）
    "queryFortuneDictByPid": "api/fortuneWechatController/queryFortuneDictByPid", //通过PID查询字典列表--厉
    "saveFortuneDictInfo": "api/fortuneWechatController/saveFortuneDictInfo", //添加字典值--厉
    "updateFortuneDictStatus": "api/fortuneWechatController/updateFortuneDictStatus", //删除字典值--厉
    "updateFortuneDictInfo": "api/fortuneWechatController/updateFortuneDictInfo", //修改字典值--厉
    //充值记录
    "queryRechargeRecord": "api/vipcard/queryRechargeRecord", //查询会员卡充值记录（然）
    "exportRechargeRecord": "api/vipcard/exportRechargeRecord", //查询会员卡充值记录（然）

    //消费记录
    "queryVipCustomerInfoList": "api/vipCardController/queryVipCustomerInfoList", //根据手机号查询会员卡-消费情况-消費記錄--厉
    "exportVipCustomerInfoList": "api/vipCardController/exportVipCustomerInfoList", //导出会员卡消费记录--厉
    //客户变更申请
    "listUpdateCustomerMobileCheck": "api/customerAPI/listUpdateCustomerMobileCheck", //查询变更客户手机号审核记录接口（丁）
    "checkUpdateCustomerMobile": "api/customerAPI/checkUpdateCustomerMobile", //审核变更客户手机号请求接口（丁）
    "revokeUpdateCustomerMobile": "api/customerAPI/revokeUpdateCustomerMobile", //撤回变更客户手机号请求接口（丁）
    //新权限管理
    "saveOrUpdateAuth": "api/scAuth/saveOrUpdateAuth", //新增/修改权限--厉
    "updateAuthStatus": "api/scAuth/updateAuthStatus", //删除
    "updateAuthOfChangeParent": "api/scAuth/updateAuthOfChangeParent", //移动
    "queryAuthByLogin": "api/scAuth/queryAuthByLogin", //通过登录者不同的权限获取不同的权限 --厉
    //待办统计
    "querySaleStatisticsTodoInfo": "api/saleStatisticsTodoDataController/querySaleStatisticsTodoInfo", //查询待办统计数据--厉
    "queryStatisticsOfNohaveInfo": "api/saleStatisticsTodoDataController/queryStatisticsOfNohaveInfo", //通过记录时间查询没有的信息--厉
    "querySaleTodoInterruptLogDetailSaleId": "api/saleStatisticsTodoDataController/querySaleTodoInterruptLogDetailSaleId", //查询销售中断记录明细
    "queryUnServiceCustomerRecords": "api/saleServiceReport/queryUnServiceCustomerRecords", //日服务报表查询未承接、未服务、打招呼未回复客户记录接口

    //新首页-销售
    "getFansInfoAndTodoInfo": "api/fansInfoAndTodoInfoOfHomePage/getFansInfoAndTodoInfo", //粉丝信息 和 待办信息--厉
    "queryOrderExpressInfoByOrderId": "api/saleRecord/queryOrderExpressInfoByOrderId", //根据订单号查询物流信息接口（丁）
    "queryDetailInfo": "api/fansInfoAndTodoInfoOfHomePage/queryDetailInfo", //所有的明细--厉
    //每日工作监控
    "queryEmployeeFansAndTodoInfo": "api/fansInfoAndTodoInfoOfHomePage/queryEmployeeFansAndTodoInfo", //每日工作监控--厉

    //部门人员管理
    "queryDeptInfoByIdOrDeptName": "api/scDeptAndSalerController/queryDeptInfoByIdOrDeptName", //通过部门Id或部门名称查询部门的相关信息--厉
    "saveOrUpdateDeparment": "api/scDeptAndSalerController/saveOrUpdateDeparment", //添加 或者修改部门相关信息--厉
    "queryEmployeeInfoByDeptIdOrEmployeeName": "api/scDeptAndSalerController/queryEmployeeInfoByDeptIdOrEmployeeName", //查询部门下的所有成员--厉
    "saveOrUpdateEmployee": "api/scDeptAndSalerController/saveOrUpdateEmployee", //新增/修改/删除销售人员--厉
    "updateDepartment": "api/scDeptAndSalerController/updateDepartment", //变更直属部门--厉

    


    
    
    
   
    

    
    
    

    
    
    
    
    
    
    

    
    


    //wangd
    "addRecordClaim": "api/saleRecordClaim/addRecordClaim", //认领订单
    "getRecordClaim": "api/saleRecordClaim/getRecordClaim", //查询订单
    "messageList": "admin/messageList", //聊天记录
    "allContactsList": "admin/allContactsList", //查通讯录
    "contactList": "admin/contactList", //查通讯录(按时间查询)
    "wechatList": "admin/wechatList", //查微信号
    "labelTree": "api/ucTag/getTreeUcTag", //查询标签类型树状列表以及标签
    "addTag": "api/ucTag/operateUcTagCategory", //新增标签分类
    "addLabel": "api/ucTag/operateUcTag", //新增标签
    "deptTree": "api/scDepartment/getTreeScDepartment", //只查询部门树状结构数据
    "addDept": "api/scDepartment/operateScDepartment", //新增部门
    "updateDept": "api/scDepartment/operateScDepartment", //修改部门
    "personTree": "api/scDepartment/getTreeScDepartmentEmployee", //查找人员树
    "group": "api/scEmployee/selectScEmployee", //查询人员分组
    "addCurrent": "api/scEmployee/operateScEmployee", //修改人员信息
    "permiseTree": "api/scAuth/getTreeScAuth", //权限树
    "addPermise": "api/scAuth/operateScAuth", //新增权限
    "updatePermise": "api/scAuth/operateScAuth", //修改权限
    "addCustomers": "api/customer/info/save", //新增客户
    "searchCustomer": "api/claimCustomer/query", //查询导入客户接口
    "claimCustomers": "api/claimCustomer/claim", //认领客户接口
    "addCustomer": "api/claimCustomer/addFriends", //添加好友接口
    "pushCustomer": "api/pushCustomer/pushCustomer", //上推客户接口
    "listPushCustomers": "api/pushCustomer/listPushCustomers", //查询上推客户接口,包括上推给我，我的上推，组员上推查询
    "claimCustomer": "api/pushCustomer/claimCustomer", //认领上推客户接口
    "refuseCustomer": "api/pushCustomer/refuseCustomer", //拒绝上推客户接口
    "uploadImg": "api/img/uploadWithThumbImg", //上传图片
    "saleNoDel": "api/saleNumber/removeSaleNumber", //删除销售号接口
    "saleNoSearch": "api/saleNumber/listSaleNumberInfos", //查询销售号列表接口，包含销售号其他信息
    "saleNoFenPei": "api/saleNumber/allotSaleNumber", //分配销售号接口
    "saleNoGet": "api/saleNumber/getSaleNumber", //查询销售号接口
    "saleNoSave": "api/saleNumber/saveSaleNumber", //保存销售号接口
    "saleNoSearchPeople": "api/saleNumber/getEmployeeSaleNumber", //查询人员销售号接口，在分配销售号前，按照人名查询待分配人员的信息
    "saleNoType": "api/saleNumber/listSaleNumberTypes", //查询销售号号属性接口
    "searchWeight": "api/scConfig/pageScConfig", //分页查询销售占有客户数权重
    "updateWeight": "api/scConfig/updateScSeller", //修改权重
    "login": "api/login/doLogin", //登录接口
    "loginConfig": "api/login/listMyAuths", //查询当前登录人的菜单权限接口
    "orderSearch": "api/saleRecord/queryRecordOrders", //我的业绩订单明细查询接口
    "baseType": "api/claimCustomer/listCustomerCategories", //客户基本类型
    "savePwd": "api/login/updatePWD", //修改登录密码接口
    "searchChangeSale": "api/customer/listChangeSaleNumberCustomers", //查询变更销售号接口
    "saveChangeSale": "api/customer/updateCustomerBelongTo", //保存变更客户所属销售号
    "getSaleDepartment": "api/scDepartment/getSaleDepartment", //查询所有销售
    "pageAchievement": "api/saleRecord/pageAchievement", //查询业绩订单
    "updateAscription": "api/saleRecord/updateAscription", //修改归属
    "voidOrder": "api/saleRecord/operateRecord", //作废订单
    "selectMyOwnPlan": "api/saleWorkPlan/selectMyOwnPlan", //通过id和时间查询任务
    "agentInfoList": "api/agentInfo/agentInfoList", //查询授权信息
    "audit": "api/agentInfo/audit", //授权管理员操作
    "resetPwd": "api/scEmployee/resetLoginPWD", //重置密码
    "listOfflinePayOrderRecord": "api/dkxd/listOfflinePayOrderRecord", //查询待确认的线下转账支付记录接口
    "confirmOfflinePayOrderRecord": "api/dkxd/confirmOfflinePayOrderRecord", //确认线下转账支付记录接口
    "getOrderInfo": "api/orderAPI/getOrderInfo", //查询订单详细信息
    //设置业绩目标
    "queryWeekOfAllDayByDay": "api/achievementGoalController/queryWeekOfAllDayByDay", //根据给定的日期戳子查询出所在周
    "queryPersonWeekGoal": "api/achievementGoalController/queryPersonWeekGoal", //查询组员目标(厉)
    "insertMemberWeekGoal": "api/achievementGoalController/insertMemberWeekGoal", //添加组内成员的周（厉）
    "updateFirstWeekGoal": "api/achievementGoalController/updateFirstWeekGoal", //修改周目标和跨月表(厉)
    "insertPersonMonthGoal": "api/achievementGoalController/insertPersonMonthGoal", //添加组员的月目标（厉）
    "updateMemberWeekGoal": "api/achievementGoalController/updateMemberWeekGoal", //修改组内成员周目标
    "updateBossWeekGoal": "api/achievementGoalController/updateBossWeekGoal", //修改经理总监权限的周目标((厉)
    "queryUserAnalyseStatistic": "api/saleUserAnalyse/queryUserAnalyseStatistic", //用户来源统计查询
    "importExcel": "api/userFromStatistic/importExcel", //上传用户来源分析表
    "exportExcel": "api/saleUserAnalyse/exportExcel", //下载用户来源分析表
    "getSpecialTree": "api/ucTag/getSpecialTree", //点击“点击筛选”后，弹出的树状标签列表
    "queryMonth": "api/saleClientRateController/queryMonth", //横轴月的列表
    "querySaleCustomerKeepData": "api/saleClientRateController/querySaleCustomerKeepData", //查询用户留存表
    "exportSaleCustomerKeepData": "api/saleClientRateController/exportSaleCustomerKeepData", //导出
    "getReportForm": "api/ucTag/getReportForm", //用户标签表及其导出
    "getSaleDepartment": "api/scDepartment/getSaleDepartment",
    "getTreeDeptByEmployeeId": "api/scDepartment/getTreeDeptByEmployeeId",
    //首页
    "homePageLeader": "api/saleCustomerResource/homePageLeader",
    "getCustomerCounts": "api/saleCustomerResource/getCustomerCounts",
    "queryWordpressArticales": "api/saleCustomerResource/queryWordpressArticales",
    "getLastOrders": "api/saleCustomerResource/getLastOrders",
    "getNowAmount": "api/saleCustomerResource/getNowAmount",
    "queryTodayOrders": "api/saleCustomerResource/queryTodayOrders",
    "homePageTitle": "api/saleCustomerResource/homePageTitle",
    "getChatRedis": "api/saleCustomerResource/getChatRedis", //沟通数据
    "getSaleRank": "api/saleCustomerResource/getSaleRank",
    "getDeptRank": "api/saleCustomerResource/getDeptRank",
    "getPayTypes": "api/dkxd/getPayTypes", //查询订单的支付详情
    "getCackes": "api/saleCustomerResource/getCackes", //
    //数据结构表
    "getSaleDepartmentSaleNumber": "api/saleNumber/getSaleDepartmentSaleNumber", //查询部门、人员、销售号树状结构
    "queryCustomerLifeinfoCount": "api/saleCustomerLifeInfo/queryCustomerLifeinfoCount", //粉丝资源统表查询接口
    //质检认领订单
    "addRecordClaimForTheOne": "api/saleRecordClaim/addRecordClaimForTheOne", //认领订单
    "getRecordClaimForTheOne": "api/saleRecordClaim/getRecordClaimForTheOne", //查询订单
    "saveUncheckSaleRecordLog": "api/saleRecordClaim/saveUncheckSaleRecordLog", //认领订单判断其归属
    "listUncheckSaleRecordLog": "api/saleRecordClaim/listUncheckSaleRecordLog", //查询待审核业绩订单接口
    "checkSaleRecordLog": "api/saleRecordClaim/checkSaleRecordLog", //审核业绩订单接口
    "getUncheckSaleRecordInfo": "api/saleRecordClaim/getUncheckSaleRecordInfo", //查询待审核业绩订单详情接口
    "exportVipRemainderList": "api/vipCardController/exportVipRemainderList", //导出会员卡余额情况
    //退款
    'importRefundExcel': 'api/saleRecord/importRefundExcel', //上传退款excel
    'dowloadModo': 'api/saleRecord/dowloadModo', //下载模板
    'rollBackOrder': 'api/saleRecord/rollBackOrder', //普通订单退款
    'queryRefundRecord': 'api/saleRecord/queryRefundRecord', //查询退款订单分页列表
    'queryBatch': 'api/saleRecord/queryBatch', //查询退款成功失败的数量
    'exportRefundExcel': 'api/saleRecord/exportRefundExcel', //导出退款数据
    'getOrderDetail': 'api/saleRecord/getOrderDetail', //订单详情
    //标签（改版）
    'queryTagTree': 'api/tag/category/all/query', //查询标签
    'detailTagTree': 'api/tag/category/detail/query',
    'addCategory': 'api/tag/category/add', //新增一个分类
    'updateCategory': 'api/tag/category/update', //更新一个分类
    'removeCategory': 'api/tag/category/remove', //删除一个分类
    'addtag': 'api/tag/add', //新增一个标签
    'removetag': 'api/tag/remove', //删除一个标签


    //  jsl
    "reportFile": "api/userImport/importFormE", //客户导入excel接口
    "batchCode": "api/userImport/checkImportInfo", //客户导入确认回调
    "backlogList": "api/todo/query", //我的待办  查询
    "backlogTeam": "api/todo/query", //组员待办 同-我的待办
    "selectScRolesPage": "api/scRole/selectScRolesPage", //角色管理    角色分页/初始化查询
    "selectScEmployeeById": "api/scRole/selectScRolesPage", //编辑回显
    "operateScRole": "api/scRole/operateScRole", //新增保存接口   删除3 修改2  新增1
    "getTreeScAuth": "api/scAuth/getTreeScAuth", //新建加载的树
    "getProductsFromFemaleMall": "api/product/getProductsFromFemaleMall", //商城商品的列表
    "timeStr": "api/saleRecord/personAchievement", //我的业绩  超毅
    "timeStr2": "api/saleRecord/deptAchievement", //组员业绩   超毅
    "deptId": "api/scEmployee/listDeptEmployees", //部门下的人员列表
    "queryOrderFromOc": "api/saleRecord/claimOrder", //分配订单查询  超毅
    "queryByOuttidAndMobile": "api/order/queryByOuttidAndMobile", //分配订单查询  炜良
    "loginName": "api/scEmployee/selectScEmployeeByName", //分配订单人名搜索分配  贾然
    "getSellAndCustomer": "api/saleConfig/getSellAndCustomer", //销售等级对应客户等级关系--获取所有销售等级和会员等级
    "operateSellAndCustomer": "api/saleConfig/operateSellAndCustomer", //销售等级对应客户等级关系--修改客服和客户对应等级
    "selectSellAndCustomer": "api/saleConfig/selectSellAndCustomer", //销售等级对应客户等级关系--查询客服和客户的关联关系
    "pageWorkPlan": "api/saleWorkPlan/pageWorkPlan", //工作计划    查询组员工作计划
    "selectOwnPlan": "api/saleWorkPlan/selectOwnPlan", //工作计划    查询个人工作计划
    "newPlan": "api/saleWorkPlan/new", //新建计划/任务  陈杰
    "queryTeamLog": "api/saleWorkPlan/queryTeamLog", //组长 弹窗一
    "queryLog": "api/saleWorkPlan/queryLog", //弹窗一
    "queryRecords": "api/saleWorkPlan/queryRecords", //弹窗二
    "queryTeamRecords": "api/saleWorkPlan/queryTeamRecords", //组长 弹出二
    "updateTeam": "api/saleWorkPlan/update", //组员  保存
    "complete": "api/saleWorkPlan/complete", //个人  保存
    "logout": "api/login/logout", //退出
    "getIndexDatas": "api/cindex/getIndexDatas", //首页
    "query4Index": "api/todo/query4Index", //炜良 登陆小红圈
    "myAchievementId": "api/saleRecord/myAchievementId", //我的业绩  新增ID
    "selectPageGoodRateLog": "/api/goodRateLog/selectPageGoodRateLog", //好评返现记录
    "submitDKXDOrder": "api/dkxd/submitDKXDOrder", //代客下单 大保存
    "sendPaySmsCode": "api/dkxd/sendPaySmsCode", //代客下单短信验证
    "countRecordJudge": "api/saleCustomerRecord/countRecordJudge", //无效跟进数量
    "pageRecordJudge": "api/saleCustomerRecord/pageRecordJudge", //（贾）分页查询无效跟进记录
    "getVipCardAmount": "api/dkxd/getVipCardAmount", //(丁)代客下单查询手机号账户接口接口
    "sendUpdateAmountSmsCode": "api/dkxd/sendUpdateAmountSmsCode", //代客下单发送改价短信验证码接口
    "checkDKXDUpdateAmountSmsCode": "api/dkxd/checkDKXDUpdateAmountSmsCode", //校验代客下单改价短信验证码接口
    "listNoFriendCustomers": "api/userImport/listNoFriendCustomers", //客户导出 列表查询
    "exportNoFriendCustomers": "api/userImport/exportNoFriendCustomers", //客户导出 导出查询
    "checkNoFriendCustomersFile": "api/userImport/checkNoFriendCustomersFile", //查询导出文件是否生成接口
    "downloadNoFriendCustomersFile": 'api/userImport/downloadNoFriendCustomersFile', //下载导出文件接口
    "downExcel": "api/saleRecord/exportAchievementData", //业绩订单下载Excel地址
    "operateRecord": "api/saleRecord/operateRecord", //删除业绩订单 20170829
    "queryNextToDoTime": "api/timeOutToDoController/queryNextToDoTime", //我的客户回显时间
    "queryTeamGoalData": "api/achievementGoalController/queryTeamGoal", //查询目标（厉）
    "updateGoalData": "api/achievementGoalController/updateGoal", //修改目标（厉）
    "insertGoalData": "api/achievementGoalController/insertGoal", //添加目标（厉）
    "queryGoalUpdateLog": "api/achievementGoalController/queryGoalUpdateLog", //查询修改目标日志列表(厉)
    "queryBossDeptGoal": "api/achievementGoalController/queryBossDeptGoal", //获取登录者的部门以及部门的目标值（厉）
    "queryWeekOfMonth": "api/achievementGoalController/queryWeekOfMonth", //获取当前月的所有周
    //  xubing
    "listMyCustomers": "api/customer/listMyCustomers", //我的客户/组员客户-查询客户信息列表
    "listSaleNumbers": "api/saleNumber/listSaleNumbers", //我的客户/组员客户-销售号
    "detail": "api/customer/info/detail", //我的客户/组员客户-基本信息
    "update": "api/customer/info/update", //我的客户/组员客户-基本信息
    "queryByUniqueCode": "api/order/queryByUniqueCode", //我的客户/组员客户-订单信息
    "query": "api/saleCustomerRecord/query", //我的客户/组员客户-跟进信息
    "queryBySaleId": "api/todo/queryByUniqueCode", //我的客户/组员客户-待办信息
    "insert": "api/todo/insert", //我的客户-写待办
    "upload": "api/img/upload", //我的客户-图片上传
    "saleCustomerRecord": "api/saleCustomerRecord/insert", //我的客户-写跟进 
    "setCustomerTypeLost": "api/customer/setCustomerTypeLost", //我的客户-客户丢失
    "finishTodo": "api/todo/finishTodo", //我的客户-完成待办保存跟进接口 
    "selectUcTagCustomer": "api/ucTag/selectUcTagCustomer", //我的客户/组员客户-他的标签列表
    "getTreeUcTag": "api/ucTag/getTreeUcTag", //我的客户-查询某一级标签下所有二级、三级标签 
    "getFristUcType": "api/ucTag/getFristUcType", //我的客户-查询所有一级类  
    "operateUcTagCustomer": "api/ucTag/operateUcTagCustomer", //我的客户-保存标签
    "listDeptEmployees": "api/scEmployee/listDeptEmployees", //组员客户-组员动态获取   
    "operateScEmployee": "api/scEmployee/operateScEmployee", //人员管理-删除人员    
    "getAllRoles": "api/scRole/getAllRoles", //人员管理-角色
    "selectScEmployee": "api/scEmployee/selectScEmployee", //人员管理-人员列表 
    "selectSaleSellTime": "api/saleConfig/selectSaleSellTime", //配置-查询销售类型和关联周期
    "operateSaleSellTime": "api/saleConfig/operateSaleSellTime", //配置-修改销售类型和关联周期 
    "listCrmLoginLog": "api/loginLog/listCrmLoginLog", //查询登录日志
    "getTBOrderByTid": "api/goodRateLog/getTBOrderByTid", //好评返现
    "insertSaleGoodRateLog": "api/goodRateLog/insertSaleGoodRateLog", //好评返现保存
    "updateRcorde": "api/saleCustomerRecord/updateRcorde", //跟进记录设成无效  
    "checkUpdatePhoneTimes": "api/customer/checkUpdatePhoneTimes", //修改手机号次数限定
    "updateUserType": "api/customer/info/updateUserType", //修改客户的
    "insertOrder": "api/saleOrderByHands/insertOrder", //移动端申请下单接口
    "selectSaleOrder": "api/saleOrderByHands/selectSaleOrder", //订单查询接口
    "updateOrderByHandApplyStatus": "api/saleOrderByHands/updateOrderByHandApplyStatus", //订单查询修改状态接口
    "getMonthStatistics": "api/saleRecordChartStatistics/getMonthStatistics", //查询个人业绩统计
    "getGroupMonthStatistics": "api/saleRecordChartStatistics/getGroupMonthStatistics", //查询小组业绩统计
    "querySaleRecordByParams": "api/saleRecordStatistic/querySaleRecordByParams", //成交信息
    "ControllerqueryAchievementRankList": "api/rankListController/queryAchievementRankList", //业绩排行
    "queryPersonOrdersInGroup": "api/saleRecordStatistic/queryPersonOrdersInGroup", //所在小组业绩排行
    "queryGroupOrders": "api/saleRecordStatistic/queryGroupOrders", //战队小组排行
    "queryOrders": "api/saleRecordStatistic/queryOrders", //总销售业绩排行
    "getPkIndex": "api/salePk/getPkIndex", //查看pk相关信息
    "getPkResults": "api/salePk/getPkResults", //查询pk战绩
    "getDept": "api/salePk/getDept", //获取所有在pk范围内的小组
    "getBossList": "api/salePk/getBossList", //获取某组下可以pk的对象
    "addPk": "api/salePk/addPk", //确认挑战
    "queryTeamGoal": "api/achievementGoalController/queryTeamGoal", //确认挑战
    "checkUser": "api/achievementGoalController/checkUser", //核对登录人的角色
    "getWinCoin": "api/salePk/getWinCoin", //获取挑战奖励应该获得的积分数量
    "insertGoal": "api/achievementGoalController/insertGoal", //添加目标
    "queryGoal": "api/achievementGoalController/queryGoal", //查询具体目标
    "updateGoal": "api/achievementGoalController/updateGoal", //修改目标
    "employeeSeparation": "api/scEmployee/employeeSeparation", //人员离职接口   
    "listEffectiveZones": "api/scZone/listEffectiveZones", //查询有效部落数据列表接口
    "getEmployeeDetailInfo": "api/scEmployee/getEmployeeDetailInfo", //查询有效部落数据列表接口
    "updateHeadImgUrl": "api/scEmployee/updateHeadImgUrl", //员工上传头像接口

    //待办 
    "listSaleTodoInterruptLog": "api/todo/listSaleTodoInterruptLog", //中断待办者列表接口
    "queryToDoCheckList": "api/timeOutToDoController/queryToDoCheckList", //查询待办审核的列表
    "updateToDoCheck": "api/timeOutToDoController/updateToDoCheck", //修改待办审核
    "listSaleTodoPageData": "api/todo/listSaleTodoPageData", //查询业绩订单接口
    "updateCheckStatus": "api/timeOutToDoController/updateCheckStatus", //修改质检结果
    "updateFlag": "api/timeOutToDoController/updateFlag", //修改标记
    "queryNewFans": "api/timeOutToDoController/queryNewFans", //待办新粉不匹配
    "exportToDoFlagedData": "api/timeOutToDoController/exportToDoFlagedData", //导出被标记的待办列表
    "exportTimeoutUndoneTodo": "api/todo/exportTimeoutUndoneTodo", //导出超时未完成列表
    "exportQueryNewFans": "api/timeOutToDoController/exportQueryNewFans", //导出新粉不匹配
    "exportSaleTodoInterruptLog": "api/todo/exportSaleTodoInterruptLog", //导出待办中断者
    "updateSaleTodoInterruptLogFinishStatus": "api/todo/updateSaleTodoInterruptLogFinishStatus", //手动完成中断待办记录接口
    "getGoal": "api/salePk/getGoal", //判断即将pk的双方是否都已经设置了当日目标
    "finishSaleTodeByCheckman": "api/todo/finishSaleTodoByCheckman", //质检手动完成待办

    //复购率-转化率
    "queryDeptByParentId": "api/saleClientRateController/queryDeptByParentId", //查询部门
    "querySalerByDeptId": "api/saleClientRateController/querySalerByDeptId", //查询部门下的组员
    "queryConversion": "api/saleClientRateController/queryConversion", //查询转化率-对比
    "queryConversionPool": "api/saleClientRateController/queryConversionPool", //查询转化率-汇总
    "queryRepurchasePool": "api/saleClientRateController/queryRepurchasePool", //查询复购率-汇总
    "queryRepurchase": "api/saleClientRateController/queryRepurchase", //查询复购率-对比/
    "queryDeptId": "api/saleClientRateController/queryDeptId", //查询登录人部门id

    //业绩分析指标
    "queryNowAchievementGoal": "api/achievementGoalController/queryNowAchievementGoal", //查询目标业绩指标接口
    "querySaleCountData": "api/saleRecord/querySaleCountData", //查询销售业绩指标接口
    "queryBelongToAchievementGoal": "api/achievementGoalController/queryBelongToAchievementGoal", //查询管辖下属销售业绩指标接口
    "queryMyAuthDeptTree": "api/achievementGoalController/queryMyAuthDeptTree", //查询当前登录人对应的树形数据接口

    //历史业绩查询
    "queryHistoryAchievementGoal": "api/achievementGoalController/queryHistoryAchievementGoal", //查询历史销售业绩数据接口

    //日报表
    "querySaleReportDay": "api/saleClientRateController/querySaleReportDay", //查询日报表
    "exportSaleReportDayData": "api/saleClientRateController/exportSaleReportDayData", //导出日报表

    //分平台会员复购统计表
    "platformDictQuery": "api/common/platformDictQuery.jsonp", //平台接口
    "proCategoryQuery": "api/common/proCategoryQuery.jsonp", //产品大类接口
    "buyBackPlatformQuery": "api/client/buyBackPlatformQuery.jsonp", //数据查询接口
    "buyBackPlatformExcel": "api/client/buyBackPlatformExcel", //数据导出接口

    //粉丝转化表
    "queryBaseCategory": "api/saleClientRateController/queryBaseCategory", //查询用户对应的产品属性 
    "queryCustomerLifeInfo": "api/saleCustomerLifeInfo/queryCustomerLifeInfo", //查询客户转化数据接口  
    "exportCustomerLifeInfo": "api/saleCustomerLifeInfo/exportCustomerLifeInfo", //导出客户转化数据接口  
    "checkExportExcelFileStatus": "api/excel/checkExportExcelFileStatus", //查询导出文件是否生成接口
    "downloadExportFile": "api/excel/downloadExportFile", //下载导出文件

    //个人业绩旁行
    "queryAchievementRankList": "api/newRankListController/queryAchievementRankList", //个人业绩排行

    //会员卡
    "queryVipRemainderList": "api/vipCardController/queryVipRemainderList", //会员卡余额查询
    "queryVipRechargeList": "api/vipCardController/queryVipRechargeList", //会员卡充值记录
    "queryVipCustomerInfoList": "api/vipCardController/queryVipCustomerInfoList", //会员卡交易记录
    "queryDictValueListByDictType": "api/saleDict/queryDictValueListByDictType", //会员卡渠道
    "exportVipRechargeList": "api/vipCardController/exportVipRechargeList", //会员卡导出
    "clearVipcardAmount": "api/vipcard/clearVIPCardAmount", //清空会员卡余额

    //套餐查询
    "queryFortunePhonePriceList": "api/fortunePhonePriceController/queryFortunePhonePriceList", //套餐查询-销售 
    "insertFortunePhonePrice": "api/fortunePhonePriceController/insertFortunePhonePrice", //套餐查询-新增 
    "updateFortunePhonePrice": "api/fortunePhonePriceController/updateFortunePhonePrice", //套餐查询-修改 
    "importFortunePhonePrice": "api/fortunePhonePriceController/importFortunePhonePrice", //套餐查询-导入
    "checkImportInfo": "api/fortunePhonePriceController/checkImportInfo", //套餐查询-导入

    //资源表
    "customerResource": "api/saleCustomerResource/customerResource", //资源表查询
    //分类转化表 
    "getTypeChangeTable": "api/saleCustomerResource/getTypeChangeTable", //资源表查询

    //工作表   
    "customerAnalyseList": "webchat/customerAnalyseList", //资源表查询

    //销售业绩排行总榜     
    "getRankOfSale": "api/saleCustomerResource/getRankOfSale", //查询个人销售金额排行 
    "getRankOfDept": "api/saleCustomerResource/getRankOfDept", //查询小队和中队的销售金额排行 

    //
    "queryAllUniqueCodedCustomers": "api/customer/queryAllUniqueCodedCustomers", //通过手机号或者uniqueCode查询客户信息
    //案例上传
    "querySaleGoodByCategoryExampleDesc": "api/saleGoodExampleController/querySaleGoodByCategoryExampleDesc", //根据分类和描述查询列表
    "querySaleGoodByIdImgUrls": "api/saleGoodExampleController/querySaleGoodByIdImgUrls", //根据id查询上传图片  

    //获取当前登录人应跳转的首页
    "getRolePageUrl": "api/saleCustomerResource/getRolePageUrl", //获取当前登录人应跳转的首页

    //我的业绩排行
    "getRankInGroup": "api/saleCustomerResource/getRankInGroup", //个人排行榜页面-小组业绩排行
    "getRankInSgroup": "api/saleCustomerResource/getRankInSgroup", //个人排行榜页面-战队销售业绩排行
    "getRankInAll": "api/saleCustomerResource/getRankInAll", //个人排行榜页面-总销售业绩排行榜


    //新客户转化表
    "queryNewFansFirstBuyData": "api/saleClientRateController/queryNewFansFirstBuyData", //新客户转化表-查询
    "exportNewFansFirstBuyData": "api/saleClientRateController/exportNewFansFirstBuyData", //新客户转化表-导出


    //业绩报表
    "querySaleRecordStatisticsData": "api/saleRecordStatisticsDataController/querySaleRecordStatisticsData", //查询历史的业绩报表
    "querySaleRecordStatisticsDataByCurrentStatistics": "api/saleRecordStatisticsDataController/querySaleRecordStatisticsDataByCurrentStatistics", //查询历史的业绩报表

    "querySaleRecordStatisticsDataByCurrent": "api/saleRecordStatisticsDataController/querySaleRecordStatisticsDataByCurrent", //查询时时业绩报表--厉

    //加分数据处理
    "checkExcel": "api/twoAddUser/checkExcel", //加分数据处理-孟欣

    //业绩制定

    "checkHaveDid": "api/saleRecordStatistic/checkHaveDid", //判断目标是否设定（然）
    "setUpGoal": "api/saleRecordStatistic/setUpGoal", //设定目标（然）
    "saleQueryGoal": "api/saleRecordStatisticsDataController/queryGoal", // 本月目标获取
    "salequeryWeekOfAllDayByDay": "api/achievementGoalController/queryWeekOfAllDayByDay", // 获取当前时间
    "getPersonGoals": "api/saleRecordStatistic/getPersonGoals", // 查询小队成员的今日目标
    "isCurrentDate": "api/achievementGoalController/isCurrentDate", // 

    /*待办周期维护*/
    "queryTodoCycle": "api/todo/queryTodoCycle", // 代办周期回显
    "updateTodoCycle": "api/todo/updateTodoCycle", // 修改代办周期
    //日成交报表
    "querySalePayReport": "api/salePayReport/querySalePayReport", // 日成交报表查询
    "querySaleServiceReport": "api/saleServiceReport/querySaleServiceReport", // 日服务报表查询

    // 承接回复统计
    "queryUnServiceCustomerRecord": "api/saleServiceReport/queryUnServiceCustomerRecord", // 未承接与未回复客户记录
    


    //IM
    "changeImName": "api/scEmployee/updateImName"

}