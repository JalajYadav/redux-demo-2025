import type { POST } from "./interface";

interface PropsInterface {
  postsList: POST[];
}

const PostsPage = (props: PropsInterface) => {
  return (
    <div className="w-100 mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold colorOrange">Post Manager</h1>

        <p className="text-gray-500 mt-2 colorFg0">
          Create, Edit, and Delete Content
        </p>
      </header>
      <div className="bgGf2 p-6 md:p-8 rounded-xl shadow-2xl mb-8">
        <h2
          id="form-title"
          className="text-2xl font-semibold text-gray-700 mb-4"
        >
          Create New Post
        </h2>

        <form id="post-form" className="space-y-4">
          <input type="hidden" id="post-id" />

          <div>
            <label
              htmlFor="post-content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              id="post-content"
              rows={4}
              placeholder="What's on your mind? Write your post content here..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-none shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            id="submit-button"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition duration-200 transform hover:scale-[1.01] shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Add Post
          </button>
          <button
            type="button"
            id="cancel-edit-button"
            className="hidden w-full bgAqua text-white py-2 rounded-lg font-bold hover:bg-gray-500 transition duration-200 focus:outline-none mt-2"
          >
            Cancel Edit
          </button>
        </form>
      </div>
      <div className="space-y-4 post-list-container" id="posts-container">
        {props.postsList.map((post) => {
          return (
            <div className="post-card bg1 p-6 rounded-xl shadow-lg border-l-4 border-fb4934 hover:shadow-xl transition duration-300">
              <p>{post.content}</p>

              <div className="mt-4 flex justify-between items-center text-sm pt-2 border-t border-white-700">
                <span>👍 {post.likes} likes</span>
                <div className="space-x-2">
                  <button
                    data-action="edit"
                    data-id="${post.id}"
                    className="edit-btn text-indigo-400 hover:text-indigo-300 font-medium transition duration-150 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    data-action="delete"
                    data-id={`${post.id}`}
                    className="delete-btn text-red-400 hover:text-red-300 font-medium transition duration-150 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
