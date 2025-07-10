import React from 'react';
import { Character } from '@app-types/common';

interface CharacterCardProps {
  character: Character;
  viewMode: 'list' | 'grid';
  searchTerm: string;
}

const highlightText = (text: string, highlight: string): (string | JSX.Element)[] => {
  if (!highlight || highlight.trim() === '') {
    return [text]; // No highlight needed, return original text as a single string in an array
  }

  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  const lowerText = text.toLowerCase();
  const lowerHighlight = highlight.toLowerCase();

  let matchIndex = lowerText.indexOf(lowerHighlight, lastIndex);

  while (matchIndex !== -1) {
    // Add text before the match
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    // Add the highlighted part
    const matchedText = text.substring(matchIndex, matchIndex + highlight.length);
    parts.push(
      <span key={matchIndex} className="bg-yellow-300 px-0.5 rounded"> {/* Apply highlight style here */}
        {matchedText}
      </span>
    );

    lastIndex = matchIndex + highlight.length;
    // Find the next match after the current one
    matchIndex = lowerText.indexOf(lowerHighlight, lastIndex);
  }

  // Add any remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const CharacterCard: React.FC<CharacterCardProps> = ({character, viewMode, searchTerm}) => {
  return (
    <div
      key={character.id}
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-200 ease-in-out
              ${viewMode === 'list' ? 'flex flex-row items-center p-4' : ''} `} // Add flex for list item for horizontal layout
    >
      <img
        src={character.image}
        alt={character.name}
        className={viewMode === 'list' ? 'w-24 h-24 object-cover rounded-md mr-4' : 'w-full h-48 object-cover'} // Smaller image for list
      />
      <div className={viewMode === 'list' ? 'flex-grow' : 'p-4'}> {/* Adjust padding for list view */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {highlightText(character.name, searchTerm)}
        </h2>
        <p className="text-gray-700 text-sm">
          Status: <span className={`font-medium ${character.status === 'Alive' ? 'text-green-600' : 'text-red-600'}`}>{character.status}</span>
        </p>
        <p className="text-gray-700 text-sm">Species: <span className="font-medium">{character.species}</span></p>
      </div>
    </div>
  )
}

export default CharacterCard;
