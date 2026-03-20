"use client";

import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function GithubReposPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/dayuss/repos?per_page=100&type=public&sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8">Loading repositories...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">My GitHub Public Repositories</h1>
      <ul className="space-y-6">
        {repos.map((repo) => (
          <li key={repo.id} className="border rounded-lg p-4 hover:shadow transition">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="text-gray-600 mt-2 text-sm">{repo.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
