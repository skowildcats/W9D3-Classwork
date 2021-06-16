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

    if (this.followState === true) {
      this.$el.empty().append("Unfollow!")
    } else if (this.followState === false) {
      this.$el.empty().append("Follow!")
    }
  }

  handleClick() {

    let myPromise = new Promise((myResolve, myReject) => {
      debugger

      this.$el.prop({ "disabled": true })
      
      if (this.followState === false) {
        this.$el.empty().append("Following...")
        this.util.followUser(this.userId)
      } else if (this.followState === true) {
        this.$el.empty().append("Unfollowing...")
        this.util.unfollowUser(this.userId)
      }
      myResolve()

    })

    myPromise.then(() => {
      this.$el.prop({"disabled": false})
      this.followState = !this.followState
      this.render()
    })
    
  }
}

module.exports = FollowToggle