import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   _id: Number,
                                   tagline: String,
                                   likes: Number,
                                   liked: Boolean,
                                   unlike: Number,
                                   avatarIcon:String,
                                   topic: String,
                                   userName: String,
                                   username: String,
                                   time: String,
                                   title: String,
                                   image: String,

                                   tweets:"",
                                   tuit: String,

                                   replies: Number,
                                   retuits: Number,

                                   handle: String,

                                   comment:String,
                                   retweet:String,
                                   heart:String

                               }, {collection: 'tuits'});
export default schema;





