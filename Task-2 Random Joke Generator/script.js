const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const categoryRadios = document.getElementsByName("category");
var selectedCategory;

console.log(categoryRadios);

const getJoke = (option) => {

    jokeContainer.classList.remove("fade")
    const url = `https://v2.jokeapi.dev/joke/${option}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
    console.log(url);
    if (jokeContainer.innerText === undefined) {
        jokeContainer.innerText = 'Loading...';
    }
    jokeContainer.classList.remove("fade")

    try {
        fetch(url)
            .then(data => data.json())
            .then(item => {
                // console.log( item.joke);
                jokeContainer.classList.add("fade");
                if (jokeContainer.innerText === undefined) {
                    jokeContainer.innerText = 'Loading...';
                } else {
                    if (item.type === 'twopart') {
                        jokeContainer.innerText = item.setup;
                    } else {
                        jokeContainer.innerText = item.joke;
                    }
                }

                // jokeContainer.textContent = `${item.joke}`;
            })
    } catch (error) {
        console.log(error);
    }


}

categoryRadios.forEach(radio => {
    radio.addEventListener("click", () => {
        selectedCategory = document.querySelector('input[name="category"]:checked').value;
        getJoke(selectedCategory);
    })
})




btn.addEventListener("click", () => {
    selectedCategory = document.querySelector('input[id="Any"]').value;
    getJoke(selectedCategory);
});

//const categoryRadios = document.querySelectorAll('input[name="category"]');
//const selectedCategoryDisplay = document.getElementById('selectedCategoryDisplay');

// categoryRadios.forEach(radio => {
//         radio.addEventListener('click', function() {
//             const selectedCategory = document.querySelector('input[name="category"]:checked').value;
//             //console.log(selectedCategory);
//         });
//     });


// const url = `https://v2.jokeapi.dev/joke/${selectedCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;


// let getJoke =() => {

//     jokeContainer.classList.remove("fade")
//     fetch(url)
//     .then(data => data.json())
//     .then(item => {
//         // console.log( item.joke);
//         jokeContainer.classList.add("fade")
//         jokeContainer.innerText = item.joke;

//         // jokeContainer.textContent = `${item.joke}`;
//     })
//     .catch(error => {
//         console.error('Error fetching joke:', error);
//     });

// }

// btn.addEventListener("click", getJoke);
// // cat.addEventListener("click", getJoke);
// getJoke();

// let getJoke = () => {
//     //jokeContainer.classList.remove("fade");

//     categoryRadios.forEach(radio => {
//         radio.addEventListener('click', function () {
//             const selectedCategory = document.querySelector('input[name="category"]:checked').value;
//             //console.log(selectedCategory);

//             const url = `https://v2.jokeapi.dev/joke/${selectedCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
//             console.log(url);
//             fetch(url)
//                 .then(data => data.json())
//                 .then(item => {
//                     //jokeContainer.classList.add("fade");
//                     jokeContainer.innerText = item.joke;
//                 })
//                 .catch(error => {
//                     console.error('Error fetching joke:', error);
//                 });
//         });
//     });
// }

// btn.addEventListener("click", getJoke);

// getJoke();