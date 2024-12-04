<template>
	<div class="leftNav">
		<button class="leftNav_back" @click="closeLeftNav"></button>
		<label class="searchInp">
			<i class="searchInp_icon"></i>
			<input type="text" placeholder="文章搜尋" v-model="filterInp">
		</label>
		<div class="leftNav_title">推薦標籤</div>
		<ul class="leftNav_group">
			<li class="leftNav_item" v-for="(item, index) in showTag" :key="index"># {{ item }}</li>
		</ul>
	</div>
</template>

<script>
module.exports={
	data() {
		return {
			filterInp: "",
			navList: []
		};
	},
	mounted() {
		this.navList=this.$store.state.tags;
		// console.log(store.state.nowPage);
	},

	computed: {
		showTag() {
			let showObj=[]
			if (this.filterInp!=="") {
				this.navList.forEach(element => {
					if (element.indexOf(this.filterInp)!==-1) {
						showObj.push(element);
					}
				});
			} else {
				showObj=this.navList
			}


			return showObj
		}
	},
	methods: {
		closeLeftNav() {
			this.$emit('close-leftnav', false);
		}
	},
};
</script>