import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Check if there's a hash value in the URL
    const url = new URL("https://joy43.github.io/ph-portfollio-ssjoy/");
    const hash = window.location.hash.substr(1); // Get the hash value without '#'

    if (hash) {
      // If a hash is present, scroll to the element with that ID
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If no hash is present, simply redirect to the URL
      window.location.href = url.href;
    }
  }, []);

  return null;
};

export default About;
