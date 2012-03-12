/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.cometd.longPollTransportFormEncoded"],["require","dojox.cometd._base"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.cometd.longPollTransportFormEncoded"]){_4._hasResource["dojox.cometd.longPollTransportFormEncoded"]=true;_4.provide("dojox.cometd.longPollTransportFormEncoded");_4.require("dojox.cometd._base");_6.cometd.longPollTransportFormEncoded=new function(){this._connectionType="long-polling";this._cometd=null;this.check=function(_7,_8,_9){return ((!_9)&&(_4.indexOf(_7,"long-polling")>=0));};this.tunnelInit=function(){var _a={channel:"/meta/connect",clientId:this._cometd.clientId,connectionType:this._connectionType,id:""+this._cometd.messageId++};_a=this._cometd._extendOut(_a);this.openTunnelWith({message:_4.toJson([_a])});};this.tunnelCollapse=function(){if(!this._cometd._initialized){return;}if(this._cometd._advice&&this._cometd._advice["reconnect"]=="none"){return;}var _b=this._cometd._interval();if(this._cometd._status=="connected"){setTimeout(_4.hitch(this,"_connect"),_b);}else{setTimeout(_4.hitch(this._cometd,function(){this.init(this.url,this._props);}),_b);}};this._connect=function(){if(!this._cometd._initialized){return;}if(this._cometd._polling){return;}if((this._cometd._advice)&&(this._cometd._advice["reconnect"]=="handshake")){this._cometd._status="unconnected";this._initialized=false;this._cometd.init(this._cometd.url,this._cometd._props);}else{if(this._cometd._status=="connected"){var _c={channel:"/meta/connect",connectionType:this._connectionType,clientId:this._cometd.clientId,id:""+this._cometd.messageId++};if(this._cometd.connectTimeout>=this._cometd.expectedNetworkDelay){_c.advice={timeout:this._cometd.connectTimeout-this._cometd.expectedNetworkDelay};}_c=this._cometd._extendOut(_c);this.openTunnelWith({message:_4.toJson([_c])});}}};this.deliver=function(_d){};this.openTunnelWith=function(_e,_f){this._cometd._polling=true;var _10={url:(_f||this._cometd.url),content:_e,handleAs:this._cometd.handleAs,load:_4.hitch(this,function(_11){this._cometd._polling=false;this._cometd.deliver(_11);this._cometd._backon();this.tunnelCollapse();}),error:_4.hitch(this,function(err){var _12={failure:true,error:err,advice:this._cometd._advice};this._cometd._polling=false;this._cometd._publishMeta("connect",false,_12);this._cometd._backoff();this.tunnelCollapse();})};var _13=this._cometd._connectTimeout();if(_13>0){_10.timeout=_13;}this._poll=_4.xhrPost(_10);};this.sendMessages=function(_14){for(var i=0;i<_14.length;i++){_14[i].clientId=this._cometd.clientId;_14[i].id=""+this._cometd.messageId++;_14[i]=this._cometd._extendOut(_14[i]);}return _4.xhrPost({url:this._cometd.url||_4.config["cometdRoot"],handleAs:this._cometd.handleAs,load:_4.hitch(this._cometd,"deliver"),content:{message:_4.toJson(_14)},error:_4.hitch(this,function(err){this._cometd._publishMeta("publish",false,{messages:_14});}),timeout:this._cometd.expectedNetworkDelay});};this.startup=function(_15){if(this._cometd._status=="connected"){return;}this.tunnelInit();};this.disconnect=function(){var _16={channel:"/meta/disconnect",clientId:this._cometd.clientId,id:""+this._cometd.messageId++};_16=this._cometd._extendOut(_16);_4.xhrPost({url:this._cometd.url||_4.config["cometdRoot"],handleAs:this._cometd.handleAs,content:{message:_4.toJson([_16])}});};this.cancelConnect=function(){if(this._poll){this._poll.cancel();this._cometd._polling=false;this._cometd._publishMeta("connect",false,{cancel:true});this._cometd._backoff();this.disconnect();this.tunnelCollapse();}};};_6.cometd.longPollTransport=_6.cometd.longPollTransportFormEncoded;_6.cometd.connectionTypes.register("long-polling",_6.cometd.longPollTransport.check,_6.cometd.longPollTransportFormEncoded);_6.cometd.connectionTypes.register("long-polling-form-encoded",_6.cometd.longPollTransport.check,_6.cometd.longPollTransportFormEncoded);}}};});