import request from '~/utils/request'
import Vue from 'vue'
const api = {
//获取角色列表 liuyw
  GetRoleList(params) {
    return request.get('/Permission/GetRoleList', {params})
  },

// 新增角色。限当前机构。liuyw
  AddRole(params) {
    return request.post('/Permission/AddRole', params)
  },
//更新指定角色信息。限当前机构。 liuyw
  UpdateRole(params) {
    return request.post('/Permission/UpdateRole?roleId=' + params.roleId, params)
  },
//删除指定的角色。限当前机构 liuyw
  DeleteRole(params) {
    return request.get('/Permission/DeleteRole', {params})
  },
//获取指定的角色信息。限当前机构 liuy
  GetRole(params) {
    return request.get('/Permission/GetRole', {params})
  },
//获取指定角色的成员信息。限当前机构。 liuy
  GetRoleMembers(params) {
    return request.get('/Permission/GetRoleMembers', {params})
  },
//
// 更新指定角色的成员。限当前机构。限当前机构 liuyw
  UpdateRoleMembers(params) {
    return request.get('/Permission/UpdateRoleMembers', {params})
  },
// 获取应用的权限。由前端提供json文件。 liuyw
  GetAppPermissions(params) {
    return request.get('/Permission/GetAppPermissions', {params})
  },
//获取指定角色的权限。限当前机构。 liuyw
  GetRolePermissions(params) {
    return request.get('/Permission/GetRolePermissions', {params})
  },
// 获取指定用户的权限。限当前机构。 liuyw
  GetUserPermissions(params) {
    return request.get('/Permission/GetUserPermissions', {params})
  },
//设置指定角色的权限。限当前机构。 liuyw
  UpdateRolePermissions(params, paramsUrl) {
    return request.post('/Permission/UpdateRolePermissions?' + paramsUrl, params)
  },
}
export default class role {
  constructor(options) {
    this.api = api;  //调用的api
    this.options = options;  //配置项
    this.RoleList = [];  //角色列表
    this.menuList=options.menuList;//菜单列表
    this.form = {
      roleName:"",
      remark: "",
    };
    this.rules={
      roleName: [
        {required: true, message: '请输入角色名称', trigger: 'blur' },
      ],
      remark: [
        {required: true, message: '请输入角色描述', trigger: 'blur' },
      ],
    }
    this.dialogFormVisible=false,//新增弹框
    this.roleId = 0;  //角色id
    this.isLoaded = false;  //IM是否初始化完成
    this.url="";
    this.GetRoleList()
  }
  //加载角色列表
   GetRoleList() {
    const that = this;
     this.api.GetRoleList().then(function (res) {
      if (res.isCompleted) {
        that.RoleList = res.data;
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });

    that.isLoaded = true;
  }
  AddRole(params)
  {
    const that =this;
      this.api.AddRole(params).then(function (res) {
      if (res.isCompleted) {
        that.UpdateRolePermissions(res.data)
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    })
  }
  UpdateRole(params)
  {
    const that =this;
    this.api.UpdateRole(params).then(function (res) {
      if (res.isCompleted) {
        that.UpdateRolePermissions(params.roleId)
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    })
  }
  UpdateRolePermissions(roleId)
  {
    const that =this;
    that.url+='&roleId='+roleId
      this.api.UpdateRolePermissions({},that.url).then(function (res) {
      if(res.isCompleted){
        Vue.prototype.$message({
          type: 'success',
          message: "保存成功，么么哒~"
        });
        that.dialogFormVisible=false;
        that.GetRoleList();
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    })
  }
   GetRole()
  {
    const that =this;
      this.api.GetRole({roleId:that.roleId}).then(function (res) {
      if (res.isCompleted) {
        that.form={...res.data};
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    })
  }
  GetRolePermissions()
  {
    const that =this;
      this.api.GetRolePermissions({roleId:that.roleId}).then(function (res) {
            if(res.isCompleted){
              res.data.map(function (item,index) {
                that.menuList.map(function (item2,index2) {
                  if(item2.permissionCode==item)
                  {
                    item2.isChoose=true;
                  }
                  if(item2.sonName!=undefined)
                  {
                    item2.sonName.map(function (item3,index)
                    {
                      if(item3.permissionCode==item)
                      {
                        item2.checkSonNameValue.push(item)
                      }
                    })
                  }

                })
              })
            }
            else {
              Vue.prototype.$message({
                type: 'error',
                message: res.message
              });
            }
          })

  }

}
