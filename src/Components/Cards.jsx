import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Cards = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.panzcon.com/fetch-games');
        setGames(response.data.games);
        console.log(response.data.games);
      } catch (error) {
        console.error('Error fetching the games:', error);
      }
    };

    fetchGames();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = games.slice(startIndex, endIndex);

  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
          {currentGames.map((item, index) => (
            <div key={index} className="    sm:h-[300px]  bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <img className="w-full h-[200px] object-cover rounded-t-lg relative backdrop-blur-3xl" src={item.imgurl} alt={item.gamename} />
              <div className="p-4">
                <span className="block text-red-500 text-sm font-semibold mb-2">{item.category}</span>
                <h2 className="text-gray-900 font-bold text-xl">{item.gamename}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={Math.ceil(games.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'flex space-x-2'}
            pageClassName={'inline-block'}
            pageLinkClassName={'px-3 py-1 rounded-md border border-red-500 text-gray-700 hover:bg-gray-100'}
            previousClassName={'inline-block text-red'}
            previousLinkClassName={'px-3 py-1 rounded-md border border-red-500 text-red-600 hover:bg-gray-100'}
            nextClassName={'inline-block'}
            nextLinkClassName={'px-3 py-1 rounded-md border border-red-500 text-red-600 hover:bg-gray-100'}
            breakClassName={'inline-block'}
            breakLinkClassName={'px-3 py-1 rounded-md border border-gray-300 text-red-600'}
            disabledClassName={'opacity-50 cursor-not-allowed'}
            activeClassName={'bg-gray-500  h-full text-white'}
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
