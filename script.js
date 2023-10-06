document.getElementById('button-random-dog').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.message;
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
    })
    .catch(error => {
        console.error('Error fetching the dog image:', error);
    });
});


// Function to show a random dog image
document.getElementById('button-random-dog').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
        })
        .catch(error => {
            console.error('Error fetching the dog image:', error);
        });
});

// Function to show a breed-specific image
document.getElementById('button-show-breed').addEventListener('click', function() {
    const breed = document.getElementById('input-breed').value.trim();
    if (breed) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const imageUrl = data.message;
                    const breedResultDiv = document.getElementById('breed-result');
                    breedResultDiv.innerHTML = `<img src="${imageUrl}" alt="${breed}">`;
                } else {
                    showError();
                }
            })
            .catch(error => {
                showError();
            });
    } else {
        showError();
    }
});

function showError() {
    const breedResultDiv = document.getElementById('breed-result');
    breedResultDiv.innerHTML = '<p>Breed not found!</p>';
}
