import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import Filters from './Filters';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        next
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
      }
    }
  }
`;

const CharacterList = ({ language }) => {
  const [filters, setFilters] = useState({ status: '', species: '' });
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [sortedCharacters, setSortedCharacters] = useState([]);
  const [sortBy, setSortBy] = useState(''); // Default no sorting

  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page, ...filters },
    onCompleted: (data) => {
      setCharacters((prev) => [...prev, ...data.characters.results]);
    },
  });


  useEffect(() => {
    setCharacters([]);
    setPage(1);
  }, [filters]);

  useEffect(() => {
    if (sortBy) {
      const sorted = [...characters].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name); // Sort by name
        }
        if (sortBy === 'origin') {
          return a.origin.name.localeCompare(b.origin.name); // Sort by origin
        }
        return 0;
      });
      setSortedCharacters(sorted);
    } else {
      setSortedCharacters(characters); // No sorting
    }
  }, [characters, sortBy]);



  const loadMore = () => {
    if (data?.characters?.info?.next) {
      setPage((prevPage) => prevPage + 1);
      fetchMore({
        variables: { page: page + 1, ...filters },
      });
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  if (loading && page === 1) return <div>Loading...</div>;
  if (error) return <div>Error loading characters!</div>;

  return (
    <div>
        <div className='flex justify-between items-center'>
        <Filters setFilters={setFilters} language={language} />
        <div className="mb-4">
            <label htmlFor="sort-by" className="mr-2">Sort By:</label>
            <select id="sort-by" onChange={handleSortChange} value={sortBy}
            className='border p-2 rounded'>
            <option value="">{language === 'en' ? 'None' : 'Keine'}</option>
            <option value="name">Name</option>
            <option value="origin">{language === 'en' ? 'Origin' : 'Herkunft'}</option>
            </select>
        </div>
        </div>
      
      <InfiniteScroll
        dataLength={sortedCharacters.length}
        next={loadMore}
        hasMore={!!data?.characters?.info?.next}
        loader={<div>Loading more characters...</div>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative pb-20">
          {sortedCharacters.map((char) => (
            <div
              key={char.id}
              className="bg-white shadow rounded p-4 flex flex-col items-start"
            >
              <h3 className="font-bold">{language === 'en' ? 'Character Name' : 'Charakter Name'}: {char.name}</h3>
              <p>
                <strong>Status:</strong> {char.status}
              </p>
              <p>
                <strong>{language === 'en' ? 'Species' : 'Spezies'}:</strong> {char.species}
              </p>
              <p>
                <strong>{language === 'en' ? 'Gender' : 'Geschlecht'}:</strong> {char.gender}
              </p>
              <p>
                <strong>{language === 'en' ? 'Origin' : 'Herkunft'}:</strong> {char.origin.name}
              </p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CharacterList;
