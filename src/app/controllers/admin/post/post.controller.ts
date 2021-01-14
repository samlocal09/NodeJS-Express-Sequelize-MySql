import { successResponse } from './../../../helpers/response';
import { createPost } from './../../../services/post.service';

// export default class PostController {
//     constructor(
//         private postService: PostService,
//         private responseHelper: ResponseHelper,
//     ){}

//     async create(req, res) {
//         var post = await this.postService.create(req);
//         return this.responseHelper.successResponse(req, res, { post });
//     };
    
//     // // Find a Customer by Id
//     // async findById (req, res) {
//     //     var post = await this.postService.findById(req);
//     //     return this.responseHelper.successResponse(req, res, { post });		
//     // };
    
//     // // Update a Post
//     // async update(req, res) {
//     //     var post = await this.postService.update(req);
//     //     return this.responseHelper.successResponse(req, res, { post });
//     // };
     
//     // // Delete a Customer by Id
//     // async delete(req, res) {
//     //     var result = await this.postService.delete(req);
//     //     return this.responseHelper.successResponse(req, res, null);
//     // };

// }

//     async create(req, res) {
//         var post = await this.postService.create(req);
//         return this.responseHelper.successResponse(req, res, { post });
//     };

const postController = {
    async create(req, res): Promise<any> {
        var post = await createPost(req);
        return successResponse(req, res, { post });
    }
}

export default postController;