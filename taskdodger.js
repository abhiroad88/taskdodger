function Excuse() {
	
	var Dog = ['Nic', 'Matt', 'Daphne', 'Abi', 'Lottie', 'James', 'Emma', 'Katinka', 'Slack', 'Bynder', 'Carl', 'COVID-19', 'Fucking Trello', 'Photoshop', 'Illustrator', 'Premiere', 'Google Docs', 'Claudia', 'Boris'];
	var ate = ['killed', 'destroyed', 'deleted', 'erased', 'judged', 'stole', 'disliked', 'hated', 'gave away', 'plagiarised', 'shot down', 'barfed on', 'stole', 'spilled tea on', 'made me change', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'dunked on'];
	var myHomework = ['vibe', 'task', 'idea', 'design', 'plan', 'mood', 'face', 'self-esteem', 'file', 'dreams', 'poster', 'dreams', 'laptop', 'computer', 'momentum', 'slide deck', 'presentation', 'notes', 'portfolio'];
	
	var who = Dog[Math.round(Math.random()*(Dog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>' + who + ' ' + did + '<br> my ' + what + '.</div>'
	
}
