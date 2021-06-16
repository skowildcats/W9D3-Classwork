const APIUtil = require('./api_util.js')

class FollowToggle {
  constructor(el) {

    this.$el = $(el)
    this.userId = this.$el.data("user-id")
    this.followState = this.$el.data("initial-followed-state")
    // debugger
    this.render()
    const setEventListeners = () => {
      this.$el.on('click', e => {
        e.preventDefault();
        this.handleClick();
      })
    }
    $(setEventListeners);
    this.util = new APIUtil()
  }

  render() {

    if (this.followState) {
      this.$el.empty().append("Unfollow!")
    } else {
      this.$el.empty().append("Follow!")
    }
  }

  handleClick() {
    // debugger

    let myPromise = new Promise((myResolve, myReject) => {
      let followState = this.followState

      if (this.followState === false) {
        this.util.followUser(this.userId)
        myResolve()
      } else {
        this.util.unfollowUser(this.userId)
        myResolve()
      }

    })

    myPromise.then(() => {
      this.followState = !this.followState
      this.render()
    })
    
  }
}

module.exports = FollowToggle