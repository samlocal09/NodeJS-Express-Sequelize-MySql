const _ROOT_CONF = require('../config/rootConfig');
const Post = _ROOT_CONF.db.post;

exports.create = function(req){
    return Post.create({
        title: req.body.title,
        content: req.body.content,
        article_id: req.body.article_id
    });
};

 // Find a Customer by Id
exports.findById = function(req){	
    return Post.findOne({
        where:{
            post_id: req.params.postId
        }
    });
};

exports.getAll = function(req){	
    return Post.findAll()
};

// Update a Post
exports.update = function(req){
    let id = req.params.postId;
    let result = Post.update( { title: req.body.title, content: req.body.content }, 
                    { where: {post_id: req.params.postId} }
                ).then(() => {
                    return "updated successfully a post with id = " + id;
                });
    return result;
};

// Delete a Customer by Id
exports.delete = function(req){
    let id = req.params.postId;
    let result = Post.destroy({
                    where: { post_id: id }
                    }).then(() => {
                        return 'deleted successfully a post with id = ' + id;
                    });
    return result;
};