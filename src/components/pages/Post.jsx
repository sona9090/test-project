import { NavLink, Outlet } from "react-router-dom";

const Post = () => {
    return (
        // just the nested routes testing
        <div className="post">
            <h2>Post</h2>
            <div className="container post_nav">
                <NavLink to="/post/post_header" className={({ isActive }) => (isActive ? `active` : '')}>Post Header</NavLink>
                <NavLink to="/post/post_layout" className={({ isActive }) => (isActive ? `active` : '')}>Post Layout</NavLink>
                <NavLink to="/post/share_buttons" className={({ isActive }) => (isActive ? `active` : '')}>Share Buttons</NavLink>
                <NavLink to="/post/gallery_post" className={({ isActive }) => (isActive ? `active` : '')}>Gallery Post</NavLink>
                <NavLink to="/post/video_post" className={({ isActive }) => (isActive ? `active` : '')}>Video Post</NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default Post;
