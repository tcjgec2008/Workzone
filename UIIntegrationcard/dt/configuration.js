/**
 * This module was created by the BASEditor
 */
sap.ui.define(["sap/ui/integration/Designtime"], function (
	Designtime
) {
	"use strict";
	return function () {
		return new Designtime({
			"form": {
				"items": {
					"top": {
						"manifestpath": "/sap.card/configuration/parameters/top/value",
						"type": "integer",
						"translatable": false
					}
				}
			},
			"preview": {
				"modes": "Abstract"
			}
		});
	};
});
