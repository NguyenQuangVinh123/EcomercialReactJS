import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import { withRouter } from 'react-router-dom';
// import { Link} from 'react-router-dom';
import './collection-preview.styles.scss'
const CollectionPreview = ({title ,items,history,match,linkUrl}) =>{
    
    return(
        <div  className= 'collection-preview' >
        <h1  className= 'title' onClick={()=> history.push(`${match.url}/${title.toLowerCase()}`)}> <span>{title.toUpperCase()}</span></h1>
        <div className= 'preview'>
            {
                items.filter((item,index) => index < 4)
                    .map((item)=>(
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
    )
   
        }

export default withRouter(CollectionPreview);