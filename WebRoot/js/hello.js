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
		baidu : "http://www.baidu.com",
		firstName : "zhang",
		lastName : "dq",
		question : "",
		answer : "请填写问题~",
		counter : 0
	},
	watch : {
		question : function(newValue, oldValue){
			this.answer = "正在输入答案……";
			this.getAnswer();
		}
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
		},
		getAnswer : _.debounce(function(){
			if(this.question.indexOf("?") === -1 && this.question.indexOf("？") === -1){
				this.answer = "请以问号结尾！";
				return;
			}
			this.answert = "获取答案中~请耐心等待~";
			var _this = this;
			axios.get("https://yesno.wtf/api").then(function(response){
				_this.answer = _.capitalize(response.data.answer);
			}).catch(function(error){
				_this.answer = error;
			});
		}, 500),
		greet : function(message){
			if(message){
				alert("Hello, " + message + "!");
			}else{
				alert("FUCK!!!");
			}
		},
		preventDefault : function($event){
			if($event){
				$event.preventDefault();
			}
			alert("hello");
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
		},
		fullName : {
			get : function(){return this.firstName + " " + this.lastName;},
			set : function(newValue){
				var names = newValue.split(" ");
				this.firstName = names[0];
				this.lastName = names[1];
			}
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