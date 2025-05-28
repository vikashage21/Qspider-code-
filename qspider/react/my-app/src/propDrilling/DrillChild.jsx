import React from 'react'
import DrillChld2 from './DrillChld2'

function drillChild({ data }) {
    console.log(data)
    return (
        <div>
            <DrillChld2 data={data} />

        </div>
    )
}

export default drillChild
