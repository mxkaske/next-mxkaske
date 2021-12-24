import React from "react";
import { GetCommitShaResponse } from "@/types/octokit";
import useSWR from "swr";
import Container from "../common/container";
import Text from "../ui/text";
import { formatDistance } from "date-fns";
import { COMMIT_SHA } from "swr.config";
import Link from "../ui/link";
import ThemeSwitch from "../common/theme-switch";

// IDEA: access commit file information based on router
// and display latest commit date

const Footer = () => {
  const { data: commit } = useSWR<GetCommitShaResponse>(
    `/api/github/commit/${COMMIT_SHA}`
  );

  return (
    <footer className="border-t border-gray-300 dark:border-gray-700">
      <Container className="text-gray-600 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <Text className="font-light">Switch Theme:</Text>
          <ThemeSwitch />
        </div>
        <div className="flex flex-col justify-between space-y-1 text-xs italic font-light sm:flex-row sm:space-x-1 sm:space-y-0">
          <div className="flex flex-col md:space-x-1 md:flex-row">
            {commit?.data ? (
              <>
                <Text className="whitespace-nowrap">
                  <span className="font-medium">Last Commit Message </span>(
                  {formatDistance(
                    new Date(commit.data.author.date),
                    new Date()
                  )}{" "}
                  ago):
                </Text>
                <Link
                  href={commit.data.html_url}
                  target="_blank"
                  rel="noopener"
                  className="mb-1"
                >
                  <code>`{commit.data.message}`</code>
                </Link>{" "}
              </>
            ) : null}
          </div>
          <Text>Berlin, 2021</Text>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
