sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageToast',
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/routing/History",
    'sap/ui/model/json/JSONModel',
    "sap/ui/model/resource/ResourceModel",
    'sap/m/IconTabFilter',
    'sap/m/Text'
], function(jQuery, MessageToast, Controller, History, JSONModel, IconTabFilter, Text) {
"use strict";

    var oModel = new JSONModel({
        firstName: "Eminent",
        lastName: "Multiservices",
        enabled: true,
        address: {
            street: "210, Anand Niwas, Mulund",
            city: "Mumbai, Maharashtra",
            zip: "400601",
            country: "India"
        }
    });
    sap.ui.getCore().setModel(oModel);

    
    return Controller.extend("simple-app.controller.Main", {
        getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
 
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
 
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
 
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("main", {}, true /*no history*/);
			}
        },
        
        
        onReadMoreBtnPress: function (evt) {
            this.getRouter().navTo("productdesc");
            MessageToast.show("Read More button Pressed");
            
        },

        handleUploadComplete: function(oEvent) {
			var sResponse = oEvent.getParameter("response");
			if (sResponse) {
				var sMsg = "";
				var m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
				if (m[1] == "200") {
					sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Success)";
					oEvent.getSource().setValue("");
				} else {
					sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Error)";
				}

				MessageToast.show(sMsg);
			}
		},

		handleUploadPress: function() {
			var oFileUploader = this.byId("fileUploader");
			oFileUploader.upload();
        },
    });

});
