/**
 * Created by Admin on 12/16/2019.
 */
import React, {useState, useEffect} from 'react';


const Stage = (props) => {

    const data = props.options;
    const column = useState({column: data.stage});

        return (
            <div className={"stage column-"+ data.stage}>
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>
                    {data.stage !== 1  && <div className="toLeft"><i style={{fontSize:'24px'}} className='far fa-arrow-alt-circle-left'></i></div>}
                    {data.stage !== 3 && <div className="toRight"><i style={{fontSize:'24px'}} className='far fa-arrow-alt-circle-right'></i></div>}
                </div>
            </div>
        );

}
export default Stage;