//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const button = document.querySelector('input[type="button"]');

	button.addEventListener("click", function(){
		const colorSelect = document.getElementById('colorSelect');
		const selectedIndex = colorSelect.selectedIndex;

		if(selectedIndex !== -1){
			colorSelect.options[selectedIndex].remove();
		}
	});
});