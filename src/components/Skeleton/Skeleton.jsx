import React from 'react';
import ContentLoader from "react-content-loader"

const Skeleton = (props) => {
    return (
        <ContentLoader
            speed={2}
            width={290}
            height={50}
            viewBox="0 0 320 50"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="73" y="14" rx="3" ry="3" width="95" height="6" />
            <rect x="73" y="34" rx="3" ry="3" width="150" height="6" />
            <circle cx="28" cy="25" r="24" />
            <rect x="295" y="14" rx="6" ry="6" width="24" height="24" />
        </ContentLoader>
    );
}

export default Skeleton;
