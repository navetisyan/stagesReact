/**
 * Created by Admin on 12/16/2019.
 */
import React from 'react';
import  DataSet from './../stagesStore.js';
import Stage from './stage.js';

class stagesWrapper extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dataSetCols: this.collectDataSet()
        }

    }

    handleDateSetChange = (changedData, oldStage) => {
        let newDataCols = [...this.state.dataSetCols];
        newDataCols[oldStage-1] = newDataCols[oldStage-1].filter(data => {
            return data.id !== changedData.id
        });
        newDataCols[changedData.stage-1].push(changedData);

        this.setState({dataSetCols:newDataCols});

    }


    collectDataSet = () => {

        let set = [];
        DataSet.map((data, index) => {
            if(!set[data.stage-1]) set[data.stage-1] = [];
           return set[data.stage-1].push(data);
        });

         return set;
    }



    render (){

        return(
            <div className="wrapper">
                    <div className ="box box1" id="box1"><div>Stage 1</div>
                        {this.state.dataSetCols[0].map((data) => {
                            return <Stage options={data} handleDateSetChange = {this.handleDateSetChange} key={data.id}/>
                        })
                        }
                    </div>
                    <div className ="box box2" id="box2"><div>Stage 2</div>
                        {this.state.dataSetCols[1].map((data) => {
                            return <Stage options={data} handleDateSetChange = {this.handleDateSetChange} key={data.id}/>
                        })
                        }
                    </div>
                    <div className ="box box3" id="box3"><div>Stage 3</div>
                        {this.state.dataSetCols[2].map((data) => {
                            return <Stage options={data} handleDateSetChange = {this.handleDateSetChange} key={data.id}/>
                        })
                        }
                    </div>
                </div>
        );
    }

};

export default stagesWrapper;

