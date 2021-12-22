import React from "react";
import { GetCommitShaResponse } from "@/types/octokit";
import useSWR from "swr";
import Container from "../common/container";
import Text from "../ui/text";
import { formatDistance } from "date-fns";
import { COMMIT_SHA } from "swr.config";
import Link from "../ui/link";

// IDEA: access commit file information based on router
// and display latest commit date

const Footer = () => {
  const { data: commit } = useSWR<GetCommitShaResponse>(
    `/api/github/commit/${COMMIT_SHA}`
  );

  if (!commit.data) {
    return null;
  }

  const formattedDistance = formatDistance(
    new Date(commit.data.author.date),
    new Date()
  );

  return (
    <footer>
      <Container className="text-sm font-light">
        <div className="flex flex-col md:space-x-1 md:flex-row">
          <Text className="italic whitespace-nowrap">
            <span className="font-medium">Last Commit Message </span>(
            {formattedDistance} ago):
          </Text>
          <Link
            href={commit.data.html_url}
            target="_blank"
            rel="noopener"
            className="mb-1"
          >
            <code>`{commit.data.message}`</code>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
