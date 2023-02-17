import React, { useState, useEffect } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import PostPreview from './postPreview'
import blogService from '../../_services/blog.services'

export default function BlogPreview(){
    
    const [posts, setPosts] = useState([]);
	const [selected, setSelected] = React.useState([]);
	// const [position, setPosition] = React.useState(0);
  
	const isItemSelected = (id) => !!selected.find((el) => el === id);
	
	// const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    //   const itemSelected = isItemSelected(id);

    //   setSelected((currentSelected) =>
    //     itemSelected
    //       ? currentSelected.filter((el) => el !== id)
    //       : currentSelected.concat(id)
    //   );
    // };

	// useEffect(() => {
		blogService.blogposts(5)
			.then(json => setPosts(json))
	// })

	return(
		<div className='blogPreviewContainer'>
			<div className="row-center">
				<a href="/blog" className="">Visit our blog!</a>
			</div>
			<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>	
				{posts?.map(post => (
					<PostPreview
						key={post.id}
						id={post.id}
						title={post.title}
						description={post.description}
						author={post.author}
						date={post.date}
						image={post.image}
					/>
					))}
			</ScrollMenu>
		</div>
	)

	function LeftArrow() {
		const { isFirstItemVisible, scrollPrev } =
		  React.useContext(VisibilityContext);
	  
		return (
		  <div className="arrowContainer" disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
			<span class="material-symbols-outlined">
				keyboard_double_arrow_left
			</span>
		  </div>
		);
	  }

	  function RightArrow() {
		const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
	  
		return (
		  <div className="arrowContainer" disabled={isLastItemVisible} onClick={() => scrollNext()}>
			<span class="material-symbols-outlined">
				keyboard_double_arrow_right
			</span>
		  </div>
		);
	  }	  

}
