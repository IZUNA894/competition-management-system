# competition-management-system
this code is for api made in nodejs and mongo db.
what does this do ...what its for ..? is given below......

## for api documentation
https://explore.postman.com/templates/10809/competition-managent-system

----------------------------TASK--------------------

Implement a Express Rest API with following 2 given routes
1. GET /competition
2. GET /competition/:id/submission
Schema for Database – 4 Collections 
User’s Collection
- _id – MongoDB ID
- name – String
- email – String
Competition Schema
- _id – MongoDB ID
- name – String
- description – String
- author – UserID For User’s Collection
Submission Schema
- _id – MongoDB ID
- image – Image URL as String
- author – UserID For User Collection
- competition – CompetitionID For Competition Collection to denote which competition it belonged
Submission Like Schema
- _id – MongoDB ID
- submission – SubmissionID For submission which was liked
- author – UserID For User who liked the submission
Example Data
User 
{
 "_id" : "5e4dcfbed99d2c2c4cc0efb3",
 "name": "dhruv ramdev",
 "email" : "pythonbrilliant@gmail.com" 
}
Competition
{
 "_id" : "5e4dcfbed99d2c2c4cc0sdf3",
 "name": "Competition One",
 "description" : "Sample Competition",
 "author" : "5e4dcfbed99d2c2c4cc0efb3", 
}
Submission
{
 "_id" : "5e4dcfadad9d2c2c4cc0sdf3",
 "image" : "https://ikick-media.s3.ap-south-1.amazonaws.com/1584328440843-
1582825976512.png", 
 "competition" : "5e4dcfbed99d2c2c4cc0sdf3", 
 "author" : "5e4dcfbed99d2c2c4cc0efb3", 
}
SubmissionLike
{
 "_id" : "5e4dcfadad9d2c2adadadad2”,
 "submission" : "5e4dcfadad9d2c2c4cc0sdf3", 
 "author" : "5e4dcfbed99d2c2c4cc0efb3", 
}
Please Add at least 5 competition and 50 submissions distributed across 5 competitions. 
Response Format
1. Get /competitions
[ {
"_id": "5e50280a1d21ef203001f9c2",
"name": "Food Delivery",
"description": "Description",
 "author": {
 "_id": "5e4dcfbed99d2c2c4cc0efb3",
"name": "dhruv ramdev",
 "email" : "pythonbrilliant@gmail.com" 
 }, // populated
 "submissions": 8 //aggregated from submission colleciton
 },
 {
….
 }
]
2. Get /competion/5e50280a1d21ef203001f9c2/submissions
[ {
 "_id" : "5e4dcfadad9d2c2c4cc0sdf3",
 "image" : "https://ikick-media.s3.ap-south-1.amazonaws.com/1584328440843-
1582825976512.png", 
 "author": {
 "_id": "5e4dcfbed99d2c2c4cc0efb3",
"name": "dhruv ramdev",
 "email" : "pythonbrilliant@gmail.com" 
 }, // populated
 "competition": "5e50280a1d21ef203001f9c2",
 "likes": 8 //aggregated from likes colleciton
 },
 {
….
 }
]
