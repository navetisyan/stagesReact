/**
 * Created by Admin on 12/16/2019.
 */
import React from 'react';
import  DataSet from './../stagesStore.js';
import Stage from './stage.js';
import Search from './searchComponent'

class stagesWrapper extends React.Component {

    constructor(props){
        super(props);

        this.initialDataSet = this.collectDataSet();
        this.state = {
            dataSetCols: this.initialDataSet
        }

    }

    handleDateSetChange = (changedData, oldStage) => {
        let newDataCols = [[...this.state.dataSetCols[0]], [...this.state.dataSetCols[1]], [...this.state.dataSetCols[2]]];
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

    handleSearch = (value) => {

        let searchDataCol = [[...this.initialDataSet[0]], [...this.initialDataSet[1]], [...this.initialDataSet[2]] ];

        searchDataCol = searchDataCol.map(dataColumn => {
            return dataColumn.filter(data => {
                return (data.title.indexOf(value)!== -1 || data.description.indexOf(value) !== -1)
            });
        });
       this.setState({dataSetCols: searchDataCol});
    }



    render (){

        return(
            <div className="wrapper">

                <Search handleSearch={this.handleSearch}/>
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
            </div>
            );
    }

};

export default stagesWrapper;

