document.getElementById('register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cardContainer').classList.add('flip');

    setTimeout(function() {
        window.location.href = 'signup.html';
    }, 600); // Wait for the flip animation before navigating
});     
