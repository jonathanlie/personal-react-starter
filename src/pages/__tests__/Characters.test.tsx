import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';
import Characters from '../../pages/Characters.tsx';

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

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {},
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: '1',
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              image: 'rick.jpg',
            },
            {
              id: '2',
              name: 'Morty Smith',
              status: 'Alive',
              species: 'Human',
              image: 'morty.jpg',
            },
          ],
        },
      },
    },
    delay: 50, // Added a small delay to simulate network latency,
  },
];

const errorMocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {},
    },
    error: new Error('An error occurred'),
  },
];

describe('Characters component', () => {
  it('renders loading state initially', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Characters />
      </MockedProvider>
    );

    expect(await screen.findByText('Loading characters...')).toBeInTheDocument();
  });

  it('renders error state if query fails', async () => {
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Characters />
      </MockedProvider>
    );

    await screen.findByText(/Error loading characters/i);
    expect(screen.getByText(/Error loading characters/i)).toBeInTheDocument();
  });

  it('renders character data on successful query', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Characters />
      </MockedProvider>
    );

    // Wait for a distinct element from the data to appear first
    await screen.findByText('Rick Sanchez');

    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(screen.getByAltText('Rick Sanchez')).toHaveAttribute('src', 'rick.jpg');

    // Use findAllByText because there are multiple matching elements (one for Rick, one for Morty)
    const statusParagraphs = await screen.findAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && element.textContent?.includes('Status: Alive');
    });
    expect(statusParagraphs.length).toBe(2); // Expect 2 elements with "Status: Alive"
    statusParagraphs.forEach(p => expect(p).toBeInTheDocument()); // Assert each one is in the document
  });
});
