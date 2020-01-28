sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	'jquery.sap.global',
	'sap/ui/model/json/JSONModel'
], function(BaseController, jQuery, JSONModel) {
"use strict";
// sap.ui.define([
// 	'jquery.sap.global',
//     'sap/m/MessageToast',
// 	'sap/ui/core/mvc/Controller',
// 	'sap/ui/model/json/JSONModel'
// ], function(jQuery, MessageToast, Controller, JSONModel) {
// "use strict";

var PageController = BaseController.extend("sap.ui.demo.nav.controller.employee.EmployeeList", {

	onInit : function (evt) {
		// set mock model
		var sPath = jQuery.sap.getModulePath("sap.ui.demo.nav", "/localService/mockdata/Employees.json");
		var oModel = new JSONModel(sPath);
		this.getView().setModel(oModel);
	},

	onListItemPressed : function(oEvent){
		var oItem, oCtx;

		oItem = oEvent.getSource();
		oCtx = oItem.getBindingContext();

		this.getRouter().navTo("employee",{
			employeeId : oCtx.getProperty("EmployeeID")
		});

	}
});

return PageController;

});