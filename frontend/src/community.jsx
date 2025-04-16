// src/pages/CommunityPage.jsx
import React from "react";

export default function CommunityPage() {
  // Fake logged-in user
  const user = {
    name: "Alex",
    avatar: "https://i.pravatar.cc/100?img=5",
  };

  // Some fake community posts
  const posts = [
    {
      id: 1,
      author: "Sam",
      content: "Just completed a 5K run!",
    },
    {
      id: 2,
      author: "Jade",
      content: "Loving this new core workout challenge 💪",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name} 👋</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow p-4 rounded-lg">
            <h3 className="font-semibold">{post.author}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
