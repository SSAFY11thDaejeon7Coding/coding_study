const userNames = document.querySelectorAll('.userName');
userNames.forEach(userName => {
    const nameLength = userName.innerText.length;
    if (nameLength <= 5) {
        userName.classList.add('small');
    } else if (nameLength > 5 && nameLength <= 10) {
        userName.classList.add('medium');
    } else {
        userName.classList.add('large');
    }
});