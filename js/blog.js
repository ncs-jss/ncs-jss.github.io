//getting section for showing blog data
const section = document.querySelector("#blog-text");
let html = ``;
const getPosts = async () => {
  try {
    const response = await fetch("../js/Blog.json");
    const data = await response.json();
    data.slice(-4).forEach((post) => addTemplate(post));
  } catch (error) {
    console.log(error);
    section.parentElement.parentElement.style.display = "none";
  }
};

//template
const addTemplate = (post) => {
  let { title, author } = post;
  html = `
  <a style="text-decoration: none; color: #000000" class="aveniDemi" href=${post.link} target="_blank">
    <div class="col-md-3 pt-1 text-center" style="padding-left: 0; padding-right: 0;">
      <div class="club_card blog_card justify-content-center mx-auto" style="margin-bottom: 15px; padding-bottom: 12px;">
        <div class="card-img img-responsive mx-auto" style='width: 90%; min-height: 140px;  background: url("${post.image}"); background-size: cover;' alt="Card image cap"/>
      </div>
      <div class="card-body" style="padding-bottom: 0px; padding-left: 13px;" align="left">
        <h4 title="${title}" class="avenirDemi" style="font-weight: 500; font-size: 24px; line-height: 33px;">${title}</h4>
        <a style="color: #000000" href="${post.link}" target="_blank">
        <div class="source" style="margin-top: 7px;">
          <img style="height: 20px; width: 20px" src="../img/icons/blog/${post.source}.svg"</img></div>
        </div>
        </a>
        <a style="text-decoration:none; color:#000000 href=${post.link} target="_blank"><hr style="width: 90%; margin-bottom:15px; margin-top:25px;"/>
        <a style="text-decoration:none; color:#000000" href=${post.link} target="_blank">
        <div class="footer d-flex mx-auto" style="padding-bottom: 10px; width: 90%;cursor: pointer;">
          <img src=${post.authorImage} style="height: 36px; width: 36px;" class="rounded-circle" />
          <div class="author-info d-flex" style="flex-direction: column; align-items: flex-start; margin-left: 15px;">  
            <span class="avenirDemi author-name" style="font-size: 14px; line-height: 19.12px; color: rgba(0,0,0,0.8)">${author}</span>
            <span class="date text-muted" style="font-family:'AvenirNext LT Pro',sans-serif ;font-size: 12px; line-height: 16.39px; ">${post.published_on}</span>
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
getPosts();
