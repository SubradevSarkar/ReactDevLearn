import { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => setPosts(posts.documents));
  }, []);
  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
