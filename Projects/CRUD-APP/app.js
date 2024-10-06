const apiURL = 'https://66f91c852a683ce97310ee2f.mockapi.io/api/v1/posts'



function fetchPosts() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log('error', error))
}
fetchPosts();

function displayData(posts) {
    const postsParentDiv = document.getElementById('posts');
    postsParentDiv.innerHTML = '';
    posts.forEach(post => {
        // console.log(post)
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
                        <div class="post-header">
                            <img src="${post.avatar}" alt="Avatar">
                            <div>
                                <h3>${post.name}</h3>
                                <small>${post.createdAt}</small>
                            </div>
                        </div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        <div class="actions">
                            <button class="edit-btn" onclick="editPost(1)">Edit</button>
                            <button class="delete-btn" onclick="deletePost(1)">Delete</button>
                        </div>
                        `

        postsParentDiv.appendChild(postDiv)
    });
}


// =======Create Post=============

document.getElementById('createPostForm').addEventListener('submit', function (e) {
    e.preventDefault()

    const name = document.getElementById('name').value
    const title = document.getElementById('title').value
    const avatar = document.getElementById('avatar').value
    const body = document.getElementById('body').value

    const newPost = {
        name: name,
        title: title,
        avatar: avatar,
        body: body,
        createdAt: new Date().toISOString()
    }

    console.log(newPost)

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

})
