import Q from "kew"
import InboxRouter from "./routes.js"

Q.all([
  ChannelStore.setup()
])
.then(function(next){
  ChannelRouter.start()
})
.fail(function (e) {
  console.log("Failed to start Router: " + e.stack)
})
.then(function(next){
  ChannelStore.fetch()
})
.fail(function (e) {
  console.log("Failed to Fetch from Server: " + e.stack)
})
