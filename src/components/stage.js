/**
 * Created by Admin on 12/16/2019.
 */
import React, {useState} from 'react';


const Stage = (props) => {

    const data = props.options;
    const [column, setColumn] = useState(data.stage);
    const swipeRight = () => {
        let newColumn = data.stage+1;
        setColumn(newColumn);

        let newData = {...data, stage:newColumn};
        props.handleDateSetChange(newData, props.options.stage);

    }

    const swipeLeft = () => {
        let newColumn = data.stage-1;
        setColumn(newColumn);

        let newData = {...data, stage:newColumn};
        props.handleDateSetChange(newData, props.options.stage)
    }

        return (
            <div className={"stage column-"+ column}>
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>
                    {column !== 1  && <div className="toLeft" onClick={swipeLeft}><i style={{fontSize:'24px'}} className='far fa-arrow-alt-circle-left'></i></div>}
                    {column !== 3 && <div className="toRight" onClick={swipeRight}><i style={{fontSize:'24px'}} className='far fa-arrow-alt-circle-right'></i></div>}
                </div>
            </div>
        );

}
export default Stage;