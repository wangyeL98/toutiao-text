"use strict";(self["webpackChunktoutiao_mob"]=self["webpackChunktoutiao_mob"]||[]).push([[55],{1055:function(t,e,i){i.r(e),i.d(e,{default:function(){return ot}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-container"},[e("van-nav-bar",{staticClass:"page-nav-bar",attrs:{"left-arrow":"",title:"黑马头条"},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"main-wrap"},[t.isLoading?e("div",{staticClass:"loading-wrap"},[e("van-loading",{attrs:{color:"#3296fa",vertical:""}},[t._v("加载中")])],1):t.detailObj.aut_name?e("div",{staticClass:"article-detail"},[e("h1",{staticClass:"article-title"},[t._v(t._s(t.detailObj.title))]),e("van-cell",{staticClass:"user-info",attrs:{center:"",border:!1}},[e("van-image",{staticClass:"avatar",attrs:{slot:"icon",round:"",fit:"cover",src:t.detailObj.aut_photo},slot:"icon"}),e("div",{staticClass:"user-name",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.detailObj.aut_name))]),e("div",{staticClass:"publish-date",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.detailObj.pubdate))]),e("Followed",{staticClass:"follow-btn",attrs:{aut_id:t.detailObj.aut_id},model:{value:t.detailObj.is_followed,callback:function(e){t.$set(t.detailObj,"is_followed",e)},expression:"detailObj.is_followed"}})],1),e("div",{ref:"article",staticClass:"article-content markdown-body",domProps:{innerHTML:t._s(t.detailObj.content)}}),e("van-divider",[t._v("正文结束")]),e("Comment",{attrs:{articleId:t.articleId,list:t.postList},on:{allCount:function(e){t.count=e},open:t.openfn}}),e("div",{staticClass:"article-bottom"},[e("van-button",{staticClass:"comment-btn",attrs:{type:"default",round:"",size:"small"},on:{click:function(e){t.isShow=!0}}},[t._v("写评论")]),e("van-icon",{attrs:{name:"comment-o",badge:t.count.total_count,color:"#777"}}),e("Save",{attrs:{articleId:t.articleId},model:{value:t.detailObj.is_collected,callback:function(e){t.$set(t.detailObj,"is_collected",e)},expression:"detailObj.is_collected"}}),e("Love",{attrs:{articleId:t.articleId},model:{value:t.detailObj.attitude,callback:function(e){t.$set(t.detailObj,"attitude",e)},expression:"detailObj.attitude"}}),e("van-icon",{attrs:{name:"share",color:"#777777"}})],1),t.show?e("van-popup",{style:{height:"90%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("resComment",{attrs:{item:t.userInfo,articleId:t.articleId},on:{close:function(e){t.show=!1}}})],1):t._e(),e("van-popup",{attrs:{position:"bottom"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[e("PostComment",{attrs:{articleId:t.articleId},on:{changeData:t.chagneFn}})],1)],1):404===t.statusd?e("div",{staticClass:"error-wrap"},[e("van-icon",{attrs:{name:"failure"}}),e("p",{staticClass:"text"},[t._v("该资源不存在或已删除！")])],1):e("div",{staticClass:"error-wrap"},[e("van-icon",{attrs:{name:"failure"}}),e("p",{staticClass:"text"},[t._v("内容加载失败！")]),e("van-button",{staticClass:"retry-btn",on:{click:t.loading}},[t._v("点击重试")])],1)])],1)},s=[],o=(i(7658),i(541),function(){var t=this,e=t._self._c;return e("div",{staticClass:"res-comment"},[e("van-nav-bar",[e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.item.reply_count>0?t.item.reply_count+"条回复":"暂无回复"))]),e("van-icon",{attrs:{slot:"left",name:"cross"},on:{click:function(e){return t.$emit("close")}},slot:"left"})],1),e("div",{staticClass:"fix"},[e("commentUser",{attrs:{item:t.item}}),e("van-cell",{attrs:{title:"全部回复"}}),e("commentList",{attrs:{articleId:t.item.com_id,type:"c",list:t.replyComment}})],1),e("div",{staticClass:"btn"},[e("van-button",{on:{click:function(e){t.isShow=!0}}},[t._v("点击回复")])],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[e("PostComment",{attrs:{articleId:t.item.com_id,art_id:t.articleId},on:{changeData:t.changeFn}})],1)],1)}),n=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-comment"},[e("van-field",{staticClass:"post-field",attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"50",placeholder:"优质评论将会被优先展示","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),e("van-button",{attrs:{type:"primary",size:"small",disabled:!t.message.length},on:{click:t.post}},[t._v("发布")])],1)},r=[],c=i(435);const d=t=>(0,c.Z)({url:"/v1_0/comments",method:"GET",params:t}),u=t=>(0,c.Z)({url:"/v1_0/comment/likings",method:"POST",data:{target:t}}),m=t=>(0,c.Z)({url:`/v1_0/comment/likings/${t}`,method:"DELETE"}),h=t=>(0,c.Z)({url:"/v1_0/comments",method:"POST",data:t});var p={name:"PostComment",components:{},props:{articleId:{type:[Number,String,Object],required:!0},art_id:{type:[Number,String,Object],default:null}},data(){return{message:""}},computed:{},watch:{},created(){},mounted(){},methods:{async post(){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0});try{const{data:t}=await h({target:this.articleId.toString(),content:this.message,art_id:this.art_id});this.message="",this.$emit("changeData",t.data),this.$toast.success("发布成功")}catch(t){this.$toast("发布失败")}}}},v=p,f=i(1001),_=(0,f.Z)(v,l,r,!1,null,"043233f2",null),b=_.exports,g=function(){var t=this,e=t._self._c;return e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"错误","immediate-check":!1},on:{load:t.onLoad,"update:error":function(e){t.error=e}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(i,a){return e("Comment",{key:a,attrs:{item:i},on:{open:function(e){return t.$emit("open",e)}}})})),1)},C=[],w=function(){var t=this,e=t._self._c;return e("van-cell",{staticClass:"comment-item"},[e("van-image",{staticClass:"avatar",attrs:{slot:"icon",round:"",fit:"cover",src:t.item.aut_photo},slot:"icon"}),e("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"user-name"},[t._v(t._s(t.item.aut_name))]),e("van-button",{staticClass:"like-btn",class:{like:t.item.is_liking},attrs:{loading:t.isLoading,icon:t.item.is_liking?"good-job":"good-job-o"},on:{click:t.loadingComment}},[t._v(t._s(t.item.like_count||"赞"))])],1),e("div",{attrs:{slot:"label"},slot:"label"},[e("p",{staticClass:"comment-content"},[t._v(t._s(t.item.content))]),e("div",{staticClass:"bottom-info"},[e("span",{staticClass:"comment-pubdate"},[t._v(t._s(t._f("dealtime")(t.item.pubdate)))]),e("van-button",{staticClass:"reply-btn",attrs:{round:""},on:{click:function(e){return t.$emit("open",t.item)}}},[t._v("回复 "+t._s(t.item.reply_count))])],1)])],1)},y=[],k={name:"CommentItem",components:{},props:{item:{type:Object,required:!0}},data(){return{isLoading:!1}},computed:{},watch:{},created(){},mounted(){},methods:{async loadingComment(){this.isLoading=!0;try{this.item.is_liking?await m(this.item.com_id):await u(this.item.com_id),this.item.is_liking=!this.item.is_liking,this.item.is_liking?this.item.like_count++:this.item.like_count--}catch(t){this.$toast("错误")}this.isLoading=!1}}},j=k,I=(0,f.Z)(j,w,y,!1,null,"5686942c",null),O=I.exports,S={name:"CommentIndex",components:{Comment:O},data(){return{finished:!1,loading:!1,offset:null,limit:10,error:!1}},created(){this.loading=!0,this.onLoad()},props:{articleId:{type:[Number,String,Object],required:!0},list:{type:Array,default:()=>[]},type:{type:String,default:"a"}},methods:{async onLoad(){try{const{data:t}=await d({type:this.type,source:this.articleId.toString(),offset:this.offset,limit:this.limit}),{results:e}=t.data;this.list.push(...e),this.$emit("allCount",t.data),this.loading=!1,e.length?this.offset=t.data.last_id:this.finished=!0}catch(t){this.error=!0,this.$toast("错误")}}}},$=S,x=(0,f.Z)($,g,C,!1,null,null,null),L=x.exports,Z={name:"ResponseComment",components:{commentUser:O,commentList:L,PostComment:b},data(){return{isShow:!1,replyComment:[]}},props:{item:{type:Object,required:!0},articleId:{type:[Number,String,Object],required:!0}},methods:{changeFn(t){this.isShow=!1,this.item.reply_count++,this.replyComment.unshift(t.new_obj)}}},E=Z,T=(0,f.Z)(E,o,n,!1,null,"17d87d7c",null),q=T.exports,P=function(){var t=this,e=t._self._c;return t.isFollowed?e("van-button",{staticClass:"follow-btn",attrs:{round:"",size:"small",loading:t.isflag},on:{click:t.addfollow}},[t._v("已关注")]):e("van-button",{staticClass:"follow-btn",attrs:{badge:"info",color:"#3296fa",round:"",size:"small",icon:"plus",loading:t.isflag},on:{click:t.addfollow}},[t._v("关注")])},F=[],N=i(2900),D={model:{prop:"isFollowed",event:"change"},name:"FollowIndex",data(){return{isflag:!1}},props:{isFollowed:{type:Boolean,required:!0},aut_id:{type:[Number,String,Object],required:!0}},methods:{async addfollow(){this.isflag=!0;try{this.isFollowed?await(0,N.ei)(this.aut_id):await(0,N.oK)(this.aut_id),this.$emit("change",!this.isFollowed)}catch(t){this.$toast("错误")}this.isflag=!1}}},z=D,G=(0,f.Z)(z,P,F,!1,null,null,null),A=G.exports;const B=t=>(0,c.Z)({url:`/v1_0/articles/${t}`,method:"GET"});var H=i(6471),K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"save-container"},[e("van-icon",{attrs:{name:t.isCollect?"star":"star-o",color:t.isCollect?"#ffa500":"#777"},on:{click:t.save}})],1)},U=[],M={name:"SaveIndex",data(){return{sname:"star-o"}},model:{prop:"isCollect",event:"change"},props:{articleId:{type:[Number,String,Object],required:!0},isCollect:{type:Boolean,required:!0}},methods:{async save(){try{this.isCollect?(await(0,N.t5)(this.articleId),this.$toast("取消收藏")):(await(0,N.j8)(this.articleId),this.$toast("收藏成功")),this.$emit("change",!this.isCollect)}catch(t){this.$toast("错误")}}}},R=M,V=(0,f.Z)(R,K,U,!1,null,"3bd8db31",null),W=V.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"love-container"},[e("van-icon",{attrs:{color:1===t.attitude?"red":"#777",name:1===t.attitude?"good-job":"good-job-o"},on:{click:t.love}})],1)},J=[],Q={model:{prop:"attitude",event:"change"},name:"LoveIndex",props:{articleId:{type:[Number,String,Object],required:!0},attitude:{type:Number,required:!0}},methods:{async love(){try{1===this.attitude?(await(0,N.N2)(this.articleId),this.$toast("取消点赞"),this.$emit("change",0)):(await(0,N.qB)(this.articleId),this.$toast("点赞成功"),this.$emit("change",1))}catch(t){this.$toast("错误")}}}},X=Q,tt=(0,f.Z)(X,Y,J,!1,null,null,null),et=tt.exports,it={name:"ArticleIndex",components:{Followed:A,Save:W,Love:et,Comment:L,PostComment:b,resComment:q},props:{articleId:{type:[Number,String,Object],required:!0}},data(){return{isLoading:!0,detailObj:{},statusd:0,count:0,isShow:!1,postList:[],show:!1,userInfo:{}}},computed:{},watch:{},created(){this.loading()},mounted(){},methods:{async loading(){this.isLoading=!0;try{const{data:t}=await B(this.articleId);this.detailObj=t.data,setTimeout((()=>{this.checkpro()}),10),this.isLoading=!1}catch(t){this.isLoading=!1,t.response&&404===t.response.status&&(this.statusd=404),this.$toast("未知错误，请重新刷新")}},onClickLeft(){this.$router.back()},checkpro(){const t=this.$refs.article,e=t.querySelectorAll("img"),i=[];e.forEach(((t,e)=>{i.push(t.src),t.onclick=function(){(0,H.Z)({images:i,startPosition:e})}}))},chagneFn(t){this.count.total_count++,this.isShow=!1,this.postList.unshift(t.new_obj)},openfn(t){this.show=!0,this.userInfo=t}}},at=it,st=(0,f.Z)(at,a,s,!1,null,"ba68980a",null),ot=st.exports},2900:function(t,e,i){i.d(e,{N2:function(){return m},Yu:function(){return n},bG:function(){return h},ei:function(){return r},it:function(){return p},j8:function(){return c},lW:function(){return o},oK:function(){return l},qB:function(){return u},t5:function(){return d},vV:function(){return v},x4:function(){return s}});var a=i(435);const s=t=>(0,a.Z)({url:"/v1_0/authorizations",method:"POST",data:t}),o=t=>(0,a.Z)({url:`/v1_0/sms/codes/${t}`,method:"GET"}),n=()=>(0,a.Z)({url:"/v1_0/user",method:"GET"}),l=t=>(0,a.Z)({url:"/v1_0/user/followings",method:"POSt",data:{target:t}}),r=t=>(0,a.Z)({url:`/v1_0/user/followings/${t}`,method:"DELETE"}),c=t=>(0,a.Z)({url:"/v1_0/article/collections",method:"POST",data:{target:t}}),d=t=>(0,a.Z)({url:`/v1_0/article/collections/${t}`,method:"DELETE"}),u=t=>(0,a.Z)({url:"/v1_0/article/likings",method:"POST",data:{target:t}}),m=t=>(0,a.Z)({url:`/v1_0/article/likings/${t}`,method:"DELETE"}),h=()=>(0,a.Z)({url:"/v1_0/user/profile",method:"GET"}),p=t=>(0,a.Z)({url:"/v1_0/user/profile",method:"PATCH",data:t}),v=t=>(0,a.Z)({url:"/v1_0/user/photo",method:"PATCH",data:t})}}]);
//# sourceMappingURL=55.e69db834.js.map