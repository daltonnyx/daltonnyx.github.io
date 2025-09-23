import { useState, useEffect } from 'react';
import type { GitHubRelease } from '../../services/githubApi';
import { GitHubApiService } from '../../services/githubApi';
import { Calendar, Download, ExternalLink, Tag, User, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
  </div>
);

const ErrorMessage = ({ message, onRetry }: { message: string; onRetry: () => void }) => (
  <div className="flex flex-col items-center justify-center py-12 px-4">
    <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load releases</h3>
    <p className="text-gray-600 text-center mb-4 max-w-md">{message}</p>
    <button
      onClick={onRetry}
      className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
    >
      Try Again
    </button>
  </div>
);

const ReleaseCard = ({ release }: { release: GitHubRelease }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = GitHubApiService.formatReleaseDate(release.published_at);
  const parsedBody = GitHubApiService.parseMarkdown(release.body || 'No release notes available.');
  
  const totalDownloads = release.assets.reduce((sum, asset) => sum + asset.download_count, 0);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {release.name || release.tag_name}
              </h3>
              {release.prerelease && (
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                  Pre-release
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>{release.tag_name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{release.author.login}</span>
              </div>
            </div>

            {release.assets.length > 0 && (
              <div className="flex items-center space-x-1 text-sm text-gray-600 mb-3">
                <Download className="w-4 h-4" />
                <span>{totalDownloads} total downloads</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <a
              href={release.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200"
              title="View on GitHub"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className={cn(
          "prose prose-sm max-w-none transition-all duration-300",
          isExpanded ? "max-h-none" : "max-h-32 overflow-hidden"
        )}>
          <div 
            dangerouslySetInnerHTML={{ __html: parsedBody }}
            className="text-gray-700"
          />
        </div>

        {release.body && release.body.length > 300 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-primary-500 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}

        {release.assets.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Downloads</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {release.assets.map((asset) => (
                <a
                  key={asset.name}
                  href={asset.browser_download_url}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded border hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-700 truncate">
                    {asset.name}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    {asset.download_count}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Releases = () => {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReleases = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await GitHubApiService.getReleases();
      setReleases(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReleases();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AgentCrew Releases
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest releases, features, and improvements to AgentCrew.
            Download the latest version or browse previous releases.
          </p>
        </div>

        {loading && <LoadingSpinner />}
        
        {error && !loading && (
          <ErrorMessage message={error} onRetry={fetchReleases} />
        )}

        {!loading && !error && releases.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No releases found</h3>
            <p className="text-gray-600">There are currently no public releases available.</p>
          </div>
        )}

        {!loading && !error && releases.length > 0 && (
          <div className="space-y-6">
            {releases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Releases;