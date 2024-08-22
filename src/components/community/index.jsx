import FooterDefault from "../footer/common-footer";
import Breadcrumb from "../common/Breadcrumb";
import LoginPopup from "../common/form/login/LoginPopup";
import DefaulHeader2 from "../header/DefaulHeader2";
import MobileMenu from "../header/MobileMenu";
import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FilterleftSidebar from "./FilterleftSidebar";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
const Index = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [image, setImage] = useState(null);
  const [activeCommentPostId, setActiveCommentPostId] = useState(null);
  const [commentContent, setCommentContent] = useState("");
  const [isCommentAnonymous, setIsCommentAnonymous] = useState(false);
  const [activeSharePostId, setActiveSharePostId] = useState(null); // State to manage which post's share dropdown is active

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      console.log("Image URL: ", imageUrl);
    }
  };

  const addPost = () => {
    if (content.trim()) {
      const newPost = {
        id: Date.now().toString(),
        user: isAnonymous ? "Anonymous" : "Current User",
        content: content,
        image: image,
        likes: 0,
        comments: [],
        liked: false,
        isAnonymous: isAnonymous,
      };
      setPosts([newPost, ...posts]);
      setContent("");
      setIsAnonymous(false);
      setImage(null);
    }
  };

  const addComment = (postId) => {
    if (commentContent.trim()) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  {
                    id: Date.now(),
                    user: isCommentAnonymous ? "Anonymous: " : "Current User: ",
                    content: commentContent,
                  },
                ],
              }
            : post
        )
      );
      setCommentContent("");
      setIsCommentAnonymous(false);
      setActiveCommentPostId(null);
    }
  };

  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes + (post.liked ? -1 : 1),
              liked: !post.liked,
            }
          : post
      )
    );
  };

  const sharePost = (postId) => {
    // Toggle the share dropdown visibility
    setActiveSharePostId(activeSharePostId === postId ? null : postId);
  };

  const handleCopyLink = (postId) => {
    // Example logic for copying the post link to the clipboard
    const postLink = `https://example.com/post/${postId}`;
    navigator.clipboard.writeText(postLink);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="ls-section bg-stone-200">
        <div className="auto-container">
          <div className="row">
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="filter-sidebar"
              aria-labelledby="offcanvasLabel"
            >
              <div className="filters-column hide-left">
                <FilterSidebar />
              </div>
            </div>
            {/* End filter column for tablet and mobile devices */}

            <div className="filters-column hidden-1023 w-1/5 col-md-8 col-sm-8 ms-20">
              <FilterSidebar />
            </div>
            {/* <!-- End Filters Column for desktop and laptop --> */}

            <div className="max-w-xl mp-4">
              <div className="mb-4 bg-white p-3 border-t-8 rounded-t-md border-blue-900">
                <textarea
                  className="w-full p-3 font-medium text-xl bg-gray-100 text-black h-28 border-0"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Ask anything (even anonymously)..."
                />
                <button
                  onClick={addPost}
                  className="my-2 bg-blue-900 w-full text-lg text-white px-4 py-2.5 rounded hover:bg-blue-700"
                >
                  Post
                </button>
                {content && (
                  <>
                    <div className="mt-2">
                      {/* File Upload with Icon */}
                      <label
                        htmlFor="file-upload"
                        className="flex items-center cursor-pointer mt-4 ms-2"
                      >
                        <i className="fas fa-camera text-blue-600 mr-2 text-2xl"></i>
                        <span className="text-gray-700">Upload Image</span>
                        <input
                          type="file"
                          id="file-upload"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                      {image && (
                        <div className="mb-2 border-2 my-2">
                          <img
                            src={image}
                            alt="Uploaded"
                            className="max-w-full h-auto rounded"
                          />
                        </div>
                      )}
                      <div className="flex items-center mt-4 ms-1">
                        {/* Checkbox with Icon */}
                        <input
                          type="checkbox"
                          id="anonymous"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          className="hidden"
                        />
                        <label
                          htmlFor="anonymous"
                          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer border border-gray-900 ${
                            isAnonymous ? "bg-blue-900 text-white" : ""
                          }`}
                        >
                          <i
                            className={`fas fa-${isAnonymous ? "check" : ""}`}
                          ></i>
                        </label>
                        <label
                          htmlFor="anonymous"
                          className="ml-2 text-gray-700"
                        >
                          Post as Anonymous
                        </label>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white shadow rounded-lg p-4 mb-2"
                  >
                    <div className="flex items-center">
                      {post.isAnonymous && (
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTiGG5lX9viMNkyHJL-13qWwWJgQUI-LxSg&s"
                          alt="Anonymous"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                      )}
                      <h4 className="font-bold flex align-baseline m-0">
                        {post.isAnonymous ? " Anonymous" : post.user}
                      </h4>
                    </div>
                    <p className="text-gray-700 break-all my-2">
                      {post.content}
                    </p>
                    {post.image && (
                      <div className="mt-2">
                        <img
                          src={post.image}
                          alt="Uploaded"
                          className="max-w-full h-auto rounded"
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className={`mr-4 ${
                          post.liked
                            ? "text-pink-600 text-base"
                            : "text-gray-500 text-base"
                        }`}
                        onClick={() => toggleLike(post.id)}
                      >
                        <i className="fas fa-heart"></i> {post.likes}{" "}
                        {post.liked ? "likes" : ""}
                      </button>
                      <button
                        className="mr-4 text-gray-500 hover:text-blue-500 text-base"
                        onClick={() =>
                          setActiveCommentPostId(
                            activeCommentPostId === post.id ? null : post.id
                          )
                        }
                      >
                        <i className="fas fa-comment"></i> Comment
                      </button>
                      <div className="relative">
                        <button
                          className="text-gray-500 hover:text-blue-500 text-base"
                          onClick={() => sharePost(post.id)}
                        >
                          <i className="fas fa-share"></i> Share
                        </button>
                        {activeSharePostId === post.id && (
                          <div className="absolute right-0 mt-2 bg-white border  shadow-lg z-10">
                            <ul className=" ">
                              <li>
                                <a
                                  href={`https://www.facebook.com/sharer/sharer.php?u=https://example.com/post/${post.id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex  px-3 py-3 text-base hover:bg-gray-200"
                                >
                               <AiFillFacebook className=" ms-3 me-1 text-2xl text-blue-800" />   Facebook
                                </a>
                              </li>
                              <li>
                                <a
                                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/post/${post.id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="  px-3 w-40 py-2 flex text-gray-700 text-base hover:bg-gray-200"
                                >
                                  <AiFillLinkedin className=" ms-3 me-1 text-2xl text-sky-700"/>  LinkedIn
                                </a>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleCopyLink(post.id)}
                                  className=" px-3 w-40 flex py-3 text-gray-700 text-base hover:bg-gray-200"
                                >
                                 <FaRegCopy className=" ms-3 me-1 text-2xl text-blue-950" /> Copy Link
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    {activeCommentPostId === post.id && (
                      <div className="mt-2">
                        <textarea
                          className="w-full p-2 border rounded-lg"
                          value={commentContent}
                          onChange={(e) =>
                            setCommentContent(e.target.value)
                          }
                          placeholder="Write a comment..."
                        />
                       <div className="flex items-center my-3">
                            <input
                              type="checkbox"
                              id="commentAnonymous"
                              checked={isCommentAnonymous}
                              onChange={(e) =>
                                setIsCommentAnonymous(e.target.checked)
                              }
                              className="hidden "
                            />
                            <label
                              htmlFor="commentAnonymous"
                              className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer border border-gray-900 ${
                                isCommentAnonymous
                                  ? "bg-blue-900 text-white"
                                  : ""
                              }`}
                            >
                              <i
                                className={`fas fa-${
                                  isCommentAnonymous ? "check" : ""
                                }`}
                              ></i>
                            </label>
                            <label
                              htmlFor="commentAnonymous"
                              className="text-gray-700 ms-3"
                            >
                              Post as Anonymous
                            </label>
                            <button
                              onClick={() => addComment(post.id)}
                              className="ml-auto bg-blue-900 text-white px-4 py-2.5 w-64 rounded text-base hover:bg-blue-700"
                            >
                              Post
                            </button>
                          </div>
                      </div>
                    )}

                    <div className="mt-4">
                      {post.comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-gray-100 p-2 rounded-lg mb-2"
                        >
                          <strong>{comment.user}</strong>
                          <p>{comment.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden-1023 w-1/4 col-md-8 col-sm-8 ">
              <FilterleftSidebar />
            </div>
            {/* <!-- End Filters Column for desktop and laptop --> */}
          </div>
        </div>
      </section>
      {/* End ls-section */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index;
