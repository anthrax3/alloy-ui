if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-datatable-body/aui-datatable-body.js']) {
   __coverage__['build/aui-datatable-body/aui-datatable-body.js'] = {"path":"build/aui-datatable-body/aui-datatable-body.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}},"2":{"name":"DataTableBody","line":21,"loc":{"start":{"line":21,"column":0},"end":{"line":21,"column":25}}},"3":{"name":"(anonymous_3)","line":41,"loc":{"start":{"line":41,"column":17},"end":{"line":41,"column":28}}},"4":{"name":"(anonymous_4)","line":51,"loc":{"start":{"line":51,"column":22},"end":{"line":51,"column":33}}},"5":{"name":"(anonymous_5)","line":61,"loc":{"start":{"line":61,"column":20},"end":{"line":61,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":73,"column":115}},"2":{"start":{"line":9,"column":0},"end":{"line":10,"column":31}},"3":{"start":{"line":21,"column":0},"end":{"line":21,"column":27}},"4":{"start":{"line":30,"column":0},"end":{"line":30,"column":37}},"5":{"start":{"line":32,"column":0},"end":{"line":68,"column":2}},"6":{"start":{"line":42,"column":8},"end":{"line":42,"column":55}},"7":{"start":{"line":52,"column":8},"end":{"line":52,"column":30}},"8":{"start":{"line":62,"column":8},"end":{"line":63,"column":44}},"9":{"start":{"line":65,"column":8},"end":{"line":65,"column":37}},"10":{"start":{"line":66,"column":8},"end":{"line":66,"column":38}},"11":{"start":{"line":70,"column":0},"end":{"line":70,"column":50}}},"branchMap":{},"code":["(function () { YUI.add('aui-datatable-body', function (A, NAME) {","","/**"," * The Datatable Component"," *"," * @module aui-datatable"," * @submodule aui-datatable-body"," */","var getCN = A.getClassName,","    CSS_TABLE = getCN('table');","","/**"," * An extension for A.DataTable.BodyView that adds correct class to Table."," *"," * @class A.DataTableBody"," * @param {Object} config Object literal specifying widget configuration"," * properties."," * @constructor"," */","","function DataTableBody() {}","","/**"," * Static property provides a string to identify the class."," *"," * @property NAME"," * @type String"," * @static"," */","DataTableBody.NAME = 'dataTableBody';","","DataTableBody.prototype = {","","    /**","     * Construction logic executed during A.DataTableBody instantiation.","     * Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        A.after(this._afterRenderBody, this, 'render');","    },","","    /**","     * Method called after render method.","     *","     * @method _afterRenderBody","     * @protected","     */","    _afterRenderBody: function() {","        this._setTableClass();","    },","","    /**","     * Adds .table class to table element.","     *","     * @method _setTableClass","     * @protected","     */","    _setTableClass: function() {","        var container = this.get('container'),","            cssClass = this.get('cssClass');","","        container.addClass(cssClass);","        container.addClass(CSS_TABLE);","    }","};","","A.Base.mix(A.DataTable.BodyView, [DataTableBody]);","","","}, '3.0.3-deprecated.55', {\"requires\": [\"aui-classnamemanager\", \"datatable-base\", \"event-key\", \"aui-event-base\"]});","","}());"]};
}
var __cov_q8cbsHEIy0A8vjEuxGrCNQ = __coverage__['build/aui-datatable-body/aui-datatable-body.js'];
__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['1']++;YUI.add('aui-datatable-body',function(A,NAME){__cov_q8cbsHEIy0A8vjEuxGrCNQ.f['1']++;__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['2']++;var getCN=A.getClassName,CSS_TABLE=getCN('table');__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['3']++;function DataTableBody(){__cov_q8cbsHEIy0A8vjEuxGrCNQ.f['2']++;}__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['4']++;DataTableBody.NAME='dataTableBody';__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['5']++;DataTableBody.prototype={initializer:function(){__cov_q8cbsHEIy0A8vjEuxGrCNQ.f['3']++;__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['6']++;A.after(this._afterRenderBody,this,'render');},_afterRenderBody:function(){__cov_q8cbsHEIy0A8vjEuxGrCNQ.f['4']++;__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['7']++;this._setTableClass();},_setTableClass:function(){__cov_q8cbsHEIy0A8vjEuxGrCNQ.f['5']++;__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['8']++;var container=this.get('container'),cssClass=this.get('cssClass');__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['9']++;container.addClass(cssClass);__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['10']++;container.addClass(CSS_TABLE);}};__cov_q8cbsHEIy0A8vjEuxGrCNQ.s['11']++;A.Base.mix(A.DataTable.BodyView,[DataTableBody]);},'3.0.3-deprecated.55',{'requires':['aui-classnamemanager','datatable-base','event-key','aui-event-base']});
