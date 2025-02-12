function typeEffect(element, text, speed = 40) {
	let index = 0;
	function type() {
		if (index < text.length) {
			element.innerHTML += text.charAt(index);
			index++;
			setTimeout(type, speed);
		}
	}
	type();
}
// Typing effect for heading (starts immediately)
const heading = document.getElementById("heading");
typeEffect(heading, heading.dataset.text, 40);
// Observer for paragraph typing when visible
const paragraphs = document.querySelectorAll(".typing-effect");
const observer = new IntersectionObserver(entries => {
	entries.forEach((entry, index) => {
		if (entry.isIntersecting && !entry.target.dataset.typed) {
			entry.target.dataset.typed = "true"; // Prevent re-trigger
			entry.target.style.opacity = "1"; // Fade in effect
			setTimeout(() => {
				typeEffect(entry.target, entry.target.dataset.text, 40);
			}, index * 1500); // Delay each line typing for better effect
		}
	});
}, {
	threshold: 0.5
});
paragraphs.forEach(p => observer.observe(p));
