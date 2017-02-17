"use strict";angular.module("app.upload",[]).directive("ngThumb",["$window",function(i){var t={support:!(!i.FileReader||!i.CanvasRenderingContext2D),isFile:function(t){return angular.isObject(t)&&t instanceof i.File},isImage:function(i){var t="|"+i.type.slice(i.type.lastIndexOf("/")+1)+"|";return-1!=="|jpg|png|jpeg|bmp|gif|".indexOf(t)}};return{restrict:"A",template:"<canvas/>",link:function(i,e,n){function a(i){var t=new Image;t.onload=h,t.src=i.target.result}function h(){var i=r.width||this.width/this.height*r.height,t=r.height||this.height/this.width*r.width;i>300&&(i=300,t=this.height/this.width*300),s.attr({width:i,height:t}),s[0].getContext("2d").drawImage(this,0,0,i,t)}if(t.support){var r=i.$eval(n.ngThumb);if(t.isFile(r.file)&&t.isImage(r.file)){var s=e.find("canvas"),d=new FileReader;d.onload=a,d.readAsDataURL(r.file)}}}}}]).directive("ngThumbnail",["$window",function(i){var t={support:!(!i.FileReader||!i.CanvasRenderingContext2D),isFile:function(t){return angular.isObject(t)&&t instanceof i.File},isImage:function(i){var t="|"+i.type.slice(i.type.lastIndexOf("/")+1)+"|";return-1!=="|jpg|png|jpeg|bmp|gif|".indexOf(t)}};return{restrict:"A",link:function(i,e,n){function a(i){d.onload=h,d.src=i.target.result}function h(){var i=r.width||this.width/this.height*r.height,t=r.height||this.height/this.width*r.width;i>300&&(i=300,t=this.height/this.width*300),$(d).attr({width:i,height:t}),e.append(d)}if(t.support){var r=i.$eval(n.ngThumbnail),s=new FileReader;s.onload=a,s.readAsDataURL(r.file);var d=new Image;d.id="uploadThumbnail"}}}}]);