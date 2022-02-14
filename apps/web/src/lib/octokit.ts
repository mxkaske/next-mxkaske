import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  // auth?
  userAgent: "mxkaske-website v2.0.0",
});

export default octokit;
