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
  //查询当前机构的用户列表。未绑定机构的用户无权访问此接口。 liuyw
  GetCorpUserList(params)
  {
    return request.get('/Permission/GetCorpUserList', {params})
  },
  // 获取指定用户信息。限当前机构 liuyw
  GetCorpUser(params)
  {
    return request.get('/Permission/GetCorpUser', {params})
  },
  //删除指定用户。限当前机构。 liuyw
  DeleteCorpUser(params)
  {
    return request.get('/Permission/DeleteCorpUser', {params})
  },
  // 创建用户。限当前机构
  CreateCorpUser(params) {
    return request.post('/Permission/CreateCorpUser', params)
  },
  // 设置用户角色。
  UpdateCorpUserRole(params) {
    return request.post('/Permission/UpdateCorpUserRole', params)
  },
  // 更新指定用户的信息。限当前机构。
  UpdateCorpUser(params) {
    return request.post('/Permission/UpdateCorpUser?userId='+params.userId, params)
  },
  //更新用户状态
  UpdateCorpUserStatus(params)
  {
    return request.post('/Permission/UpdateCorpUserStatus?userId='+params.userId+'&status='+params.status)
  },
  validateMobilePhone(rule, value, callback)
  {
    if (value !== '') {
      var reg = /^1[3456789]\d{9}$/;
      if (!reg.test(value)) {
        callback(new Error('哈尼，请输入有效的手机号码呦'));
      }
    }
    return   callback();
  },
  validateMobilePassWord(rule, value, callback)
  {
    if (value !== '') {
      var reg = /^(?=.*\d)(?=.*[a-zA-Z])/;
      if (!reg.test(value)) {
        callback(new Error('哈尼，密码必须有数字，字母，特殊符号组成'));
      }
    }
    return   callback();
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
    this.userForm={
      loginAccount:"",
      userName:"",
      phoneNumber:"",
      loginPassword:"",
      LoginPasswordConfirm:"",
      roleId:"",
    }
    //this.roleId="";
    var validatePass2 = (rule, value, callback) => {
      debugger
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.userForm.loginPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    this.rules={
      roleName: [
        {required: true, message: '请输入角色名称', trigger: 'blur' },
      ],
      remark: [
        {required: true, message: '请输入角色描述', trigger: 'blur' },
      ],
    }

    this.userRules={
      loginAccount: [
        {required: true, message: '请输入账号', trigger: 'blur' },
      ],
      userName: [
        {required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      phoneNumber: [
        {validator:this.api.validateMobilePhone, message: '请输入正确的手机号呦', trigger: 'blur' },
        {required: true, message: '请输入手机号', trigger: 'blur' },
      ],
      loginPassword: [
        {required:true,message:"哈尼，请输入您的密码呦",trigger: 'blur'},
        {validator:this.api.validateMobilePassWord, message: '密码必须有数字，字母，特殊符号组成', trigger: 'blur' },
        { min: 8, max: 16, message: '密码必须在8-16个字符之间', trigger: 'blur' }

      ],
      LoginPasswordConfirm: [
        { validator: validatePass2, trigger: 'blur' },
        {required:true,message:"哈尼，请再次确认您的密码呦",trigger: 'blur'},
      ],
      // role: [
      //   {required:true,message: '请选择角色', trigger: 'change' },
      // ],
    }
    this.userList=[];
    this.userInfo=[];
    this.dialogFormVisible=false;
    this.dialogFormUser=false;
    //this.GetRoleList()
  }
  //加载角色列表
  GetRoleList() {
    debugger
    const that = this;
    this.api.GetRoleList().then(function (res) {
      if (res.isCompleted) {
        that.RoleList = res.data;
        that.userForm.roleId=res.data[0].roleID;
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
  // 新增角色。限当前机构。liuyw
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
  //更新指定角色信息。限当前机构。 liuyw
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
  //设置指定角色的权限。限当前机构。 liuyw
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
  //获取指定的角色信息。限当前机构 liuy
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
  //获取指定角色的权限。限当前机构。 liuyw
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
  //查询当前机构的用户列表。未绑定机构的用户无权访问此接口。 liuyw
  GetCorpUserList()
  {
    const that =this;
    this.api.GetCorpUserList().then(function (res) {
      if (res.isCompleted) {
        that.userList = res.data;
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });
  }
  // 获取指定用户信息。限当前机构 liuyw
  GetCorpUser(params)
  {
    const that =this;
    this.api.GetCorpUser(params).then(function (res) {
      if (res.isCompleted) {
        that.userForm = res.data;
        if(res.data.roleId=="")
        {
          that.userForm.roleId="";
        }else{
          that.userForm.roleId=Number(res.data.roleId)
        }
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });
  }
  //删除指定用户。限当前机构。 liuyw
  DeleteCorpUser()
  {
    const that =this;
    this.api.DeleteCorpUser(params).then(function (res) {
      if (res.isCompleted) {
        Vue.prototype.$message({
          type: 'success',
          message: "删除成功呦~"
        });
        that.GetCorpUserList();
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });
  }
  // 创建用户。限当前机构
  CreateCorpUser(params)
  {
    const that =this;
    this.api.CreateCorpUser(params).then(function (res) {
      if (res.isCompleted) {
        Vue.prototype.$message({
          type: 'success',
          message: "新增成功呦~"
        });
        that.GetCorpUserList();
        that.dialogFormUser = false;
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });
  }
  // 设置用户角色。
  UpdateCorpUserRole(params)
  {
    const that =this;
    this.api.UpdateCorpUserRole(params).then(function (res) {
      if (res.isCompleted) {
        Vue.prototype.$message({
          type: 'success',
          message: "更新成功呦~"
        });
        that.GetCorpUserList();
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });
  }
  // 更新指定用户的信息。限当前机构。
  UpdateCorpUser(params)
  {
    const that =this;
    this.api.UpdateCorpUser(params).then(function (res) {
      if (res.isCompleted) {
        Vue.prototype.$message({
          type: 'success',
          message: "更新成功呦~"
        });
        that.dialogFormUser=false;
        that.GetCorpUserList();
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });
  }
  //更新用户状态
  UpdateCorpUserStatus(e,params)
  {
    const that =this;
    this.api.UpdateCorpUserStatus(params).then(function (res) {
      if (res.isCompleted) {
        Vue.prototype.$message({
          type: 'success',
          message: "更新成功呦~"
        });
        // that.GetCorpUserList();
        e.Status=params.status
      }
      else {
        Vue.prototype.$message({
          type: 'error',
          message: res.message
        });
      }
    });
  }



}
