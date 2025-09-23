export interface GitHubRelease {
  id: number;
  name: string;
  tag_name: string;
  body: string;
  html_url: string;
  published_at: string;
  draft: boolean;
  prerelease: boolean;
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  assets: Array<{
    name: string;
    download_count: number;
    browser_download_url: string;
  }>;
}

const GITHUB_API_BASE = "https://api.github.com";
const REPO_OWNER = "saigontechnology";
const REPO_NAME = "AgentCrew";

export class GitHubApiService {
  static async getReleases(): Promise<GitHubRelease[]> {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          `GitHub API error: ${response.status} ${response.statusText}`,
        );
      }

      const releases: GitHubRelease[] = await response.json();
      return releases.filter((release) => !release.draft);
    } catch (error) {
      console.error("Error fetching GitHub releases:", error);
      throw error;
    }
  }

  static formatReleaseDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  static parseMarkdown(markdown: string): string {
    // Basic markdown parsing for release notes
    return markdown
      .replace(/^\s*\- (.+)/gm, '<li class="ml-4">$1</li>')
      .replace(/(<li.*<\/li>)/gs, '<ul class="list-disc pl-4 mb-2">$1</ul>')
      .replace(
        /#{1,6}\s+(.+)/g,
        '<h3 class="text-lg font-semibold mb-2 text-gray-900">$1</h3>',
      )
      .replace(
        /`(.+?)`/g,
        '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>',
      )
      .replace(/---/g, "<hr/>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  }
}
