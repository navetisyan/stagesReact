/**
 * Created by Admin on 12/22/2019.
 */
import React from 'react';

const Search = (props) => {

    const [value, setValue] = React.useState("search stage...");

    const onHandleSearch = (e) => {
        console.log('value', e);

        setValue(e.target.value);

        console.log('props=', props);
        props.handleSearch(e.target.value);

    }


   return (
       <div className="search"> <input value={value} onChange={onHandleSearch}/> </div>
   )

}

export default Search;