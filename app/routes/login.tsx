import {Link, useLoaderData} from "@remix-run/react";
import { json } from "@remix-run/cloudflare";

export const loader = async () => {
    return json({
        posts: [
            {
                slug: "my-first-post",
                title: "My First Post",
            },
            {
                slug: "90s-mixtape",
                title: "A Mixtape I Made Just For You",
            },
        ],
    });
};

export default function Login() {
    const { posts } = useLoaderData();

    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <div
                style={{
                    padding: '100px'
                }}
            >
                Login!

                <div
                    style={{
                        marginTop: '50px'
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            padding: '10px',
                            borderRadius: '10px',
                            backgroundColor: 'rgb(100,100,200)',
                            color: 'white',
                            textDecoration: 'none'
                        }}
                    >
                        Back
                    </Link>
                </div>

                {(!!posts && Array.isArray(posts)) && (
                    <div
                        style={{
                            marginTop: '50px'
                        }}
                    >
                        {posts.map(singlePost => {
                            return (
                                <div
                                    key={singlePost.slug}
                                    style={{
                                        margin: '10px',
                                        padding: '20px',
                                        backgroundColor: 'rgb(244,250,244)'
                                    }}
                                >
                                    {singlePost.title}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
