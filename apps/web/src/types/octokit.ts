import { Endpoints } from "@octokit/types";

export type GetCommitShaResponse =
  Endpoints["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"]["response"];
