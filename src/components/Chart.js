import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }

    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }

    render(){
        return (
            <div className="Chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio : false,
                        title: {
                            display: this.props.displayTitle,
                            text: "You v.s. Average American Coffee Spending/week",
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition

                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;