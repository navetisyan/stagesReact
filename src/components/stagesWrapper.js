/**
 * Created by Admin on 12/16/2019.
 */
import React from 'react';
import  DataSet from './../stagesStore.js';
import Stage from './stage.js';

class stagesWrapper extends React.Component {

    constructor(props){
        super(props);

        console.log('DataSet=', DataSet);
        this.dataSetCols = [[], [], []];

        this.state = {
            showData: this.dataSetCols
        }

    }

    componentWillMount = () => {
        this.showDataSet();
    }

    showDataSet = () => {
       DataSet.map((data, index) => {
           if(!this.dataSetCols[data.stage-1]) this.dataSetCols[data.stage-1] = [];
          this.dataSetCols[data.stage-1].push(<Stage options={data} key={index}/>);
        });
    }

    render (){

        return(
            <div className="wrapper">
                    <div className ="box box1" id="box1"><div>Stage 1</div>{this.dataSetCols[0]}</div>
                    <div className ="box box2" id="box2"><div>Stage 2</div>{this.dataSetCols[1]}</div>
                    <div className ="box box3" id="box3"><div>Stage 3</div>{this.dataSetCols[2]}</div>
                </div>
        );
    }

};

export default stagesWrapper;

