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
					title: "韓國行五天六夜推薦景點？？",
					name: "煞氣的鯊魚",
					namePic: "",
					nameColor: "rgba(29, 115, 244, 1)",
					detail: "哈囉各位大大，本鯊魚這次要到韓國吃生章魚腳，不知道大家有沒有推薦的餐......",
					tag: ["自由行", "六日遊", "小資輕旅", "假資料1"],
					thumb: 256,
					picSrc: "/images/discuss_pic1.jpg",
				},
				{
					id: 1,
					title: "台北小吃一日遊行程安排",
					name: "網紅我最紅",
					namePic: "網",
					nameColor: "rgba(255, 8, 8, 1)",
					detail: "我是你們最愛的網紅！紛絲好久不見，今天要為大家帶來的是......",
					tag: ["輕旅行", "府中站", "在地小吃", "假資料1", "假資料2", "假資料3", "假資料4", "假資料5", "假資料6"],
					thumb: 500,
					picSrc: "/images/discuss_pic2.jpg",
				},
				{
					id: 2,
					title: "請問大家如何規劃行程的呢？",
					name: "匿名",
					namePic: "",
					nameColor: "rgba(217, 217, 217, 1)",
					detail: "哈囉各位大大，我是安排行程新手，最近剛出新手村......",
					tag: ["請益", "個人行", "規劃行程", "假資料1", "假資料2",],
					thumb: 50,
					picSrc: "",
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