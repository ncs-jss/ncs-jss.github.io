//getting section for showing blog data
const section = document.querySelector("#blog-text");
let html = ``;
//template
const addTemplate = (post) => {
  let { body } = post;
  let description = body.length > 50 ? `${body.substring(0, 150)}...` : body; //body truncate
  html = `
  <a style="text-decoration: none; color: #000000" class="aveniDemi" href=${post.link} target="_blank">
  <div
  class="col-md-4 pt-1 text-center"
  style="padding-left: 0; padding-right: 0;"
>

  <div
    class="club_card justify-content-center mx-auto"
    style="margin-bottom: 15px; padding-bottom: 10px;"
  >
    <div
      class="card-img-top img-responsive mx-auto"
      style='width: 90%; height: 170px; 
      background: url("${post.image}"); background-size: cover; border-radius: 10px;'
      alt="Card image cap"
    /></div>
    <div
      class="card-body"
      style="padding-bottom: 0px;"
      align="left"
    >
      <h4 class="avenirDemi">${post.title}</h4>
      <span class="author text-muted">by ${post.author}</span>
      <p class="avenirRegular w-75 pt-3 text-muted">
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
      <div class="date">${post.published_on}</div>
      <div class="source"><a href="${post.link}" target="_blank"><img style="height: 30px; width: 30px" src="../img/icons/blog/${post.source}.png"</img></a></div>
    </div>
  </>
  
</div>
</a>
`;

  section.innerHTML += html;
};
$.getJSON("../js/Blog.json", (json) => {
  const arr = json.slice(-3);
  arr.forEach((obj) => {
    addTemplate(obj);
  });
});
