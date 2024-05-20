import React from 'react';

const Header = () => {
    const today = new Date();
    const CreatedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    return (
        <div>
            <h1>TODO LIST</h1>
            <h2>{CreatedDate}</h2>
        </div>
    );
};

export default Header;
