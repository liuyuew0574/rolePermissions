import permissionBackground from "./permissionBackgroundControl";

let permissionSupplier = {

};

permissionSupplier.ProductManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('ProductManager')!=-1
};
permissionSupplier.SpotProductManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('SpotProductManager')!=-1
};
permissionSupplier.AvailableProductManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('AvailableProductManager')!=-1
};
permissionSupplier.AddAvailableProduct = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('AddAvailableProduct')!=-1
};
permissionSupplier.RFQ = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('RFQ')!=-1
};
permissionSupplier.OrderManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('OrderManager')!=-1
};
permissionSupplier.CustomerManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('CustomerManager')!=-1
};
permissionSupplier.FundsManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('FundsManager')!=-1
};
permissionSupplier.AccountManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('AccountManager')!=-1
};
permissionSupplier.AccountSecurity = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('AccountSecurity')!=-1
};
permissionSupplier.AccountSettings = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('AccountSettings')!=-1
};
permissionSupplier.BankAccountManager = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('BankAccountManager')!=-1
};
permissionSupplier.CorpAdmin = function () {
  return $nuxt.$store.getters.loginInfo.permissions.indexOf('CorpAdmin')!=-1
};
export default permissionSupplier;
