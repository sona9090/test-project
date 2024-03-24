import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Demos from "./pages/Demos"
import Post from "./pages/Post"
import PostHeader from "./pages/posts/PostHeader"
import PostLayout  from "./pages/posts/PostLayout"
import ShareButtons from "./pages/posts/ShareButtons"
import GalleryPost from "./pages/posts/GalleryPost"
import VideoPost from "./pages/posts/VideoPost"
import Features from "./pages/Features"
import Categories from "./pages/Categories"
import Shop from "./pages/Shop"
import BuyNow from "./pages/BuyNow"

const Paths = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/post" element={<Post />}>
                {/* Sub-routes for each post item */}
                <Route path="post_header" element={<PostHeader />} />
                <Route path="post_layout" element={<PostLayout />} />
                <Route path="share_buttons" element={<ShareButtons />} />
                <Route path="gallery_post" element={<GalleryPost />} />
                <Route path="video_post" element={<VideoPost />} />
            </Route>
            <Route path="/features" element={<Features />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/buy_now" element={<BuyNow />} />
        </Routes>
    );
}

export default Paths;
