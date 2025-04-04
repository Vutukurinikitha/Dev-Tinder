AuthRouter
-Post/Signup
-Post/login
-Post/logout

profileRouter
-Get/profile/view
-patch/profile/edit
-patch/profile/password

Connection request router
-post/ request/send/interested/: userid
-post / request/send/ignored/:userid
-post / request/ review/ accepted/ : requestID
-post / request/ review/ rejected/ : requestID

UserRouter
-get/user/connections
-get/ user/request/received
-get/feed- get's profile of other users like 30 at a time

Status : ignore, interested, accepted, rejected
