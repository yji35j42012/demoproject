<template>
	<div class="discussion_head">
		<button class="icon_back" @click="goExplore"></button>
		<div class="discussion_title">{{ disData.headTitle }}</div>
		<button class="icon_bar"></button>
	</div>
	<div class="discussion_body">
		<div class="discussion_h1">
			<span>{{ disData.title }}</span>
			<div class="discussion_iconBox">
				<button class="icon_heart"></button>
				<button class="icon_collect on"></button>
			</div>
		</div>
		<div class="discussion_identity">
			<div class="discussion_identity_pic" :data-txt="disData.namePic" :style="'--bg:' + disData.nameColor"></div>
			<div class="discussion_identity_info">
				<div class="name">{{ disData.name }}</div>
				<div class="date">{{ disData.date }}</div>
			</div>
		</div>
		<div class="discussion_content">
			<span>文章內容</span>
			<textarea readonly>{{ disData.detail }}</textarea>
		</div>
		<div class="discussion_func">
			<button :class="['oldnew', isNew ? 'on' : '']" @click="oldnew">新到舊</button>
			<button :class="['oldnew', isNew ? '' : 'on']" @click="oldnew">舊到新</button>
		</div>
		<div class="discussion_group">
			<div class="discussion_item" v-for="(item, index) in showMsg" :key="index">
				<div class="pic" :data-txt="item.namePic" :style="'--bg:' + item.nameBg + ';--co:' + item.nameTx + ';'">
				</div>
				<div class="discussion_item_info">
					<div class="title">{{ item.title }}</div>
					<div class="date">{{ item.date }}</div>
					<div class="txt">{{ item.detail }}</div>
				</div>
				<div class="discussion_item_icon">
					<span v-if="item.isHeart">{{ item.heartCount }}</span>
					<button :class="['icon_heart', item.isHeart ? 'on' : '']"></button>
				</div>
			</div>
		</div>
	</div>
	<div class="discussion_footer">
		<input type="text" placeholder="留言" v-model="msg">
		<button class="icon_send" @click="send"></button>
	</div>
</template>

<script>
module.exports={
	data() {
		return {
			disData: {},
			msg: "",
			isNew: true,
		};
	},
	mounted() {
		if (this.$store.state.discussionData==null) {
			this.$router.push('/explore');
		} else {
			this.disData=this.$store.state.discussionData
		}

	},
	computed: {
		showMsg() {
			if(!this.disData.msg) return
			if (this.isNew) {
				return [...this.disData.msg].reverse();
			} else {
				return this.disData.msg
			}
		}
	},
	methods: {
		oldnew() {
			this.isNew=!this.isNew
		},
		goExplore() {
			this.$router.push('/explore');
		},
		send() {
			if (this.msg=="") return
			let p=this.$store.state.discussionPage;
			let lsData;
			let objData;
			let i=this.$store.state.discussionData.id;
			if (p=='explore') {
				lsData=localStorage.getItem('exploreData');
			} else if (p=='schedule') {
				lsData=localStorage.getItem('scheduleData');
			} else if (p=='discuss') {
				lsData=localStorage.getItem('discussData');
			}
			objData=JSON.parse(lsData);
			objData.forEach(element => {
				if (element.id==i) {
					console.log('adsfasdf', element);
					element.msg.push({
						namePic: "hi",
						nameBg: "rgba(246, 222, 151, 1)",
						nameTx: "rgba(0, 0, 0, 1)",
						title: "五條悟",
						date: "2024/09/22",
						detail: this.msg,
						heartCount: 0,
						isHeart: false
					})
					this.disData.msg.push({
						namePic: "hi",
						nameBg: "rgba(246, 222, 151, 1)",
						nameTx: "rgba(0, 0, 0, 1)",
						title: "五條悟",
						date: "2024/09/22",
						detail: this.msg,
						heartCount: 0,
						isHeart: false
					})
				}
			});
			if (p=='explore') {
				localStorage.setItem('exploreData', JSON.stringify(objData));
			} else if (p=='schedule') {
				localStorage.setItem('scheduleData', JSON.stringify(objData));
			} else if (p=='discuss') {
				localStorage.setItem('discussData', JSON.stringify(objData));
			}
		}
	},
};
</script>