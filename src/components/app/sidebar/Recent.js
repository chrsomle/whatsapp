import React from 'react';
import Chat from './Chat';

import './Recent.css';

export default () => {
	return (
		<div className="Recent">
			<Chat read="true" />
			<Chat user="Chris" msg="halo" />
			<Chat
				user="Kezia"
				msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum commodi soluta
				ducimus, perspiciatis vel fugiat nostrum iste nobis veniam aperiam at quaerat quisquam
				eveniet vitae fugit, aut ipsa fuga."
			/>
			<Chat user="Joeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" msg="Yo!" />
			<Chat user="Ron" msg="Okay." read="true" />
			<Chat user="Alex" msg="No" />
			<Chat user="Zoe" msg="Let's see" />
			<Chat user="Mom" msg="Go ask your dad" read="true" />
			<Chat user="Lemy" msg="Ok" read="true" />
			<Chat user="Taz" msg="Hahaha" read="true" />
			<Chat user="Mary" msg="Let me think about it" read="true" />
			<Chat user="Felix" msg="Let's play" read="true" />
			<Chat user="Nadine" msg="See you" read="true" />
			<Chat user="KC" msg="Yes" read="true" />
		</div>
	);
};
