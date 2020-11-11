//getting section for showing blog data
const section = document.querySelector("#blog-text");
let html = ``;
//template
const addTemplate = (post) => {
  let { body, title, author } = post;
  let postTitle = title.length > 13 ? `${title.substring(0, 10)}...` : title;
  let description = body.length > 30 ? `${body.substring(0, 50)}...` : body; //body truncate
  let postAuthor =
    author.length > 10 ? `${author.substring(0, 10)}...` : author;
  html = `
  <a style="text-decoration: none; color: #000000" class="aveniDemi" href=${post.link} target="_blank">
  <div
  class="col-md-3 pt-1 text-center"
  style="padding-left: 0; padding-right: 0;"
>

  <div
    class="club_card justify-content-center mx-auto" id="blog"
    style="margin-bottom: 15px; padding-bottom: 10px; border-radius: 10px;"
  >
    <div
      class="card-img-top img-responsive mx-auto"
      style='width: 90%; height: 130px; 
      background: url("${post.image}"); background-size: cover; border-radius: 10px;'
      alt="Card image cap"
    /></div>
    <div
      class="card-body"
      style="padding-bottom: 0px;"
      align="left"
    >
      <h4 class="avenirDemi" style="font-size: 1.5rem;">${postTitle}</h4>
      <span class="author">by ${postAuthor}</span>
      <p class="avenirRegular w-75 pt-3 text-muted" style="max-height:200px; overflow-y:hidden;">
        ${description}
      </p>
    </div>
    <hr style="border-top: 0.5px solid black;"/>
    <div
      class="footer d-flex mx-auto"
      style="
        justify-content: space-between;
        padding-bottom: 10px;
        width: 90%;
        align-items: center;
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
// HOW TO UPLOAD AN ARTICLE
//  {
//     "title": "TITLE",
//     "body": "BODY",
//     "author": "AUTHOR NAME",
//     "published_on": "DATE",
//     "source": "medium/hackernoon",
//     "link": "LINK",
//     "image": "IMAGELINK"
//   }
$.getJSON("../js/Blog.json", (json) => {
  const arr = json.slice(-4);
  arr.forEach((obj) => {
    addTemplate(obj);
  });
});
