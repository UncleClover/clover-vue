Vue.component("channel-list", {
	props : ["user"],
	template : "<li>{{user.name}}-{{user.age}}</li>"
});

var hello = new Vue({
	el : "#hello",
	data : {
		message : "hello",
		users : [ {
			name : "zhangdq",
			age : "27"
		}, {
			name : "clover",
			age : "27"
		}, {
			name : "zhang",
			age : "23"
		} ],
		name : "zhangdq"
	},
	methods : {
		changeName : function() {
			this.name = "UncleClover";
		}
	}
});