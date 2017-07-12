if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-popover/aui-popover.js']) {
   __coverage__['build/aui-popover/aui-popover.js'] = {"path":"build/aui-popover/aui-popover.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":42}}},"2":{"name":"(anonymous_2)","line":57,"loc":{"start":{"line":57,"column":17},"end":{"line":57,"column":28}}},"3":{"name":"(anonymous_3)","line":71,"loc":{"start":{"line":71,"column":16},"end":{"line":71,"column":27}}},"4":{"name":"(anonymous_4)","line":81,"loc":{"start":{"line":81,"column":14},"end":{"line":81,"column":25}}},"5":{"name":"(anonymous_5)","line":97,"loc":{"start":{"line":97,"column":31},"end":{"line":97,"column":42}}},"6":{"name":"(anonymous_6)","line":110,"loc":{"start":{"line":110,"column":15},"end":{"line":110,"column":26}}},"7":{"name":"(anonymous_7)","line":121,"loc":{"start":{"line":121,"column":19},"end":{"line":121,"column":33}}},"8":{"name":"(anonymous_8)","line":141,"loc":{"start":{"line":141,"column":24},"end":{"line":141,"column":42}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":216,"column":3}},"2":{"start":{"line":9,"column":0},"end":{"line":16,"column":51}},"3":{"start":{"line":35,"column":0},"end":{"line":190,"column":3}},"4":{"start":{"line":58,"column":8},"end":{"line":58,"column":28}},"5":{"start":{"line":60,"column":8},"end":{"line":60,"column":86}},"6":{"start":{"line":62,"column":8},"end":{"line":62,"column":80}},"7":{"start":{"line":72,"column":8},"end":{"line":72,"column":36}},"8":{"start":{"line":82,"column":8},"end":{"line":83,"column":54}},"9":{"start":{"line":85,"column":8},"end":{"line":85,"column":54}},"10":{"start":{"line":87,"column":8},"end":{"line":87,"column":36}},"11":{"start":{"line":98,"column":8},"end":{"line":99,"column":52}},"12":{"start":{"line":101,"column":8},"end":{"line":101,"column":65}},"13":{"start":{"line":111,"column":8},"end":{"line":111,"column":32}},"14":{"start":{"line":122,"column":8},"end":{"line":123,"column":54}},"15":{"start":{"line":125,"column":8},"end":{"line":125,"column":42}},"16":{"start":{"line":127,"column":8},"end":{"line":127,"column":64}},"17":{"start":{"line":129,"column":8},"end":{"line":131,"column":9}},"18":{"start":{"line":130,"column":12},"end":{"line":130,"column":40}},"19":{"start":{"line":142,"column":8},"end":{"line":142,"column":98}}},"branchMap":{"1":{"line":127,"type":"cond-expr","locations":[{"start":{"line":127,"column":46},"end":{"line":127,"column":53}},{"start":{"line":127,"column":56},"end":{"line":127,"column":62}}]},"2":{"line":129,"type":"if","locations":[{"start":{"line":129,"column":8},"end":{"line":129,"column":8}},{"start":{"line":129,"column":8},"end":{"line":129,"column":8}}]}},"code":["(function () { YUI.add('aui-popover', function (A, NAME) {","","/**"," * The Popover Component"," *"," * @module aui-popover"," */","","var StdMod = A.WidgetStdMod,","","    getClassName = A.getClassName,","","    CSS_ARROW = getClassName('arrow'),","    CSS_POPOVER_BD = getClassName('popover-content'),","    CSS_POPOVER_FT = getClassName('popover-footer'),","    CSS_POPOVER_HD = getClassName('popover-title');","","/**"," * A base class for Popover."," *"," * Check the [live demo](http://alloyui.com/examples/popover/)."," *"," * @class A.Popover"," * @extends Widget"," * @uses A.WidgetCssClass, A.WidgetPosition, A.WidgetStdMod, A.WidgetToggle,"," *     A.WidgetAutohide, A.WidgetToolbars, A.WidgetModality,"," *     A.WidgetPositionAlign, A.WidgetPositionAlignSuggestion,"," *     A.WidgetPositionConstrain, A.WidgetStack"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," * @include http://alloyui.com/examples/popover/basic-markup.html"," * @include http://alloyui.com/examples/popover/basic.js"," */","A.Popover = A.Base.create('popover', A.Widget, [","    A.WidgetCssClass,","    A.WidgetPosition,","    A.WidgetStdMod,","    A.WidgetToggle,","    A.WidgetAutohide,","    A.WidgetToolbars,","    A.WidgetModality,","    A.WidgetPositionAlign,","    A.WidgetPositionAlignSuggestion,","    A.WidgetPositionConstrain,","    A.WidgetStack,","    A.WidgetTransition,","    A.WidgetTrigger","], {","","    /**","     * Construction logic executed during Popover instantiation. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var instance = this;","","        A.after(instance._afterRenderBoxClassNames, instance, '_renderBoxClassNames');","","        this._resizeHandle = A.on('windowresize', A.bind(this._onResize, this));","    },","","    /**","     * Destructor lifecycle implementation for the `Popover` class.","     *","     * @method destructor","     * @protected","     */","    destructor: function() {","        this._resizeHandle.detach();","    },","","    /**","     * Render the Popover component instance. Lifecycle.","     *","     * @method renderUI","     * @protected","     */","    renderUI: function() {","        var instance = this,","            boundingBox = instance.get('boundingBox');","","        boundingBox.append(A.Popover.TEMPLATES.arrow);","","        instance.suggestAlignment();","    },","","    /**","     * Fire after `contentBox` class names changes.","     *","     * @method _afterRenderBoxClassNames","     * @param event","     * @protected","     */","    _afterRenderBoxClassNames: function() {","        var instance = this,","            contentBox = instance.get('contentBox');","","        contentBox.removeClass(instance.getClassName('content'));","    },","","    /**","     * Fired after the window is resized.","     *","     * @method _onResize","     * @protected","     */","    _onResize: function() {","        this.suggestAlignment();","    },","","    /**","     * Fire after `boundingBox` style changes.","     *","     * @method _uiSetVisible","     * @param val","     * @protected","     */","    _uiSetVisible: function(val) {","        var instance = this,","            boundingBox = instance.get('boundingBox');","","        instance._widgetUiSetVisible(val);","","        boundingBox.setStyle('display', val ? 'block' : 'none');","","        if (val) {","            instance.suggestAlignment();","        }","    },","","    /**","     * Get templates from a widget extension.","     *","     * @method _getStdModTemplate","     * @param section","     * @protected","     */","    _getStdModTemplate: function(section) {","        return A.Node.create(A.Popover.TEMPLATES[section], this._stdModNode.get('ownerDocument'));","    },","","    _widgetUiSetVisible: A.Widget.prototype._uiSetVisible","}, {","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: getClassName('popover'),","","    /**","     * Static property used to define the default attribute","     * configuration for the Popover.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * DOM event to hide the tooltip.","         *","         * @attribute triggerToggleEvent","         * @default click","         * @type String","         */","        triggerToggleEvent: {","            value: 'click'","        }","    },","","    /**","     * Static property provides a set of reusable templates.","     *","     * @property TEMPLATES","     * @type Object","     * @static","     */","    TEMPLATES: {","        header: '<div class=\"' + StdMod.SECTION_CLASS_NAMES[StdMod.HEADER] + ' ' + CSS_POPOVER_HD + '\"></div>',","        body: '<div class=\"' + StdMod.SECTION_CLASS_NAMES[StdMod.BODY] + ' ' + CSS_POPOVER_BD + '\"></div>',","        footer: '<div class=\"' + StdMod.SECTION_CLASS_NAMES[StdMod.FOOTER] + ' ' + CSS_POPOVER_FT + '\"></div>',","        arrow: '<div class=\"' + CSS_ARROW + '\"></div>'","    }","});","","","}, '3.0.3-deprecated.55', {","    \"requires\": [","        \"event-resize\",","        \"widget\",","        \"widget-autohide\",","        \"widget-buttons\",","        \"widget-modality\",","        \"widget-position\",","        \"widget-position-align\",","        \"widget-position-constrain\",","        \"widget-stack\",","        \"widget-stdmod\",","        \"aui-classnamemanager\",","        \"aui-widget-cssclass\",","        \"aui-widget-toggle\",","        \"aui-widget-toolbars\",","        \"aui-widget-transition\",","        \"aui-widget-trigger\",","        \"aui-widget-position-align-suggestion\",","        \"aui-component\",","        \"aui-node-base\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_eqxdLRKmmZEBcjlP$urK0Q = __coverage__['build/aui-popover/aui-popover.js'];
__cov_eqxdLRKmmZEBcjlP$urK0Q.s['1']++;YUI.add('aui-popover',function(A,NAME){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['1']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['2']++;var StdMod=A.WidgetStdMod,getClassName=A.getClassName,CSS_ARROW=getClassName('arrow'),CSS_POPOVER_BD=getClassName('popover-content'),CSS_POPOVER_FT=getClassName('popover-footer'),CSS_POPOVER_HD=getClassName('popover-title');__cov_eqxdLRKmmZEBcjlP$urK0Q.s['3']++;A.Popover=A.Base.create('popover',A.Widget,[A.WidgetCssClass,A.WidgetPosition,A.WidgetStdMod,A.WidgetToggle,A.WidgetAutohide,A.WidgetToolbars,A.WidgetModality,A.WidgetPositionAlign,A.WidgetPositionAlignSuggestion,A.WidgetPositionConstrain,A.WidgetStack,A.WidgetTransition,A.WidgetTrigger],{initializer:function(){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['2']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['4']++;var instance=this;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['5']++;A.after(instance._afterRenderBoxClassNames,instance,'_renderBoxClassNames');__cov_eqxdLRKmmZEBcjlP$urK0Q.s['6']++;this._resizeHandle=A.on('windowresize',A.bind(this._onResize,this));},destructor:function(){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['3']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['7']++;this._resizeHandle.detach();},renderUI:function(){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['4']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['8']++;var instance=this,boundingBox=instance.get('boundingBox');__cov_eqxdLRKmmZEBcjlP$urK0Q.s['9']++;boundingBox.append(A.Popover.TEMPLATES.arrow);__cov_eqxdLRKmmZEBcjlP$urK0Q.s['10']++;instance.suggestAlignment();},_afterRenderBoxClassNames:function(){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['5']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['11']++;var instance=this,contentBox=instance.get('contentBox');__cov_eqxdLRKmmZEBcjlP$urK0Q.s['12']++;contentBox.removeClass(instance.getClassName('content'));},_onResize:function(){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['6']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['13']++;this.suggestAlignment();},_uiSetVisible:function(val){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['7']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['14']++;var instance=this,boundingBox=instance.get('boundingBox');__cov_eqxdLRKmmZEBcjlP$urK0Q.s['15']++;instance._widgetUiSetVisible(val);__cov_eqxdLRKmmZEBcjlP$urK0Q.s['16']++;boundingBox.setStyle('display',val?(__cov_eqxdLRKmmZEBcjlP$urK0Q.b['1'][0]++,'block'):(__cov_eqxdLRKmmZEBcjlP$urK0Q.b['1'][1]++,'none'));__cov_eqxdLRKmmZEBcjlP$urK0Q.s['17']++;if(val){__cov_eqxdLRKmmZEBcjlP$urK0Q.b['2'][0]++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['18']++;instance.suggestAlignment();}else{__cov_eqxdLRKmmZEBcjlP$urK0Q.b['2'][1]++;}},_getStdModTemplate:function(section){__cov_eqxdLRKmmZEBcjlP$urK0Q.f['8']++;__cov_eqxdLRKmmZEBcjlP$urK0Q.s['19']++;return A.Node.create(A.Popover.TEMPLATES[section],this._stdModNode.get('ownerDocument'));},_widgetUiSetVisible:A.Widget.prototype._uiSetVisible},{CSS_PREFIX:getClassName('popover'),ATTRS:{triggerToggleEvent:{value:'click'}},TEMPLATES:{header:'<div class="'+StdMod.SECTION_CLASS_NAMES[StdMod.HEADER]+' '+CSS_POPOVER_HD+'"></div>',body:'<div class="'+StdMod.SECTION_CLASS_NAMES[StdMod.BODY]+' '+CSS_POPOVER_BD+'"></div>',footer:'<div class="'+StdMod.SECTION_CLASS_NAMES[StdMod.FOOTER]+' '+CSS_POPOVER_FT+'"></div>',arrow:'<div class="'+CSS_ARROW+'"></div>'}});},'3.0.3-deprecated.55',{'requires':['event-resize','widget','widget-autohide','widget-buttons','widget-modality','widget-position','widget-position-align','widget-position-constrain','widget-stack','widget-stdmod','aui-classnamemanager','aui-widget-cssclass','aui-widget-toggle','aui-widget-toolbars','aui-widget-transition','aui-widget-trigger','aui-widget-position-align-suggestion','aui-component','aui-node-base'],'skinnable':true});
