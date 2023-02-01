import css from "./postFindList.module.css"


const PostFindList = ({items, showPost}) => {


    const elements = items.map(({ id, webformatURL, largeImageURL, tags }) =>
        <li key={id} onClick={() => showPost({id, largeImageURL})} className={css.item}>
      
            <img className={css.imgCard} src={webformatURL} alt={tags} />
         
        </li>);
    return (

        <ul className={css.list}>
            
            {elements}
        </ul>
    )
}

export default PostFindList;

PostFindList.defaultProps = {
    items: []
}