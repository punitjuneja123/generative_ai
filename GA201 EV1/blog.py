import flask from Flask,jsonify

app=FLask(__name__)

app.route("/")
def welcome():
    return ("welcome to Blog app")

app.route("/login")
    def login():
    

app.route("/post/blogs",method=["POST"])
def postBlog():
    db.collection
    return "Blog posted"

app.route("/getPosts")
def getPosts():
    allBlogs=db.blogs.find()
    return jsonify(allBlogs)

app.route("/getPost/<userID>")
def getUserPost(userID):
    userPosts=db.blogs.find({userID:userID})
    return jsonify(userPosts)

if __name__=="__main__":
    app.run()