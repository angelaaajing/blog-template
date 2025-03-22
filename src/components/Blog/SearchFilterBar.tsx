import { useState, useRef } from 'react';
import { Author, Tag } from '../../types';
import { useClickAway } from '../../hooks/useClickAway';

interface SearchFilterBarProps {
  authors: Author[];
  tags: Tag[];
  onSearch: (query: string) => void;
  onFilterChange: (filters: { authors: string[], tags: string[] }) => void;
  selectedAuthors: string[];
  selectedTags: string[];
}

const SearchFilterBar = ({ 
  authors, 
  tags, 
  onSearch, 
  onFilterChange,
  selectedAuthors,
  selectedTags
}: SearchFilterBarProps) => {
  const [query, setQuery] = useState('');
  const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  
  const authorDropdownRef = useRef<HTMLDivElement>(null);
  const tagDropdownRef = useRef<HTMLDivElement>(null);
  
  useClickAway(authorDropdownRef, () => setShowAuthorDropdown(false));
  useClickAway(tagDropdownRef, () => setShowTagDropdown(false));
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  const handleAuthorSelect = (authorId: string) => {
    const newAuthors = selectedAuthors.includes(authorId)
      ? selectedAuthors.filter(id => id !== authorId)
      : [...selectedAuthors, authorId];
      
    onFilterChange({ authors: newAuthors, tags: selectedTags });
  };
  
  const handleTagSelect = (tagId: string) => {
    const newTags = selectedTags.includes(tagId)
      ? selectedTags.filter(id => id !== tagId)
      : [...selectedTags, tagId];
      
    onFilterChange({ authors: selectedAuthors, tags: newTags });
  };
  
  const getSelectedAuthorsText = () => {
    if (selectedAuthors.length === 0) return 'All Authors';
    if (selectedAuthors.length === 1) {
      return authors.find(a => a.id === selectedAuthors[0])?.name || 'Author';
    }
    return `${selectedAuthors.length} Authors`;
  };
  
  const getSelectedTagsText = () => {
    if (selectedTags.length === 0) return 'All Tags';
    if (selectedTags.length === 1) {
      return tags.find(t => t.id === selectedTags[0])?.name || 'Tag';
    }
    return `${selectedTags.length} Tags`;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search posts, authors, tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      
      <div className="flex flex-wrap gap-4">
        <div className="relative" ref={authorDropdownRef}>
          <button
            onClick={() => setShowAuthorDropdown(!showAuthorDropdown)}
            className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 min-w-[160px]"
          >
            <span>{getSelectedAuthorsText()}</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showAuthorDropdown && (
            <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
              <div className="p-2">
                {authors.map(author => (
                  <div key={author.id} className="mb-1 last:mb-0">
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 rounded">
                      <input
                        type="checkbox"
                        checked={selectedAuthors.includes(author.id)}
                        onChange={() => handleAuthorSelect(author.id)}
                        className="rounded"
                      />
                      <span>{author.name}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="relative" ref={tagDropdownRef}>
          <button
            onClick={() => setShowTagDropdown(!showTagDropdown)}
            className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 min-w-[160px]"
          >
            <span>{getSelectedTagsText()}</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showTagDropdown && (
            <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
              <div className="p-2">
                {tags.map(tag => (
                  <div key={tag.id} className="mb-1 last:mb-0">
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 rounded">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag.id)}
                        onChange={() => handleTagSelect(tag.id)}
                        className="rounded"
                      />
                      <span>{tag.name}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {(selectedAuthors.length > 0 || selectedTags.length > 0) && (
          <button
            onClick={() => onFilterChange({ authors: [], tags: [] })}
            className="text-sm text-red-600 hover:text-red-800 self-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear filters
          </button>
        )}
      </div>
      
      {(selectedAuthors.length > 0 || selectedTags.length > 0) && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-500">Active filters:</span>
            
            {selectedAuthors.map(authorId => {
              const author = authors.find(a => a.id === authorId);
              return (
                <div key={authorId} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <span>{author?.name}</span>
                  <button 
                    onClick={() => handleAuthorSelect(authorId)}
                    className="text-blue-800 hover:text-blue-900"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              );
            })}
            
            {selectedTags.map(tagId => {
              const tag = tags.find(t => t.id === tagId);
              return (
                <div key={tagId} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <span>{tag?.name}</span>
                  <button 
                    onClick={() => handleTagSelect(tagId)}
                    className="text-green-800 hover:text-green-900"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilterBar; 