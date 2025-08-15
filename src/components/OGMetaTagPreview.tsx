"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import OgCard from "./OgCard";

interface OgTags {
  [key: string]: string;
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

const OGMetaTagPreview = () => {
  const [url, setUrl] = useState<string>("");
  const [ogTags, setOgTags] = useState<OgTags | null>(null); // Make ogTags nullable
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMetaTags = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/fetch-og-tags?url=${encodeURIComponent(url)}`
      );
      setOgTags(response.data);
      setError("");
    } catch (err) {
      setError(
        "Failed to fetch Open Graph meta tags. Please check the URL and try again."
      );
      setOgTags(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url) {
      fetchMetaTags();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
// console.log(ogTags);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333" }}>Open Graph Meta Tag Preview</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter website URL"
          style={{
            padding: "10px",
            width: "80%",
            marginRight: "10px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Preview
        </button>
      </form>
      {isLoading && (
        <p style={{ color: "#4CAF50" }}>Fetching Open Graph meta tags...</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {ogTags && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2 style={{ color: "#4CAF50" }}>Open Graph Meta Tags</h2>
          <ul>
            {Object.entries(ogTags).map(([key, value]) => (
              <>
                <li key={key} style={{ marginBottom: "10px" }}>
                  <strong>{key}:</strong> {value}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
      {ogTags && <OgCard {...ogTags} />}
    </div>
  );
};

export default OGMetaTagPreview;
