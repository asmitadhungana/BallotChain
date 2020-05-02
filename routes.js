const routes = require("next-routes")();

//if user goes to elections/anything, show the component in elections/show page
routes
  .add("/elections/new", "/elections/new")
  .add("/elections/:address", "/elections/show")
  .add("/elections/:address/criteria", "/elections/criteria");
module.exports = routes;

//Check vide0 #53
