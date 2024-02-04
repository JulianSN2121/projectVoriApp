import { Entity } from "../models/Entity";

export const apiClient = async (path: string) => {
    const url = 'http://localhost:8055/items/' + path; // Adjust the URL path according to your Directus setup
    console.log(url)
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data)
    //   // Assuming Directus returns an array of posts in `data.data`
    //   const posts = data.data.map(post => new PostModel(post.id, post.title, post.content));

      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error; // Re-throw the error if you want to handle it later (e.g., to show an error message in the UI)
    }
  };
  