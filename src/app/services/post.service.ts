import { _ROOT_CONF } from '../config/rootConfig';
const Post = _ROOT_CONF.db.post;

export const createPost = (req) => {
    return Post.create({
        title: null,//req.body.title,
        content: req.body.content,
        article_id: req.body.article_id
    });
};

//  // Find a Customer by Id
// findById(req){	
//     return Post.findOne({
//         where:{
//             post_id: req.params.postId
//         }
//     });
// };

// // Update a Post
// update(req){
//     let id = req.params.postId;
//     let result = Post.update( { title: req.body.title, content: req.body.content }, 
//                     { where: {post_id: req.params.postId} }
//                 ).then(() => {
//                     return "updated successfully a post with id = " + id;
//                 });
//     return result;
// };

// // Delete a Customer by Id
// delete(req){
//     let id = req.params.postId;
//     let result = Post.destroy({
//                     where: { post_id: id }
//                     }).then(() => {
//                         return 'deleted successfully a post with id = ' + id;
//                     });
//     return result;
// };