"use strict";

var routes = require("next-routes")();

//if user goes to elections/anything, show the component in elections/show page
routes.add("/elections/new", "/elections/new").add("/elections/:address", "/elections/show").add("/elections/:address/criteria", "/elections/criteria");
module.exports = routes;

//Check vide0 #53
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBLE9BQ0csQUFESCxJQUNPLEFBRFAsa0JBQ3lCLEFBRHpCLGtCQUVHLEFBRkgsSUFFTyxBQUZQLHVCQUU4QixBQUY5QixtQkFHRyxBQUhILElBR08sQUFIUCxnQ0FHdUMsQUFIdkM7QUFJQSxPQUFPLEFBQVAsVUFBaUIsQUFBakI7O0FBRUEiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ikg6L2Jsb2NrQ2hhaW4vbXlFbGVjdGlvbiJ9