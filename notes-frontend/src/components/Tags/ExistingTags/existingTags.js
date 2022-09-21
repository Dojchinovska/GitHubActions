import React from "react";
import Tag from "../Tag/tag";
const existingTags = (props) =>{

    const tags = props.tags.map(tag=>{
        if(!tag.deleted){
            return <Tag key={tag.id} tag={tag} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
        }
    })

    return(<div>
            {tags}
        </div>

    );
}
export default existingTags;
