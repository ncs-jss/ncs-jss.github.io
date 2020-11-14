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
      <div class="club_card justify-content-center mx-auto" style="margin-bottom: 15px; padding-bottom: 10px;">
        <div class="card-img-top img-responsive mx-auto" style='width: 90%; height: 140px;  background: url("${post.image}"); background-size: cover; border-radius: 10px;' alt="Card image cap"/>
      </div>
      <div class="card-body" style="padding-bottom: 0px;" align="left">
        <h4 class="avenirDemi" style="font-weight: 500; font-size: 24px; line-height: 33px;">${postTitle}</h4>
        <a style="color: #000000" href="${post.link}" target="_blank">
        <div class="source">
          <img style="height: 20px; width: 20px" src="../img/icons/blog/${post.source}.png"</img></div>
        </div>
        </a>
        <a style="text-decoration:none; color:#000000 href=${post.link} target="_blank"><hr style="width: 90%; margin-bottom:15px;"/>
        <a style="text-decoration:none; color:#000000" href=${post.link} target="_blank">
        <div class="footer d-flex mx-auto" style="padding-bottom: 10px; width: 90%; align-items: center; cursor: pointer;">
          <img src=${post.authorImage} style="height: 36px; width: 36px;" class="rounded-circle" />
          <div class="author-info d-flex" style="flex-direction: column; align-items: flex-start; margin-left: 15px;">  
            <span class="avenirDemi author-name" style="font-size: 16px; line-height: 19px; color: rgba(0,0,0,0.8)">${postAuthor}</span>
            <span class="date text-muted" style="font-family:'AvenirNext LT Pro';font-size: 12px; line-height: 24px; ">${post.published_on}</span>
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
//     "author": "AUTHOR NAME",
//     "published_on": "DATE",
//     "source": "medium/hackernoon",
//     "link": "LINK",
//     "image": "IMAGELINK",
//      "authorImage":"author Image Link",
//   }
$.getJSON("../js/Blog.json", (json) => {
  const arr = json.slice(-4);
  arr.forEach((obj) => {
    addTemplate(obj);
  });
});
