const user={
    name:"kiran",
    age:25,
    qual:"Btech",
    blogs:[
        {title:"Summer", likes: 30},
        {title:"Winter", likes: 50},
    ],
    login: function(){
        console.log("user logged in")
    },
    logout: function(){
        console.log("user logged out")
    },
    // blogspost: function(){
    //     console.log(this.blogs);
    // }
    // blogspost: function(){
    //     console.log('This user has written the following blogs :');
    //     this.blogs.forEach(function(blog){
    //         console.log(blog);
    //     })
    // }
    blogspost(){
        console.log("The user has written the following blogs :")
        this.blogs.forEach((blog)=>{
            console.log(blog.title, blog.likes);
        })
    }
}
// console.log(user)
// user.office="Hyderabad";
// console.log(user);
// user.age=26;
// console.log(user)
user.login();
user.logout();
user.blogspost();
//console.log(this);