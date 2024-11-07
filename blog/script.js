var userValTitle= document.getElementById('title');
var userValDesc= document.getElementById('desc');
var listings = document.getElementById('list');

//blogs object
var blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []; 

//BlogPost constructor
function BlogPost(title, desc) {
  this.title = title;
  this.desc = desc;
}

printAllBlog(blogPosts);

//create
function createBlog() {
  const title = userValTitle.value; 
  const desc = userValDesc.value;   

  console.log(title,desc);
  
  if (title && desc) {
//creating post
    const newPost = new BlogPost(title, desc);

//getting all from local storage
    blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

//adding new to old
    blogPosts.push(newPost);

    //saving back
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    // displaying all
    printAllBlog(blogPosts);
    
      //clearing field after changes done
      userValTitle.value = "";
      userValDesc.value = "";

  } else {
    alert("Please enter both title and description.");
  }
}



//printing all blogs
function printAllBlog(blogPosts) {

  listings.innerHTML = ""; //clearing if any showed

  blogPosts.forEach((post, index) => {
    //creating whole thing to print it out
    var blog = document.createElement('div');
    blog.innerHTML = `
    <div class="list-group gap-0 row-gap-3">
        <div class="list-group-item list-group-item-action mt-4 border-start-0 border-top-0 border-end-0" aria-current="true">
            <div class="d-flex w-80 justify-content-between">
                <h5 class="mb-1">${post.title}</h5>
            </div>
            <p class="mb-1" id="blog-${index}"> ${post.desc}</p>
            <div class="d-flex justify-content-end">
                <a href="#" data-code="${index}" class="fullview-link link-primary link-underline-opacity link-underline-opacity-100-hover p-2">full view</a>
                <a href="#" data-code="${index}" class="edit-link link-success link-underline-opacity link-underline-opacity-100-hover p-2">edit</a>
                <a href="#" data-code="${index}" class="delete-link link-danger link-underline-opacity link-underline-opacity-100-hover p-2">delete</a>

                </div>
        </div>
    </div>
    `;
    
        // full view, event handler
        var fullViewLink = blog.querySelector('.fullview-link');
        fullViewLink.addEventListener('click', function(event) {
          event.preventDefault();
          fullPageViewBlog(index);
        });
    
        // edit, event handler
        var editLink = blog.querySelector('.edit-link');
        editLink.addEventListener('click', function(event) {
          event.preventDefault(); 
          updateBlog(index);
        });
    
        // delete, delete handler
        var deleteLink = blog.querySelector('.delete-link');
        deleteLink.addEventListener('click', function(event) {
          event.preventDefault();
          deleteBlog(index);
        });
    
    // adding it listings
    listings.appendChild(blog);
  });
}



//update
function updateBlog(index) {
  //getting which one to be updated
  const blogToUpdate = blogPosts[index];

  //adding current values in form
  userValTitle.value = blogToUpdate.title;
  userValDesc.value = blogToUpdate.desc;

  let updateiconchange = document.getElementById("createBtn").innerHTML = "Update Blog";

  //while clicking on add blog it updates on click
  document.getElementById("createBtn").onclick = function() {
    const updatedTitle = userValTitle.value;
    const updatedDesc = userValDesc.value;

    if (updatedTitle && updatedDesc) {
      
//making changes in arr
      blogPosts[index].title = updatedTitle;
      blogPosts[index].desc = updatedDesc;

      localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

      //clearing field after changes done
      userValTitle.value = "";
      userValDesc.value = "";

      printAllBlog(blogPosts);

    } else {
      alert("Please enter both title and description.");
    }
  };
}



//delete 
function deleteBlog(index) {
  //simply removing the clicked index 
  blogPosts.splice(index, 1);

  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

  printAllBlog(blogPosts);
}


//full view in new page 
function fullPageViewBlog(index) {
  const blog = blogPosts[index];

  //redirection url with passing values manually as per the active index
  window.location.href = `fullview.html?title=${blog.title}&desc=${blog.desc}`;
}
