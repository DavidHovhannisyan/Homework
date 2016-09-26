<script>
const a = function(c) {
	
if(c<0){
	return "I don't know";
}
	if (c===0)

	{

	return 1;
	}

	return c * a(c-1);


};

const factorial = function(c){
console.log(a(c))
};



factorial(10);
</script>