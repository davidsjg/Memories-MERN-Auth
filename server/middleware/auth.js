import jwt from "jsonwebtoken";

//next = do something, then move to the next thing

//user wants to like a post >
//clicks the like button >dont immdeiately like it, need to check if he has permission to like it > auth middleware confirms or denies this request >
//if we get a next, we are ok to like content > like controller
//middleware = action that happens before something (before he likes, in this case)
//use auth middleware in the routes

const auth = async (req, res, next) => {
  try {
    //see if the user is really who he is claiming to be - achieved by using json web token(JWT)
    //ater user is signed up or in, they get this specific token
    //if they try to like or create a post, must check to make sure token is valid
    const token = req.headers.authorization.split(" ")[1];

    //two kinds of tokens here - one from google auth and one from our own
    //check which token it is
    //under 500 means its our toke
    const isCustomAuth = token.length < 500;
    let decodedData;

    //data we want to get from the token itself
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      //sub = googles name for a specific ID that differentiates every single google user.  Its an ID to differentiate the users with
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
