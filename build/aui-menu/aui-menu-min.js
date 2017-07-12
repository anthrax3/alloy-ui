YUI.add("aui-menu",function(e,t){var n=e.getClassName("dropdown","menu"),r=e.getClassName("menu","inline"),i=e.getClassName("menu","item"),s="itemSelected",o="inline",u="overlay",a="> ."+n+" > ."+i,f=768;e.Menu=e.Base.create("menu",e.Dropdown,[e.WidgetPosition,e.WidgetPositionAlign,e.WidgetPositionConstrain,e.WidgetStack],{initializer:function(){this._eventHandles=[this.after({itemsChange:this._afterItemsChange,layoutModeChange:this._afterLayoutModeChange,"menu-item:shortcut":this._afterShorcut,"menu-item:submenuItemSelected":this._afterSubmenuItemSelected,openChange:this._afterMenuOpenChange}),e.on(this._onUISetXY,this,"_uiSetXY"),this.get("contentBox").delegate("click",this._onClickItem,a,this),this.get("contentBox").delegate("key",e.bind(this._onKeyPressItem,this),"press:13",a),this.get("contentBox").delegate("mouseenter",this._onMouseEnterItem,a,this),e.after("windowresize",e.bind(this._afterWindowResize,this))],this.publish({itemSelected:{defaultFn:this._defItemSelected}}),this._showItemSubmenuDebounce=e.debounce(this._showItemSubmenu,e.Menu.HIDE_SUBMENU_DELAY,this)},destructor:function(){var t=this.get("items");for(var n=0;n<t.length;n++)t[n].destroy();(new e.EventHandle(this._eventHandles)).detach()},syncUI:function(){this._updateLayoutMode()},addItem:function(e,t){var n=this.get("items").concat();t===undefined?n.push(e):n.splice(t,0,e),this.set("items",n)},getMenuItemFromNode:function(e){return e.getData("menu-item")},hideAllSubmenus:function(){var e=this.get("items");for(var t=0;t<e.length;t++)this._hideItemSubmenu(e[t])},removeItem:function(t){var n,r=this.get("items");n=e.Array.indexOf(r,t),this.removeItemAtIndex(n)},removeItemAtIndex:function(e){var t=this.get("items");e>=0&&e<t.length&&(t.splice(e,1),this.set("items",t))},_afterItemsChange:function(e){for(var t=0;t<e.prevVal.length;t++)e.prevVal[t].removeTarget(this);this._uiSetItems(this.get("items"))},_afterLayoutModeChange:function(){var e=this.get("layoutMode");this.get("boundingBox").toggleClass(r,e===o),this.get("layoutMode")===u&&this.close()},_afterMenuOpenChange:function(){this.get("open")?this._openedFirstTime||(this._uiSetItems(this.get("items")),this._openedFirstTime=!0):this.hideAllSubmenus()},_afterShorcut:function(e){this._selectItem(e.target,e.type)},_afterSubmenuItemSelected:function(e){this._selectItem(e.item,e.src)},_afterWindowResize:function(){this._updateLayoutMode()},_defItemSelected:function(){this.get("layoutMode")===u&&this.close()},_hideItemSubmenu:function(e){e.hideSubmenu(),this._openSubmenuItem=null},_onClickItem:function(e){var t=this.getMenuItemFromNode(e.currentTarget);this.get("layoutMode")===o&&(t.isSubmenuOpen()?this._hideItemSubmenu(t):this._showItemSubmenu(t)),this._selectItem(t,e.type),e.stopPropagation()},_onKeyPressItem:function(e){this._onClickItem(e)},_onMouseEnterItem:function(e){var t=this.getMenuItemFromNode(e.currentTarget);this.get("layoutMode")===u&&this._showItemSubmenuDebounce(t)},_onUISetXY:function(){if(this.get("layoutMode")===o)return new e.Do.Prevent},_selectItem:function(e,t){e.isSelectable()&&this.fire(s,{item:e,src:t})},_setItems:function(t){var n=[],r;if(e.instanceOf(t,e.NodeList))t.each(function(){n.push(e.MenuItem.createFromNode(this))});else for(r=0;r<t.length;r++)e.instanceOf(t[r],e.MenuItem)?n.push(t[r]):n.push(new e.MenuItem(t[r]));for(r=0;r<n.length;r++)n[r].addTarget(this);return n},_showItemSubmenu:function(e){this._openSubmenuItem&&this._hideItemSubmenu(this._openSubmenuItem),e.showSubmenu(this.get("layoutMode")===u,this.get("zIndex")+1),this._openSubmenuItem=e},_uiSetItems:function(e){var t=this.get("contentBox").one("."+n);t.empty();for(var r=0;r<e.length;r++)t.append(e[r].get("node"))},_updateLayoutMode:function(){e.DOM.viewportRegion().width<f?this._set("layoutMode",o):this._set("layoutMode",u)}},{ATTRS:{items:{lazyAdd:!1,setter:"_setItems",validator:function(t){return e.Lang.isArray(t)||e.instanceOf(t,e.NodeList)},value:[]},layoutMode:{readOnly:!0,validator:e.Lang.isString,value:u}},CSS_PREFIX:e.getClassName("menu"),HIDE_SUBMENU_DELAY:200,HTML_PARSER:{items:[a]}})},"3.0.3-deprecated.55",{requires:["base-build","event-mouseenter","event-resize","widget","widget-position","widget-position-align","widget-position-constrain","widget-stack","aui-classnamemanager","aui-debounce","aui-dropdown","aui-menu-item"],skinnable:!0});
