import React from "react";
import Person from "./Person";
const friends=["Zishan","Shameem","Ali"]

function House(){

    return(
        <>
<Person  roll={10} fromDelhi={false} arr={friends} />

        </>
    )
}
export default House