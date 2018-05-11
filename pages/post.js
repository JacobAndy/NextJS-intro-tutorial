import Layout from "../components/MyLayout.js";
// import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";

const Post = props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Markdown source={``} />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }
      .markdown a {
        text-decoration: none;
        color: blue;
      }
      .markdown a:hover {
        opacity: 0.6;
      }
      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);

// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return { show };
// };
export default Post;
// export default props => (
//   <Layout>
//     <Content url={props.url} />
//   </Layout>
// );
