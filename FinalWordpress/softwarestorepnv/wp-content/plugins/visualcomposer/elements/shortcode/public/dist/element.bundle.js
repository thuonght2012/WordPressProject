(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./shortcode/editor.css":function(e,t){e.exports=".vce-shortcode {\n  min-height: 1em;\n}\n"},"./shortcode/index.js":function(e,t,s){"use strict";s.r(t);var o=s("./node_modules/vc-cake/index.js"),n=s.n(o),r=s("./node_modules/@babel/runtime/helpers/extends.js"),a=s.n(r),c=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=s.n(c),d=s("./node_modules/@babel/runtime/helpers/createClass.js"),l=s.n(d),p=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=s.n(p),m=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=s.n(m),v=s("./node_modules/@babel/runtime/helpers/get.js"),b=s.n(v),y=s("./node_modules/@babel/runtime/helpers/inherits.js"),g=s.n(y),f=s("./node_modules/react/index.js"),j=s.n(f),C=function(e){function t(){return i()(this,t),u()(this,h()(t).apply(this,arguments))}return g()(t,e),l()(t,[{key:"componentDidMount",value:function(){b()(h()(t.prototype),"updateShortcodeToHtml",this).call(this,this.props.atts.shortcode,this.refs.vcvhelper)}},{key:"componentDidUpdate",value:function(e){this.props.atts.shortcode!==e.atts.shortcode&&b()(h()(t.prototype),"updateShortcodeToHtml",this).call(this,this.props.atts.shortcode,this.refs.vcvhelper)}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,o=e.editor,n=s.shortcode,r=s.customClass,c=s.metaCustomId,i="vce-shortcode",d={};"string"==typeof r&&r&&(i=i.concat(" "+r)),c&&(d.id=c);var l=this.applyDO("all");return j.a.createElement("div",a()({className:i},o,d),j.a.createElement("div",a()({className:"vce-shortcode-wrapper vce",id:"el-"+t},l),j.a.createElement("div",{className:"vcvhelper",ref:"vcvhelper","data-vcvs-html":n})))}}]),t}(n.a.getService("api").elementComponent);(0,n.a.getService("cook").add)(s("./shortcode/settings.json"),(function(e){e.add(C)}),{css:!1,editorCss:s("./node_modules/raw-loader/index.js!./shortcode/editor.css")},"")},"./shortcode/settings.json":function(e){e.exports={shortcode:{type:"string",access:"public",value:"Insert [shortcode] of any WordPress plugin installed on your website."},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["shortcode","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},assetsLibrary:{access:"public",type:"string",value:["animate"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"shortcode"}}}},[["./shortcode/index.js"]]]);