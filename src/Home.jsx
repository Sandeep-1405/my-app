import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="A short description of your website or page."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://wordtracker-swoop-uploads.s3.amazonaws.com/uploads/ckeditor/pictures/2090/content_beach.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="A short description of your website or page."
        />
        <meta
          name="twitter:image"
          content="https://wordtracker-swoop-uploads.s3.amazonaws.com/uploads/ckeditor/pictures/2090/content_beach.jpg"
        />
      </Helmet>
      <h1>Home</h1>
      <Link to="/settings">Go to settings</Link>
    </div>
  );
};

export default Home;
