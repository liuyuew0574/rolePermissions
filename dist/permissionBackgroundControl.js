let permissionBackground = {

};

permissionBackground.Overview = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('Overview')!=-1
};
permissionBackground.ProductManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('ProductManager')!=-1
};
permissionBackground.CustomerManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('CustomerManager')!=-1
};
permissionBackground.SeeBuyersList = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SeeBuyersList')!=-1
};
permissionBackground.seeBuyerDetail = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('seeBuyerDetail')!=-1
};
permissionBackground.WriteFollow = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('WriteFollow')!=-1
};
permissionBackground.SupplierManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SupplierManager')!=-1
};
permissionBackground.SeeSupplierList = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SeeSupplierList')!=-1
};
permissionBackground.SeeAllSupplierList = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SeeAllSupplierList')!=-1
};
permissionBackground.TransferSupplierBeInChargeOf = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('TransferSupplierBeInChargeOf')!=-1
};
permissionBackground.CreateSupplier = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('CreateSupplier')!=-1
};
permissionBackground.ImportSupplier = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('ImportSupplier')!=-1
};
permissionBackground.UpdateSupplier = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('UpdateSupplier')!=-1
};
permissionBackground.SeeSupplierDetail = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SeeSupplierDetail')!=-1
};
permissionBackground.SeeSupplierApproval = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SeeSupplierApproval')!=-1
};
permissionBackground.SupplierApprovalOperating = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SupplierApprovalOperating')!=-1
};
permissionBackground.UserManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('UserManager')!=-1
};
permissionBackground.SeeUserList = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SeeUserList')!=-1
};
permissionBackground.CreateUser = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('CreateUser')!=-1
};
permissionBackground.UpdateUser = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('UpdateUser')!=-1
};
permissionBackground.ResetPasswordUser = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('ResetPasswordUser')!=-1
};
permissionBackground.EnableUser = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('EnableUser')!=-1
};
permissionBackground.Transaction = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('Transaction')!=-1
};
permissionBackground.SettingManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SettingManager')!=-1
};
permissionBackground.ArticleManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('ArticleManager')!=-1
};
permissionBackground.CorpAdmin = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('CorpAdmin')!=-1
};
export default permissionBackground;
