import { successResponse } from './../../../helpers/response';
import postService from './../../../services/post.service';

const postController = {
    async create(req, res): Promise<any> {
        var post = await postService.createPost(req);
        return successResponse(req, res, { post });
    },

    async findById (req, res): Promise<any> {
        var post = await postService.findById(req);
        return successResponse(req, res, { post });		
    },

    async update(req, res): Promise<any>  {
        var post = await postService.update(req);
        return successResponse(req, res, { post });
    },
     
    async delete(req, res): Promise<any> {
        var result = await postService.delete(req);
        return successResponse(req, res, null);
    }
}

export default postController;