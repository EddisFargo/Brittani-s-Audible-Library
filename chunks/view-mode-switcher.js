(self.webpackChunk=self.webpackChunk||[]).push([[961],{9947:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o}),s(5699);const i={name:"viewModeSwitcher",props:["justIcon"],data:function(){return{sticky:this.$store.state.sticky,viewModes:["grid","spreadsheet"]}},methods:{changeViewMode:function(){var e=this,t=_.findIndex(this.viewModes,(function(t){return t===e.sticky.viewMode}));t+1>this.viewModes.length-1?t=0:t+=1;var s=this.viewModes[t];this.$store.commit("stickyProp",{key:"viewMode",value:s}),this.$updateQuery({query:"view",value:s})}}},o=(0,s(810).Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{"no-style":e.justIcon},attrs:{id:"view-mode-switcher"},on:{click:e.changeViewMode}},["grid"===e.sticky.viewMode?s("font-awesome",{staticClass:"icon",attrs:{icon:["fas","table"]}}):"spreadsheet"===e.sticky.viewMode?s("font-awesome",{staticClass:"icon",attrs:{icon:["fas","th"]}}):e._e()],1)}),[],!1,null,"615818f2",null).exports}}]);