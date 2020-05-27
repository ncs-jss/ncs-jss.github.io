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
  let date = moment(post.published_on).format("LL");

  let { body } = post;
  let description = body.length > 50 ? `${body.substring(0, 150)}...` : body; //body truncate
  html = `
  <div
  class="col-md-4 pt-1 text-center"
  style="padding-left: 0; padding-right: 0;"
>
  <div
    class="club_card justify-content-center mx-auto"
    style="margin-bottom: 15px; padding-bottom: 10px;"
  >
    <img
      class="card-img-top"
      style="width: 90%; height: 170px;"
      src="${post.image}"
      alt="Card image cap"
    />
    <div
      class="card-body"
      style="padding-bottom: 0px;"
      align="left"
    >
      <h4 class="avenirDemi">${post.title}</h4>
      <span class="author text-muted">by ${post.author}</span>
      <p class="card-text pt-3 text-muted">
        ${description}
      </p>
    </div>
    <hr />
    <div
      class="footer d-flex mx-auto"
      style="
        justify-content: space-between;
        padding-bottom: 10px;
        width: 90%;
      "
    >
      <div class="date">${date}</div>
      <div class="source"><a href="${post.link}" target="_blank"><img style="height: 30px; width: 30px" src="../img/icons/blog/${post.source}.png"</img></a></div>
    </div>
  </div>
</div>
`;
  section.innerHTML += html;
};

//calling aysnc function on page load
window.addEventListener("load", () => {
  getPosts().then((data) => {
    const arr = data.posts.slice(-3); //for last three posts
    arr.forEach((post) => {
      addTemplate(post);
    });
  });
});
