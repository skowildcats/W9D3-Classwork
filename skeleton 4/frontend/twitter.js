
const FollowToggle = require('./follow_toggle.js')

// document.addEventListener("DOMContentLoaded", () => {



// });

$(function () {
  $("button.follow-toggle").each ((idx, el) => new FollowToggle(el))
  }
)