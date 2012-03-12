/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.charting.plot2d.ClusteredColumns"],["require","dojox.charting.plot2d.common"],["require","dojox.charting.plot2d.Columns"],["require","dojox.lang.functional"],["require","dojox.lang.functional.reversed"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.charting.plot2d.ClusteredColumns"]){_4._hasResource["dojox.charting.plot2d.ClusteredColumns"]=true;_4.provide("dojox.charting.plot2d.ClusteredColumns");_4.require("dojox.charting.plot2d.common");_4.require("dojox.charting.plot2d.Columns");_4.require("dojox.lang.functional");_4.require("dojox.lang.functional.reversed");(function(){var df=_6.lang.functional,dc=_6.charting.plot2d.common,_7=df.lambda("item.purgeGroup()");_4.declare("dojox.charting.plot2d.ClusteredColumns",_6.charting.plot2d.Columns,{render:function(_8,_9){this.dirty=this.isDirty();if(this.dirty){_4.forEach(this.series,_7);this.cleanGroup();var s=this.group;df.forEachRev(this.series,function(_a){_a.cleanGroup(s);});}var t=this.chart.theme,_b,_c,_d,f,_e,_f,_10,ht=this._hScaler.scaler.getTransformerFromModel(this._hScaler),vt=this._vScaler.scaler.getTransformerFromModel(this._vScaler),_11=Math.max(0,this._vScaler.bounds.lower),_12=vt(_11),_13=this.events();f=dc.calculateBarSize(this._hScaler.bounds.scale,this.opt,this.series.length);_e=f.gap;_f=_10=f.size;this.resetEvents();for(var i=0;i<this.series.length;++i){var run=this.series[i],_14=_10*i;if(!this.dirty&&!run.dirty){continue;}run.cleanGroup();var s=run.group;if(!run.fill||!run.stroke){_b=run.dyn.color=new _4.Color(t.next("color"));}_c=run.stroke?run.stroke:dc.augmentStroke(t.series.stroke,_b);_d=run.fill?run.fill:dc.augmentFill(t.series.fill,_b);for(var j=0;j<run.data.length;++j){var _15=run.data[j],v=typeof _15=="number"?_15:_15.y,vv=vt(v),_16=vv-_12,h=Math.abs(_16),_17=_b,_18=_d,_19=_c;if(typeof _15!="number"){if(_15.color){_17=new _4.Color(_15.color);}if("fill" in _15){_18=_15.fill;}else{if(_15.color){_18=dc.augmentFill(t.series.fill,_17);}}if("stroke" in _15){_19=_15.stroke;}else{if(_15.color){_19=dc.augmentStroke(t.series.stroke,_17);}}}if(_f>=1&&h>=1){var _1a=s.createRect({x:_9.l+ht(j+0.5)+_e+_14,y:_8.height-_9.b-(v>_11?vv:_12),width:_f,height:h}).setFill(_18).setStroke(_19);run.dyn.fill=_1a.getFill();run.dyn.stroke=_1a.getStroke();if(_13){var o={element:"column",index:j,run:run,plot:this,hAxis:this.hAxis||null,vAxis:this.vAxis||null,shape:_1a,x:j+0.5,y:v};this._connectEvents(_1a,o);}if(this.animate){this._animateColumn(_1a,_8.height-_9.b-_12,h);}}}run.dirty=false;}this.dirty=false;return this;}});})();}}};});