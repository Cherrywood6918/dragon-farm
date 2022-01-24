import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";

const TrainBar = (value) => {
    //console.log(value.train)
    const [train, setTrain] = useState(value.train);
    const [statusTrain, setStatusTrain] = useState('bad');

    function getTrain(train) {
        if (train < 0) return 0
        if (train > 100) return 100
        return train
    }
    useEffect(() => {
        if (Number(train) >= 80) setStatusTrain('good')
        if (Number(train) >= 40 && Number(train) < 80) setStatusTrain('normal')
        if (Number(train) > 0 && Number(train) < 40) setStatusTrain('bad')
    }, [train])

    return (
        <div className="bar">
            Train: <Progress percent={getTrain(train)}
                             status={statusTrain}
                             theme={
                                 {
                                     good: {
                                         color: 'green'
                                     },
                                     normal: {
                                         color: 'yellow'
                                     },
                                     bad: {
                                         color: 'red'
                                     }
                                 }
                             }
        />
        </div>
    );
};

export default TrainBar;