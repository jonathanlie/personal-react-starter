import React, { useEffect, useMemo, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Character } from '@app-types/common';
import CharacterCard from '@components/CharacterCard';
import { useSearchParams } from 'react-router-dom';

// Define your GraphQL query
const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;


interface GetCharactersData {
  characters: {
    results: Character[];
  };
}

interface GetCharactersVars {} // No variables for this simple query


const Characters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { loading, error, data } = useQuery<GetCharactersData, GetCharactersVars>(GET_CHARACTERS);

  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('search') || '');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (searchTerm) {
      newSearchParams.set('search', searchTerm);
    } else {
      newSearchParams.delete('search');
    }

    setSearchParams(newSearchParams);
  }, [searchTerm, searchParams, setSearchTerm, setSearchParams])

  const filteredCharacters = useMemo(() => {
    if (!data?.characters?.results) return [];

    let currentCharacters = data.characters.results;

    // Name filter
    if (searchTerm) {
      currentCharacters = currentCharacters.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort by name
    // currentCharacters.sort((a, b) => a.name.localeCompare(b.name));

    return currentCharacters;
  }, [data, searchTerm]);

  if (loading) return (
    <div className="flex justify-center items-center h-48">
      <p className="text-xl text-blue-600">Loading characters...</p>
    </div>
  );
  if (error) return (
    <div className="text-center text-red-600">
      <p className="text-xl font-bold">Error loading characters: {error.message}</p>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Rick and Morty Characters (GraphQL)</h1>
      <p className="text-center text-gray-700 mb-8">
        This page demonstrates data fetching using **Apollo Client** and a public **GraphQL API**.
      </p>

      {/* Search filter */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Search characters by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full sm:w-1/2 lg:w-1/3 text-gray-800"
        />

        {/* List / grid toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Switch to grid view ">
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Switch to list view">
            List
          </button>
        </div>
      </div>

      {/* Main display */}
      {filteredCharacters.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-xl">No characters found.</p>
          <p className="text-lg mt-2">Try adjusting your filters.</p>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' // Grid classes
              : 'flex flex-col gap-4' // List classes (flex-col stacks items)
          }
        >
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              viewMode={viewMode}
              character={character}
              searchTerm={searchTerm}
            ></CharacterCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
