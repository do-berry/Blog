import React from 'react';

function MenuList(props) {
    return (
        <ul>
            { props.menu.map((item) => <li><a key={ item } href="\">{ item }</a></li>) }
        </ul>
    );
}

export default MenuList;