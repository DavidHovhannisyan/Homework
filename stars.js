<script>
const astx = function(b) {
if(b===0){
return "";
	}
return "*"+astx(b-1);
};
const bacat = function (b) {
if (b===0){
return "";
}
return " " + bacat(b-1);
};
const d = function (b,c) {
if(b===0){
return "";
	}
return bacat(b)+astx(c)+"\n"+d(b-1,c+2);
};
const triangleStars = function (b){
if(b===0){
return "";
	}
console.log(d(a,1))
};
triangleStars(30);
</script>
