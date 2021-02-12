import { _ROOT_CONF } from '../config/rootConfig';
const Post = _ROOT_CONF.db.post;

const postService = {
    createPost(req) {
        return Post.create({
            title: req.body.title,
            content: req.body.content,
            article_id: req.body.article_id
        })
    },

    getAll(){
        return Post.findAll()
    },

    findById(req) {	
        return Post.findOne({
            where:{
                post_id: req.params.postId
            }
        })
    },

    update(req){
        let id = req.params.postId;
        let result = Post.update( { title: req.body.title, content: req.body.content }, 
                        { where: {post_id: req.params.postId} }
                    ).then(() => {
                        return "updated successfully a post with id = " + id;
                    });
        return result;
    },

    delete(req){
        let id = req.params.postId;
        let result = Post.destroy({
                        where: { post_id: id }
                        }).then(() => {
                            return 'deleted successfully a post with id = ' + id;
                        });
        return result;
    }
}

export default postService;