//getting section for showing blog data
const section = document.querySelector("#blog-text");
let html = ``;
//template
const addTemplate = (post) => {
  let { body, title, author } = post;
  let postTitle = title.length > 33 ? `${title.substring(0, 30)}...` : title;
  // let description = body.length > 30 ? `${body.substring(0, 50)}...` : body; //body truncate
  let postAuthor =
    author.length > 22 ? `${author.substring(0, 19)}...` : author;
  html = `
  <a style="text-decoration: none; color: #000000" class="aveniDemi" href=${post.link} target="_blank">
    <div class="col-md-3 pt-1 text-center" style="padding-left: 0; padding-right: 0;">
      <div class="club_card justify-content-center mx-auto" id="blog" style="margin-bottom: 15px; padding-bottom: 10px; border-radius: 10px;">
        <div class="card-img-top img-responsive mx-auto" style='width: 90%; height: 130px;  background: url("${post.image}"); background-size: cover; border-radius: 10px;' alt="Card image cap"/>
      </div>
      <div class="card-body" style="padding-bottom: 0px;" align="left">
        <h4 class="avenirDemi" style="font-size: 1.2rem;">${postTitle}</h4>
        <div class="source">
          <a href="${post.link}" target="_blank"><img style="height: 30px; width: 30px" src="../img/icons/blog/${post.source}.png"</img></a></div>
        </div>
        <hr style="width: 90%;"/>
        <a style="text-decoration:none; color:#000000" href=${post.link}>
        <div class="footer d-flex mx-auto" style="padding-bottom: 10px; width: 90%; align-items: center; cursor: pointer;">
          <img src=${post.authorImage} style="height: 40px; width: 40px;" class="rounded-circle" />
          <div class="author-info d-flex" style="flex-direction: column; align-items: flex-start; margin-left: 14px;">  
            <span class="author-name avenirDemi">${postAuthor}</span>
            <span class="date text-muted">${post.published_on}</span>
          </div>
        </div>
        </a>
      </div>
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
