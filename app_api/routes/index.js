//apilerle ilgili bütün rotaları burada tanımlayacağız...
var express=require("express");
var router=express.Router();
var ctrlVenues=require("../controllers/VenueController");
var ctrlComments=require("../controllers/CommentController");

router
.route("/venues")
.get(ctrlVenues.listVenues)
.post(ctrlVenues.addVenue);

router
.route("/venues/:venueid")
.get(ctrlVenues.getVenue)
.put(ctrlVenues.updateVenue)
.delete(ctrlVenues.deleteVenue);

//yorumlar için api rotaları...


router
.route("/venues/:venueid/comments")
.post(ctrlComments.addComment)



//yorumlara müdahale etmek için gerekli rotalar...


router
.route("/venues/:venueid/comments/:commentid")
.get(ctrlComments.getComment)
.put(ctrlComments.updateComment)
.delete(ctrlComments.deleteComment);



module.exports=router;

