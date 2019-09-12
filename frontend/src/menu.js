import React from 'react';

function MenuList(props) {
    return (
        <ul>
            { props.menu.map((item) => <li><a key={ item }>{ item }</a></li>) }
        </ul>
    );
}

export default MenuList;