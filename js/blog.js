//Async request to JSON file for Blog post
const getPosts = async () => {
  const response = await fetch("../js/Blog.json");
  const data = response.json();
  return data;
};

//getting section for showing blog data
const section = document.querySelector("#blog-text");
let html = ``;

//template
const addTemplate = (post) => {
  let date = post.published_on;
  console.log(date);
  let { body } = post;
  let description = body.length > 50 ? `${body.substring(0, 150)}...` : body; //body truncate
  html = `
  <div class="col-md-5 pt-1 text-center" style="padding-left: 0; padding-right: 0;">
  <div class="club_card justify-content-center mx-auto" style="margin-bottom: 15px;">
    <div class="row justify-content-end">
      <div class="col my-auto">
      <a href="${post.link}" target="_blank">
        <img src="../img/icons/blog/${
          post.source
        }.png" style="cursor: pointer; height: 100px;" href="${
    post.link
  }" class="pt-4"></img></a>
      </div>
      <div class="col my-auto">
        <div
         
          class=" pt-4 avenirDemi"
          style="width: 90%; font-family: auto; color: #747d84;"
        >
          ${moment(date).fromNow()} 
        </div>
      </div>
    </div>
    <h4 class="mx-auto pt-4 avenirDemi" style="width: 90%;">
      ${post.title}
    </h4>
    <p style="width: 90%;" class="mx-auto text-muted">
     ${description}
    </p>
    <footer class="blockquote-footer">
      <small>
        Written famously by
        <cite title="Source Title">${post.author}</cite>
      </small>
    </footer>
</div>  
</div>`;
  section.innerHTML += html;
};

//calling aysnc function on page load
window.addEventListener("load", () => {
  getPosts().then((data) => {
    const arr = data.posts.slice(-2); //for last two posts
    arr.forEach((post) => {
      addTemplate(post);
    });
  });
});
