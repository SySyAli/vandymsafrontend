
async function getInstagramPosts() {
    const url = "https://vandymsabackend.fly.dev";
    const res = await fetch(url + `/getInstagramPosts`, { cache: "no-store" });
    const data = res.json();
    return data;
  }
  

  export async function getServerSideProps() {
    const url = "https://vandymsabackend.fly.dev/getInstagramPosts";
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
	return {
		props: { posts: data}, // will be passed to the page component as props
	};
}

  export default function InstagramPage({posts}: any) {
    //const posts = await getInstagramPosts();
  
    return (
      <div>
        <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900  text-center">
          Instagram Posts
        </div>
        <div className="flex flex-wrap  items-center justify-center flex-row flew-wrap gap-100">
          {posts.instagramPosts.map((post: any) => {
            return (
              <div className="h-fit w-fit p-4" key={post.id}>
                <InstagramPost instaPost={post} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  
  
  function InstagramPost({ instaPost }: any) {
    let url: any = [];
    if (instaPost.media_type === "CAROUSEL_ALBUM") {
      for (let i = 0; i < instaPost.children.data.length; i++) {
        url.push(instaPost.children.data[i].media_url);
      }
    }
    return (
      <>
        <div className="card glass bg-base-300 shadow-xl w-[250px] h-[500px]">
          {instaPost.media_type === "CAROUSEL_ALBUM" ? (
            <figure><div className="bg-red-400 rounded-lg"><img src={url[0]} alt="image" loading="lazy"/></div></figure>
          ) : instaPost.media_type === "IMAGE" ? (
            <figure>
              <img src={instaPost.media_url} alt="Instagram" loading="lazy"/>
            </figure>
          ) : (
            <figure>
              <video src={instaPost.media_url} />
            </figure>
          )}
          <div className="card-body">
            <a className="link" target="_blank" rel='noreferrer' href={instaPost.permalink}>
              <div>{instaPost.caption.substring(0, 100) + "..."}</div>
            </a>
          </div>
        </div>
      </>
    );
  }
  