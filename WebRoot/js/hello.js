Vue.component("channel-list", {
	props : ["user"],
	template : "<li>{{user.name}}-{{user.age}}</li>"
});

var users =  [ {
	name : "zhangdq",
	age : "27"
}, {
	name : "clover",
	age : "27"
}, {
	name : "zhang",
	age : "23"
} ];

// 我的名字
var clover = {name : "zhangdq"};
// 禁止响应，此时v-model不能使用
// Object.freeze(clover);

var sex = ["男", "女"];

var hello = new Vue({
	el : "#hello",
	data : {
		message : "hello",
		rawHtml : "<span style='color:red'>我是谁？</span>",
		users : users,
		name : clover,
		sex : sex,
		show : true,
		hide : false,
		baidu : "http://www.baidu.com"
	},
	methods : {
		changeName : function() {
			this.name.name = "UncleClover";
		},
		changeSex : function(){
			this.sex = ["boy", "girl"];
		},
		reverseMessageMethod : function(){
			return this.message.split("").reverse().join("") + Date.now();
		}
	},
	created : function(){
		console.log(this.message);
	},
	updated : function(){
		console.log("sex is " + this.sex);
	},
	computed : {
		reverseMessage : function(){
			return this.message.split("").reverse().join("") + Date.now();
		}
	}
});

var unwatch = hello.$watch(function(){
	return this.sex[0];
}, function(newValue, oldValue){
	console.log(newValue);
	console.log(oldValue);
});

// $watch返回一个取消观察函数
// unwatch();