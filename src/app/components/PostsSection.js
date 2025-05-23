import Link from "next/link";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const PostSection = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8" id="blog">
      <div className="flex gap-12 sm:gap-24 md:flex-row flex-col">
        <div className="w-72">
          <h2 className="text-4xl font-bold text-light">
            Latest from <br />
            the blog
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {posts.docs.map((post) => {
            return (
              <Link
                href={`/Blog/${post.id}`}
                key={post.id}
                className="group block"
              >
                <article className="space-y-4">
                  <h3 className="text-2xl font-semibold text-light group-hover:text-purple-400 transition-colors mb-4">
                    {post.title}
                  </h3>
                </article>
                <div>
                  <time className="text-slate-200">{formatDate(post.createdAt)}</time>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostSection;