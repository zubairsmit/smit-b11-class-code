const apiURL = "https://66f91c852a683ce97310ee2f.mockapi.io/api/v1/posts";

function fetchPosts() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => displayData(data))
    .catch((error) => console.log("error", error));
}
fetchPosts();

function displayData(posts) {
  const postsParentDiv = document.getElementById("posts");
  postsParentDiv.innerHTML = "";
  posts.forEach((post) => {
    // console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

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
                            <button class="edit-btn" onclick="updatePost(${post.id})">Edit</button>
                            <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
                        </div>
                        `;

    postsParentDiv.appendChild(postDiv);
  });
}

// =======Create Post=============

document
  .getElementById("createPostForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const avatar = document.getElementById("avatar").value;
    const body = document.getElementById("body").value;

    const newPost = {
      name: name,
      title: title,
      avatar: avatar,
      body: body,
      createdAt: new Date().toISOString(),
    };

    console.log(newPost);

    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });

//   ================Delete=============

function deletePost(id) {
  fetch(`${apiURL}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      alert(`${data.name} successfully deleted`);
      fetchPosts();
    })
    .catch((error) => console.log("error", error));
}

function updatePost(id) {
  fetch(`${apiURL}/${id}`)
    .then((response) => response.json())
    .then((post) => {
      console.log("post", post);
      document.getElementById("create-post").style.display = "none";
      document.getElementById("update-post").style.display = "block";
      document.getElementById("updatePostForm").name.value = post.name;
      document.getElementById("updatePostForm").title.value = post.title;
      document.getElementById("updatePostForm").avatar.value = post.avatar;
      document.getElementById("updatePostForm").body.value = post.body;
    })
    .catch((error) => console.log("error", error));

  document
    .getElementById("updatePostForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("hello i am runnning", id);

      const name = document.getElementById("updatePostForm").name.value;
      const title = document.getElementById("updatePostForm").title.value;
      const avatar = document.getElementById("updatePostForm").avatar.value;
      const body = document.getElementById("updatePostForm").body.value;

      const updatedData = {
        name: name,
        title: title,
        avatar: avatar,
        body: body,
        createdAt: new Date().toISOString(),
      };

      fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(`${data.name} successfully updated`);
          fetchPosts();
          document.getElementById("create-post").style.display = "block";
          document.getElementById("update-post").style.display = "none";
        })
        .catch((error) => console.log(error));

      console.log("data", name, title, avatar, body);
    });
}

// ==============update api call button ==================
