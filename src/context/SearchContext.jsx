// import React, { createContext, useContext, useState } from 'react';

// const SearchContext = createContext();

// export function useSearchContext() {
//     return useContext(SearchContext);
// }

// export function SearchProvider({ children }) {
//     const [searchQuery, setSearchQuery] = useState('');

//     const updateSearchQuery = (query) => {
//         setSearchQuery(query);
//     };

//     const contextValue = {
//         searchQuery,
//         updateSearchQuery,
//     };

//     return (
//         <SearchContext.Provider value={contextValue}>
//             {children}
//         </SearchContext.Provider>
//     );
// }
