<template>
	<div class="create_head">
		<button class="icon_close" @click="back"></button>
		<div class="create_title">發文-自由討論區</div>
		<button class="icon_next" @click="goDiscussion"></button>
	</div>
	<div class="create_body">
		<div class="create_identity">
			<div class="create_identity_pic">
				<img src="/images/id_pic.svg" alt="">
			</div>
			<div class="create_identity_info">
				<div class="name">選擇發文身份</div>
				<div class="date">2024/09/22</div>
			</div>
		</div>
		<label class="create_h1">
			<input type="text" placeholder="文章標題" v-model="createTitle">
		</label>
		<label class="create_text">
			<span>文章內容</span>
			<textarea name="" id="" cols="30" rows="10" placeholder="內文敘述" v-model="createText"></textarea>
		</label>
		<label class="create_hash">
			<span>標籤</span>
			<input type="text" placeholder="輸入標籤" v-model="createHash">
		</label>

	</div>
	<div class="create_footer">
		<img src="/images/create_footer.jpg" alt="">
	</div>
</template>

<script>
module.exports={
	data() {
		return {
			createTitle: "",
			createText: "",
			createHash: "",
		};
	},
	mounted() {
	},
	computed: {
	},
	methods: {

		back() {
			history.go(-1);
		},
		goDiscussion() {
			let exploreLsData=localStorage.getItem('exploreData');
			let exploreObj=JSON.parse(exploreLsData);
			let tagArr=this.createHash.split(",")
			if (tagArr.length!==0) {
				let tagsData=this.$store.state.tags;
				tagArr.forEach(outItem => {
					if (tagsData.indexOf(outItem)==-1) {
						this.$store.dispatch('setTags', outItem)
					}
				});
			}
			let newObj={
				id: exploreObj.length,
				title: this.createTitle,
				name: "發文身份",
				namePic: "",
				nameColor: "rgba(29, 115, 244, 1)",
				detail: this.createText,
				tag: tagArr,
				thumb: 0,
				picSrc: "",
				msg: []
			}
			exploreObj.push(newObj)
			localStorage.setItem('exploreData', JSON.stringify(exploreObj));
			this.$store.dispatch('setDiscussionData', newObj);
			this.$store.dispatch('setDiscussionPage', 'explore');
			this.$router.push('/discussion');
		}
	},
};
</script>