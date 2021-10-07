<template>
   <div>
       <svg class="Ellipse_1">
		    <ellipse id="Ellipse_1" rx="3" ry="3" cx="11" cy="10.5">
		</ellipse>
	</svg>
    <svg class="Ellipse_2">
		    <ellipse id="Ellipse_2" rx="3" ry="3" cx="11" cy="70">
		</ellipse>
	</svg>
   </div>
</template>

<script>
export default {
    name:"DottedBullet"

}
</script>

<style>

#Ellipse_1 {
		fill: rgba(26,3,3,1);
		stroke: rgba(112,112,112,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.Ellipse_1 {
		position: absolute;
		overflow: visible;
		width: 11px;
		height: 10px;
		/* left: 421px;
		top: 301px; */
	}
	#Ellipse_2 {
		fill: rgba(26,3,3,1);
		stroke: rgba(112,112,112,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.Ellipse_2 {
		position: absolute;
		overflow: visible;
		width: 10px;
		height: 10px;
		/* left: 421px;
		top: 439px; */
	}
</style>