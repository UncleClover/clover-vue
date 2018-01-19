Vue.component("channel-list", {
	template : "<li>这是渠道列表</li>"
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