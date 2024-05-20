import mongoose from "mongoose";

mongoose
  .connect('mongodb://127.0.0.1:27017/mern_blog_app')
  .then(() => {
    console.log(`Mongodb is connected`);
  }) 
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
