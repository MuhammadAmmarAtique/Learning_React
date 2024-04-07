import { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import appwriteService from "../appwrite/configuration";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPost(slug)
      .then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <></>
  );
}

export default EditPost;
