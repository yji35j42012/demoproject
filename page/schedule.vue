<template>

	<div class="content_group">
		<div class="content_item" v-for="(item, index) in shwoData" :key="index">
			<div class="content_item_info">
				<div class="content_item_title">{{ item.title }}</div>
				<div class="content_item_name" :data-txt="item.namePic" :style="'--nameBg:' + item.nameColor">{{
			item.name
		}}</div>
				<div class="content_item_detail">{{ item.detail }}</div>
			</div>
			<div class="content_item_pic" v-if="item.picSrc">
				<img :src="item.picSrc" alt="">
			</div>
			<div class="content_item_foot">
				<ul class="tag">
					<template v-if="item.tag.length > 3">
						<li class="tag_item">{{ item.tag[0] }}</li>
						<li class="tag_item">{{ item.tag[1] }}</li>
						<li class="tag_item">{{ item.tag[2] }}</li>
						<li class="tag_item _num">+{{ item.tag.length - 3 }}</li>
					</template>
					<template v-else>
						<li class="tag_item" v-for="(itemTab, index) in item.tag">{{ itemTab }}</li>
					</template>
				</ul>
				<div class="iconBox">
					<i class="iconBox_icon icon_thumb" :data-num="item.thumb"></i>
					<i class="iconBox_icon icon_collect"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
module.exports={
	data() {
		return {
			dataList: [
				{
					id: 0,
					title: "我很喜歡這次一加一推薦的......",
					name: "壹人粉",
					namePic: "1+1",
					nameColor: "rgba(145, 166, 85, 1)",
					detail: "一加一真的是一生推，我覺得他們拍的影片都品味，景點安排也很舒服，不知道...",
					tag: ["自由行", "六日遊", "小資輕旅", "測試"],
					thumb: 256,
					picSrc: "",
				},
				{
					id: 1,
					title: "這次去沖繩遇到kar特！",
					name: "網紅我最紅",
					namePic: "網",
					nameColor: "rgba(255, 8, 8, 1)",
					detail: "我是你們最愛的網紅！這次太幸運拉，居然偶遇Kar特，他人超好的還願意跟我合照......",
					tag: ["輕旅行", "沖繩", "網紅", "假資料1", "假資料2", "假資料3", "假資料4", "假資料5", "假資料6"],
					thumb: 500,
					picSrc: "",
				},
				{
					id: 2,
					title: "那個女生今天到我家的店？？",
					name: "這個男生",
					namePic: "boy",
					nameColor: "rgba(66, 25, 107, 1)",
					detail: "哈囉各位大大，有人知道那個女生這次影片中的店是我家的店嗎？......",
					tag: ["請益", "那個女生", "提問", "假資料1", "假資料2",],
					thumb: 50,
					picSrc: "/images/schedule_pic1.jpg",
				},
				{
					id: 3,
					title: "大家喜歡去趣app嗎？",
					name: "去趣小幫手",
					namePic: "",
					nameColor: "rgba(0, 157, 223, 1)",
					detail: "我是去趣小幫手，不知道大家使用去趣app還習慣嗎？......",
					tag: ["請益", "小助手", "規劃行程", "假資料1", "假資料2",],
					thumb: 520,
					picSrc: "/images/schedule_pic2.jpg",
				},
			]
		};
	},
	mounted() {
		// console.log(store.state.nowPage);
	},
	computed: {
		shwoData() {
			let objData=[];
			let filter=this.$store.state.inpFilter;
			if (filter!=="") {
				this.dataList.forEach(element => {
					if (element.title.indexOf(filter)!==-1) {
						objData.push(element);
					}
				});
			} else {
				objData=this.dataList
			}
			return objData;
		}
	},
	methods: {
	},
};
</script>