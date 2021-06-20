import React, { useState, useEffect } from "react";
import '../../src/App';

const gitHubUrl = "https://api.github.com/users/payam-shaker/repos";

function App() {
  const [githubData, setGitHubData] = useState({});

  useEffect(() => {
    getGitHubRepos();
  }, []);

  const getGitHubRepos = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setGitHubData([...jsonData]);
    console.log(jsonData);
  };

  return (
            <div>
            <h4 class="menu">Jag har nu {githubData.length} repos på GitHub! </h4>
            
             
        </div>

  );
}

export default App;