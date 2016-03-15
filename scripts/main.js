var likeCount = 0;
var likes = document.querySelector('.likeButton');
var resetLikes = document.querySelector('.resetLikeButton');

likes.addEventListener('click', likeCounter);
function likeCounter() {
	likeCount++;
	if(likeCount === 1) {
		likes.innerHTML = '1 like';
	} else {
	likes.innerHTML = likeCount+' likes';
	}
}

resetLikes.addEventListener('click', resetLikeCounter);
function resetLikeCounter() {
	likeCount = 0;
	likes.innerHTML = '0 likes';
}